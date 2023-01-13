import course from "../../database/kurs/course.js";
import professionalCourses from "../../database/kurs/professionalCourses.js";
import professionalCertificate from "../../database/kurs/professionalCertificate.js";
import expertTeachers from "../../database/kurs/expertTeachers.js";
import OnlineLearning from "../../database/kurs/onlineLearning.js";
import scientificfilms from "../../database/kurs/scientificfilms.js";
import audiolessons from "../../database/kurs/audiolessons.js";

class Main{
    CoursearchivePage(req, res){
        res.render('main/coursearchive', { course, title:"Kurslar" })
    }
    ourFeatures(req, res){
        const id = req.params._id;
        if(professionalCourses.find(item => item._id === id)){
            const fan = professionalCourses.find(item => item._id === id)
            const course = professionalCourses
            res.render("main/detail", { fan, course, })
        }else if(expertTeachers.find(item => item._id === id)){
            const fan = expertTeachers.find(item => item._id === id)
            const course = expertTeachers
            res.render("main/detail", { fan, course, })
        }else if(OnlineLearning.find(item => item._id === id)){
            const fan = OnlineLearning.find(item => item._id === id);
            const course = OnlineLearning
            res.render("main/detail", { fan, course } )
        }else if(audiolessons.find(item => item._id === id)){
            const fan = audiolessons.find(item => item._id === id)
            let course = audiolessons;
            res.render("main/detail", { fan, course } )
        }else if (scientificfilms.find(item => item === id)){
            const fan = scientificfilms.find(item => item === id)
            const course = scientificfilms;
            res.render("main/detail", { fan, course })
        }else if (professionalCertificate.find(item => item === id)){
            const fan = professionalCertificate.find(item => item === id)
            const course = professionalCertificate;
            res.render("main/detail", { fan, course })
        }
    }
}

export default new Main()