import ContactBase from '../../models/contact_module/contact.module.js';
class Delete {
    async deletePage(req, res) {
        const _id = req.params.id;
        await ContactBase.findByIdAndDelete(_id);
        res.redirect('/contactsms');
    }
}

export default new Delete();