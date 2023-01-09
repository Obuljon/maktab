import ContactBase from '../../models/contact_module/contact.module.js';
class Contactsms {
    async contactsmsPage(req, res) {
        let ContactSms = await ContactBase.find(); 
        res.render('main/contactsms', {ContactSms});
    }
}

export default new Contactsms();