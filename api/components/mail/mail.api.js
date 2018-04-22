let nodemailer = require('nodemailer');

module.exports.enviarCorreo = (req, res) =>{

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'echavarriac@ucenfotec.ac.cr', //CORREO_DEL_EQUIPO
      pass: 'HiSSOn70&#43;70'        //CONTRASEÑA_DEL_EQUIPO
    }
  });

  let mailOptios = {
    from: 'echavarriac@ucenfotec.ac.cr',
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
