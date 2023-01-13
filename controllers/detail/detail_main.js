
import BlogBase from '../../models/blog_module/blog.module.js'
class Detail {
    async detailpageId(req, res) {
        const Blogarchive_ = await BlogBase.findById(req.params.id);
        const Find_ = await BlogBase.find();
        // console.log(Blogarchive_);
        res.render('main/detail', {Blogarchive_, Find_})
    }
}

export default new Detail();