import { Schema, model } from "mongoose";

const aboutus = new Schema({
    h2:{type:String, required:true},
    video:{type:String, required:true},
    img:{type:String, required:true},
    onecomment:{type:String, required:true},
    li1:{type:String, required:true},
    li2:{type:String, required:true},
    li3:{type:String, required:true},
    li4:{type:String, required:true},
    li5:{type:String, required:true},
    twocomment:{type:String, required:true},
})

export default model('aboutUs', aboutus);