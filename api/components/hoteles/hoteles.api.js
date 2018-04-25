const HotelModel = require('./hoteles.model');

module.exports.registrar = (req, res) => {
  var nuevoHotel = new HotelModel({
    id: req.body.id,
    nombre: req.body.nombre,
    latitud: req.body.latitud,
    longitud: req.body.longitud,
    provincia: req.body.provincia,
    canton: req.body.canton,
    distrito: req.body.distrito,
    direccionexacta: req.body.direccionexacta,
    telserviciocliente: req.body.telserviciocliente,
    telreservaciones: req.body.telreservaciones,
    correoserviciocliente: req.body.correoserviciocliente,
    correoreservaciones: req.body.correoreservaciones,
    foto: req.body.foto,
    rating: req.body.rating
  });

  nuevoHotel.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de hoteles' + err});
    }else{
      res.json({success:true, msj:'Se registró el hoteles correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  HotelModel.find().then((hoteles) => {
    res.send(hoteles);
  });
};

module.exports.actualizar = (req,res) => {
  HotelModel.update({id: req.body.id}, req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

// module.exports.buscar_hoteles_por_id = function(req, res){
//   HotelModel.findById({_id : req.body.id}).then(
//       function(hoteles){
//           res.send(hoteles);
//       });
// };



