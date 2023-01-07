import Registerbase from '../models/register.module.js';
import {hash} from 'bcrypt';
class Singup {
    singupPage(req, res) {
        res.render('main/singup');
    }
    async Singup(req, res) {
        let MavjudEmaillar = await Registerbase.findOne({email:req.body.email});

        if (MavjudEmaillar) {
            return res.redirect('/singup');
        } else {
           req.body.password =  await hash(req.body.password, 10);
           await Registerbase.create(req.body);
           res.redirect('/singin');
        }
    }
}

export default new Singup();