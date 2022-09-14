import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jhoniApi:jhoni123456789@cluster0.hig5y.mongodb.net/ApiJhoni", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,

})

.then(()=>{console.log("Base de Datos Conectada.")})
.catch(e => console.log(e))