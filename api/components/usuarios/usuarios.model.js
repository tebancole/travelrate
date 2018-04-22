//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var UserSchema = new mongoose.Schema({
  cedula : {type : String, required : true},
  primerNombre : {type : String, required : true},
  segundoNombre : {type : String},
  primerApellido : {type : String, required : true},
  segundoApellido : {type : String},
  correo : {type : String, required : true, unique: true},
  telefono : {type : String, required : true},
  fechaNacimiento : {type : Date, required : true},
  contrasenna : {type : String, required : true}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('User', UserSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural