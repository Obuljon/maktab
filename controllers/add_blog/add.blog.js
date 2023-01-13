import BlogAddBase from '../../models/blog_module/blog.module.js';
import { extname, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { unlinkSync, renameSync } from "fs";
class Addblog {
     addblogPage(req, res) {
        res.render('main/addblog');
    }
    async Add(req, res) {
        const ext = extname(req.file.originalname).toLowerCase();

        if (!(ext === ".png" || ext === ".jpg")) {
            unlinkSync(resolve(dirname(fileURLToPath(import.meta.url)), "../../public/images/" + req.file.filename));
            return res.redirect("/addblog");
        }

        req.body.img = req.file.filename + ext;

        renameSync(resolve(dirname(fileURLToPath(import.meta.url)), "../../public/images/" + req.file.filename),
                   resolve(dirname(fileURLToPath(import.meta.url)), "../../public/images/" + req.file.filename + ext)
        );

        await BlogAddBase.create(req.body);
        res.redirect('/blogarchive');
    }
}
// dsds
export default new Addblog();