let nodemailer = require('nodemailer');

module.exports.enviarCorreo = (req, res) =>{

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'byticos506@gmail.com', //CORREO_DEL_EQUIPO
      pass: 'mordiscode'        //CONTRASEÑA_DEL_EQUIPO
    }
  });

  //Se uso el correo byticos para no exponer una contraseña propia

  let mailOptios = {
    from: 'byticos506@gmail.com',
    to: req.body.correo,
    subject: req.body.subject,
    text: req.body.contrasenna
  }

  transporter.sendMail(mailOptios,(error, info)=>{
    if(error){
      res.json({success:false, msg:error});
    }
    else{
      res.json({success:true});
    }
  })


};
