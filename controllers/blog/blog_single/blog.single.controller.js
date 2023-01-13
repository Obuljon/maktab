import BlogBase from '../../../models/blog_module/blog.module.js';

class Blogsingle {
    async blogsinlePage(req, res) {
        const Blogsignle = await BlogBase.findById(req.params.id);
        const Blogsinglee = await BlogBase.find();
        res.render('main/signle', {Blogsignle, Blogsinglee});
    }
}

export default new Blogsingle();