import course from '../../database/kurs/course.js'
class Detail {
    async detailpageId(req, res) {
        
        res.render('main/detail', {course})
    }
}

export default new Detail();