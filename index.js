import express from 'express';
import { connect } from 'mongoose';
import session from 'express-session';
import layout from 'express-ejs-layouts';
import HomeRouter from './routers/main.router/main.router.js'
import GalleryRouter from './routers/gallery_router/gallery.router.js';
import Homepage from "./routers/homePage/homerouter.js"
import ContactRouter from './routers/contact_router/contact_router.js';
import Contact_sms_Router from './routers/contactsms_router/contact_sms_router.js';
import DeleteRouter from './routers/delete_router/delete.router.js';
connect('mongodb://localhost/maktab', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(`public`)); 
app.use(express.json());
app.use(layout);
app.use(session({
    secret: "School",
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    resave: false,
    saveUninitialized: false
}));
app.use((req, res, next) => {
    res.locals.user = req.session.user || "";
    next();
})
app.use(Homepage)
app.use(HomeRouter);
app.use(GalleryRouter);
app.use(ContactRouter);
app.use(Contact_sms_Router);
app.use(DeleteRouter);
app.listen(2066, () => console.log('server is runnning Port:8080'));