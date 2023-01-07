import RegisterBase from '../models/register.module.js';
import {compare} from 'bcrypt';
class Singin {
    singinPage(req, res) {
        res.render('main/singin');
    }
    async Singin(req, res) {
        const {email, password} = req.body;
        const user = await RegisterBase.findOne({email});

        if (user) {
            const passed = await compare(password, user.password);
            if (passed) {
                req.session.user = user;
             return res.redirect('/');
            } else {
                 res.redirect('/singin');
            }
        } else {
            return res.redirect('/singin');
        }
    }
}

export default new Singin();