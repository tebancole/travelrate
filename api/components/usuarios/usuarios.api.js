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
    contrasenna         :  req.body.contrasenna,
    rol                 :  req.body.rol
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


