const ContactosController = require("../controllers/ContactosController");
const contactosController = new ContactosController();

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyect Code 2042' });
});

router.post("/form-contacto", contactosController.add);

module.exports = router;
