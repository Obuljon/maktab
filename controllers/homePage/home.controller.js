import service from "../../database/homePage/service.js";
import counter from "../../database/homePage/counter.js";
import features from "../../database/homePage/features.js";
import slider from "../../database/homePage/slider.js";
import teacherComtent from "../../database/homePage/teacher.comtent.js";
import testimonial from "../../database/homePage/testimonial.js";
import course from "../../database/kurs/course.js";
import fromblog from "../../database/blog/fromblog.js";
class About{
    aboutHome(req, res){
        res.render("main/about", {features, slider, teacherComtent, counter, testimonial, service, course, fromblog })
    }
    proFessionalCourses(req, res){
        let course = professionalcourses;
        res.render("main/coursearchive", { course, title: "proFessional kurslar" })
    }
    expertteachers(req, res){
        let course = expertTeachers;
        res.render("main/coursearchive", { course, title: "Malakali o'qtuvchilar" })
    }
    onlineLearning(req, res){
        let course = onlinelearning;
        res.render("main/coursearchive", { course, title: "Online talimlar" })
    }
    audioLessons(req, res){
        let course = audiolessons;
        res.render("main/coursearchive", { course, title: "Audio darslar" }) 
    }
    scientificfilms(req, res){
        let course = scientificfilms;
        res.render("main/coursearchive", { course, title: "Ilmiy filmlar" }) 
    }
    professionalCertificate(req, res){
        const course = professionalcertificate;
        res.render("main/coursearchive", { course, title: "Professional Certificate" })
    }
}
export default new About()


