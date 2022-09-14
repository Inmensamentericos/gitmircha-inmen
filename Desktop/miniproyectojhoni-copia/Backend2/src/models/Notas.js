import mongoose from "mongoose";
const { Schema, model } = mongoose;

const esquemaDeNotas = new Schema({
    descripcion:String, 
    email: String,   
    pendiente: {
        type: Boolean,
        default: true
    },
    
    
}, 
{ 
    timestamps:true, 
    versionKey: false
},

)

export default model("Nota", esquemaDeNotas)