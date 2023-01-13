import { Schema, model } from "mongoose";

const News = new Schema({
    img:{type:String, required:true},
    title:{type:String, required:true},
    date:{type:String, required:true},
    comment:{type:String, required:true},
})

export default model('Blog', News);