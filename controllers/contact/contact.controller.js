import ContactBase from '../../models/contact_module/contact.module.js';
class Contact {
    conactPage(req, res) {
        res.render('main/contact');
    }
    async Contact(req, res) {
        await ContactBase.create(req.body);
        res.redirect('/contactsms');
    }
}

export default new Contact();