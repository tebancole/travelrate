const express = require('express'),
      router = express.Router(),
      users = require('./usuarios.api');


router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});



router.route('/save_user')
  .post((req, res) => {
    users.registrar(req,res);
});



router.route('/get_all_users')
  .get((req, res) => {
    users.listarTodos(req,res);
});


router.route('/update_user')
  .put((req, res) => {
    users.actualizar(req,res);
});

router.route('/buscar_user_id')
  .post(function (req, res) {
    users.buscar_usuario_por_id(req, res);
  });

module.exports = router;