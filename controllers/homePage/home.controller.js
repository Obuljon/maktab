import service from "../../database/homePage/service.js";
import counter from "../../database/homePage/counter.js";
import features from "../../database/homePage/features.js";
import slider from "../../database/homePage/slider.js";
import teacherComtent from "../../database/homePage/teacher.comtent.js";
import testimonial from "../../database/homePage/testimonial.js";
import course from "../../database/kurs/course.js";
import fromblog from "../../database/blog/fromblog.js";
import aboutUs from "../../models/homePage/aboutUs.js";
import {  extname, dirname, resolve, normalize } from "path";
import { fileURLToPath } from "url";
import { unlinkSync, renameSync } from "fs"

class About{
    async aboutHome(req, res){
        const about = await aboutUs.find()
        res.render("main/about", {features, slider, teacherComtent, counter, testimonial, service, course, fromblog, about })
    }

    ourfeatures(req, res){
        const id = req.params._id;
        if(features.find(item => item._id == id)){
            const course = features.find(item => item._id == id).detail
            res.render("main/coursearchive", { course, title: `${features.find(item => item._id == id).nameh4}` })
        }else{
            features.forEach(item => {
                const course = item.detail
                if(item.detail.find(elment => elment._id == id)){
                    const fan = item.detail.find(elment => elment._id == id)
                    return res.render("main/detail", { fan, course })
                }
            })
        }
    }
    async aboutUsEdit(req, res){
        const about = await aboutUs.find()
        const aboutus = about[0]
        res.render("main/aboutusEdit",  { aboutus } )
    }

    async EditAboutUs(req, res){
        const aboutus = await aboutUs.find()
        const about_video = aboutus[0].video
        const about_img = aboutus[0].img
        const id = aboutus[0]._id;
        if(req.files.video){
            const ext = extname(req.files.video[0].originalname)
            const fileway = normalize(req.files.video[0].path)
            renameSync(fileway,  fileway + ext)
            req.body.video = req.files.video[0].filename + ext
            unlinkSync(`./public/assets/img/video/${about_video}`)
        }
        if(req.files.img){
            const eXt = extname(req.files.img[0].originalname);
            const filWay = normalize(req.files.img[0].path);
                renameSync(filWay, filWay + eXt);
                req.body.img = req.files.img[0].filename + eXt
                unlinkSync(`./public/assets/img/video/${about_img}`);
        }
        const obj = req.body
        await aboutUs.findByIdAndUpdate(id, obj)
        res.redirect("/")
        
    }
}
export default new About()



