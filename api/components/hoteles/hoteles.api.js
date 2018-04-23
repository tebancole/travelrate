const HotelModel = require('./hoteles.model');

module.exports.registrar = (req, res) => {
  var newHotel = new HotelModel({
    nombre: req.body.nombre,
    latitud: req.body.latitud,
    longitud: req.body.longitud,
    provincia: req.body.provincia,
    canton: req.body.canton,
    distrito: req.body.distrito,
    direccionExacta: req.body.direccionExacta,
    telServicioCliente: req.body.telServicioCliente,
    telReservaciones: req.body.telReservaciones,
    correoReservaciones: req.body.correoReservaciones,
    foto: req.body.foto
  });

  newHotel.save((err) => {
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
  HotelModel.update({correo: req.body.correo}, req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

module.exports.buscar_hoteles_por_id = function(req, res){
  HotelModel.findById({_id : req.body.id}).then(
      function(hoteles){
          res.send(hoteles);
      });
};


module.exports.agregar_tarjeta_hoteles = function (req, res) {

  HotelModel.update(
    { _id: req.body._id },
    {
      $push:
        {
          'listaTarjetas':
            {
              id: req.body.id,
              tarjetaID: req.body.tarjetaID
            }
        }
    },
    function (error) {
      if (error) {
        res.json({
          success: false, msg: 'No se ha actualizado el hoteles debido al siguiente error: ' + handleError(error)
        });
      } else {
        res.json({ success: true, msg: 'El hoteles ha sido modificado con éxito' });
      }

    });

};
