import course from '../../database/kurs/course.js'
class Detail {
    async detailpageId(req, res) {
        
        res.render('main/detail', {course})
    }
    detailPage(req, res){
        let fan = course[0]
        res.render("main/detail", { course, fan} )
    }
}

export default new Detail();