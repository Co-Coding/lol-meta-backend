require('dotenv').config()
const PORT = process.env.PORT || 3000;
let express = require('express')
let app = express();
const routes = require('./server/routes')


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

// Routes
routes(app);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');

});