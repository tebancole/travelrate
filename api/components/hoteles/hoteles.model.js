//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var HotelSchema = new mongoose.Schema({
  nombre : {type : String, required : true},
  latitud : {type : String, required : true},
  longitud : {type : String},
  provincia : {type : String, required : true},
  canton : {type : String},
  distrito : {type : String, required : true, unique: true},
  direccionExacta : {type : String, required : true},
  telServicioCliente : {type : Date, required : true},
  telReservaciones : {type : String, required : true},
  correoReservaciones : {type : String, required : true},
  foto :{type : String, required : true}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('User', HotelSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural