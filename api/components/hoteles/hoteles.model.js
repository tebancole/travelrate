//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var HotelSchema = new mongoose.Schema({
  nombre : {type : String},
  latitud : {type : String},
  longitud : {type : String},
  provincia : {type : String},
  canton : {type : String},
  distrito : {type : String},
  direccionExacta : {type : String},
  telServicioCliente : {type : Date},
  telReservaciones : {type : String},
  telServicioCliente : {type:String},
  correoReservaciones : {type : String},
  foto :{type : String, required : true},
  rating : {type: String}
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Hotel', HotelSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural