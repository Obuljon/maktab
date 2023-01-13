import service from "../../database/homePage/service.js";
import counter from "../../database/homePage/counter.js";
import features from "../../database/homePage/features.js";
import slider from "../../database/homePage/slider.js";
import teacherComtent from "../../database/homePage/teacher.comtent.js";
import testimonial from "../../database/homePage/testimonial.js";
import course from "../../database/kurs/course.js";
import fromblog from "../../database/blog/fromblog.js";
import aboutUs from "../../database/homePage/aboutUs.js";
class About{
    aboutHome(req, res){
        res.render("main/about", {features, slider, teacherComtent, counter, testimonial, service, course, fromblog, aboutUs })
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
    
}
export default new About()



