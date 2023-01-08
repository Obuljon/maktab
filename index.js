import express from 'express';
import { connect } from 'mongoose';
import session from 'express-session';
import layout from 'express-ejs-layouts';
import HomeRouter from './routers/main.router.js';
import GalleryRouter from './routers/gallery.router.js';
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
app.use(HomeRouter);
app.use(GalleryRouter);

app.listen(8080, () => console.log('server is runnning Port:8080'));