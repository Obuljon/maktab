import ImgBase from '../models/gallery.module.js';
class Gallery {
    galleryPage(req, res) {
        res.render('main/gallery', {ImgBase})
    }
}

export default new Gallery();