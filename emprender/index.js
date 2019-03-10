const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();


//servidor
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('servidor en el puerto', app.get('puerto'));
});

//configuracion de plantilla
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'plantilla'),
  partialsDir: path.join(app.get('views'), 'partes'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//publico
app.use(express.static(path.join(__dirname, 'public')));


//vistas 
app.set('views', path.join(__dirname, 'views'));

//rutas
app.use(require('./router'));