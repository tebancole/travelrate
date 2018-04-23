const express = require('express'),
      router = express.Router(),
      hoteles = require('./hoteles.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});


/**
 * Función que se encarga de registrar los usuarios dentro del local storage
 */
router.route('/save_hotel')
  .post((req, res) => {
    hoteles.registrar(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */

router.route('/get_all_hoteles')
  .get((req, res) => {
    hoteles.listarTodos(req,res);
});

/**
 * Función que actualiza los usuarios
 */

router.route('/update_hotel')
  .put((req, res) => {
    hoteles.actualizar(req,res);
});

router.route('/buscar_hotel_id')
  .post(function (req, res) {
    hoteles.buscar_usuario_por_id(req, res);
  });

module.exports = router;