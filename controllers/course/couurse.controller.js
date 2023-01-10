import course from "../database/kurs/course.js";

class Main{
    CoursearchivePage(req, res){
        res.render('main/coursearchive', { course, title:"Kurslar" })
    }
}

export default new Main()