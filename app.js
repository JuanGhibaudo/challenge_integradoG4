const express = require('express');
const app = express(); 
const mainRoutes = require('./src/routes/mainRoutes.js')
const shopRoutes = require('./src/routes/shopRoutes.js')
const adminRoutes = require('./src/routes/adminRoutes.js') // para importar las rutas
const methodOverride = require('method-override');//para usar put y delete ( instalar npm i method-override)

app.use(express.static('public'));
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);

app.use(express.urlencoded());
app.use(express.json()); // estos 2 son para poder usar post (versiones viejas usaban "body parser" pero con mi version no hay q instalar nada)
app.use(methodOverride('_method')); // para poder usar put y delete


app.listen(4000, () => console.log("servidor corriendo en http://localhost:4000"));
   