const express = require('express'),
      router = express.Router(),
      hoteles = require('./hoteles.api');


router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});


router.route('/save_hotel')
  .post((req, res) => {
    hoteles.registrar(req,res);
});


router.route('/get_all_hoteles')
  .get((req, res) => {
    hoteles.listarTodos(req,res);
});

router.route('/actualizar_hotel')
  .put((req, res) => {
    hoteles.actualizar(req,res);
});

router.route('/buscar_hotel_id')
  .post(function (req, res) {
    hoteles.buscar_hoteles_por_id(req, res);
  });

module.exports = router;