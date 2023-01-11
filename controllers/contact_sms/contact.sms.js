import ContactBase from '../../models/contact_module/contact.module.js';
class Contactsms {
    async contactsmsPage(req, res) {
        const ContactSms1 = await ContactBase.find(); 
        res.render('main/contactsms', {ContactSms1});
    }
}

export default new Contactsms();