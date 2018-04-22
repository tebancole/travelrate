const UserModel = require('./usuarios.model');

module.exports.registrar = (req, res) => {
  var newUser = new UserModel({
    cedula              :  req.body.cedula,
    primerNombre        :  req.body.primerNombre,
    segundoNombre       :  req.body.segundoNombre,
    primerApellido      :  req.body.primerApellido,
    segundoApellido     :  req.body.segundoApellido,
    correo              :  req.body.correo,
    telefono            :  req.body.telefono,
    fechaNacimiento     :  req.body.fechaNacimiento,
    contrasenna         :  req.body.contrasenna
  });

  newUser.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de usuarios' + err});
    }else{
      res.json({success:true, msj:'Se registró el usuario correctamente'});
    }
  });
};

module.exports.listarTodos = (req,res) => {
  UserModel.find().then((usuarios) => {
    res.send(usuarios);
  });
};

module.exports.actualizar = (req,res) => {
  UserModel.update({correo: req.body.correo}, req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

module.exports.buscar_usuario_por_id = function(req, res){
  UserModel.findById({_id : req.body.id}).then(
      function(usuario){
          res.send(usuario);
      });
};

module.exports.agregar_paquete_convenio = function (req, res) {
  console.log('listaPaquetesConvenios  ' + req.body.listaPaquetesConvenios);

  UserModel.update({ _id: req.body._id }, { $push: { 'listaPaquetesConvenios': { tracking: req.body.tracking } } },
      function (error) {
          if (error) {
              res.json({ success: false, msg: 'No se ha actualizado el usuario debido al siguiente error: ' + handleError(error) });
          } else {
              res.json({ success: true, msg: 'El usuario ha sido modificado con éxito' });
          }

      });

};

module.exports.agregar_tarjeta_usuario = function (req, res) {
  console.log('listaTarjetas  ' + req.body.listaTarjetas);

  UserModel.update(
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
          success: false, msg: 'No se ha actualizado el usuario debido al siguiente error: ' + handleError(error)
        });
      } else {
        res.json({ success: true, msg: 'El usuario ha sido modificado con éxito' });
      }

    });

};


module.exports.agregar_paquete = function (req, res) {
  console.log('listaPaquetes  ' + req.body.listaPaquetes);

  UserModel.update({ _id: req.body._id }, { $push: { 'listaPaquetes': { tracking: req.body.tracking } } },
      function (error) {
          if (error) {
              res.json({ success: false, msg: 'No se ha actualizado el usuario debido al siguiente error: ' + handleError(error) });
          } else {
              res.json({ success: true, msg: 'El usuario ha sido modificado con éxito' });
          }

      })
    };  

  module.exports.buscar_tarjeta_por_id = function (req, res) {
    UserModel.findOne({id: req.body.tarjetaID}).then(
      function (usuario) {
        res.send(usuario);
      });
  };

