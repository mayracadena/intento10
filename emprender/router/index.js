const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { titulo: 'Muebles' });
});

router.get('/cocinas', (req, res) => {
  res.render('cocinas', { titulo: 'Cocinas' });
});

router.get('/armarios', (req, res)=>{
  res.render('armarios', {titulo: 'Armarios'})
});

module.exports = router;
