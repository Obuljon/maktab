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
import Blg_Archive_Router from './routers/blog_router/blg_archive.router.js';
import DetailRouter from './routers/detail_router/detail.router.js';
import BlogAddBaseRouter from './routers/add_blog/add.blog.js';
import multer from "multer";
import { dirname } from "path";
import { fileURLToPath } from "url";
connect('mongodb://localhost/maktab', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(multer({dest: 'public/images'}).single('img'));
app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`)); 
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
// app.use(Homepage)
app.use(HomeRouter);
app.use(GalleryRouter);
app.use(ContactRouter);
app.use(Contact_sms_Router);
app.use(DeleteRouter);
app.use(Blg_Archive_Router);
app.use(DetailRouter);
app.use(BlogAddBaseRouter);

app.listen(8080, () => console.log('server is runnning Port:8080'));

