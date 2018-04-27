const UserModel = require('./usuarios.model');

module.exports.registrar = (req, res) => {
  var newUser = new UserModel({
    cedula              :  req.body.cedula,
    primernombre        :  req.body.primernombre,
    segundonombre       :  req.body.segundonombre,
    primerapellido      :  req.body.primerapellido,
    segundoapellido     :  req.body.segundoapellido,
    correo              :  req.body.correo,
    telefono            :  req.body.telefono,
    fechanacimiento     :  req.body.fechanacimiento,
    contrasenna         :  req.body.contrasenna,
    rol                 :  req.body.rol,
    estado              :  req.body.estado,
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
  UserModel.update({cedula: req.body.cedula}, req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

// module.exports.buscar_usuario_por_id = function(req, res){
//   UserModel.findById({_id : req.body.id}).then(
//       function(usuario){
//           res.send(usuario);
//       });
// };


