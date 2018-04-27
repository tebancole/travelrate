//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var HotelSchema = new mongoose.Schema({
  id : {type: String},
  nombre : {type : String},
  latitud : {type : String},
  longitud : {type : String},
  provincia : {type : String},
  canton : {type : String},
  distrito : {type : String},
  direccionexacta : {type : String},
  telserviciocliente : {type : String},
  telreservaciones : {type : String},
  telserviciocliente : {type:String},
  correoreservaciones : {type : String},
  foto :{type : String},
  rating : {type: Array},
  ratingsuma: {type: String},
  estado :{type : String},
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Hotel', HotelSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural