import bcrypt from "bcryptjs";

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const esquemaDeUsuario = new Schema({

    nombre: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

},
    {   timestamps: true,
        versionKey: false}

)

esquemaDeUsuario.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}
esquemaDeUsuario.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default model("User", esquemaDeUsuario);