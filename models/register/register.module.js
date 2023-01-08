import {Schema, model} from 'mongoose';

const Newschema = new Schema({
  email:{type:String, required:true},
  password:{type:String, required:true}
})

export default model('register', Newschema);