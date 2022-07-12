var express = require('express');
var router = express.Router();
const axios = require('axios');

const httpAxios =  axios.create({
  baseURL:'http://localhost:2500/v2/sextob/api/',
})


/* GET home page. */
router.get('/', function(req, res, next) {
  httpAxios.get(`productos`).then(respuesta=>{
    console.log(respuesta.data.productos);
    res.render('index', { productos: respuesta.data.productos });
  })
});

module.exports = router;
