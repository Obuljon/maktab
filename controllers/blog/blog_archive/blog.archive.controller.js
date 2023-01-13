import BlogAddBase from '../../../models/blog_module/blog.module.js';
class Blgarchive { 
    async BblogarchivePage(req, res) {
        const Blgmodule = await BlogAddBase.find();
        res.render('main/blogarchive', {Blgmodule});
    }
 }

 export default new Blgarchive();