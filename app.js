require('dotenv').config()
const PORT = process.env.PORT || 3000;
let express = require('express')
let app = express();
const routes = require('./infrastructure/routes/routes')
const cors = require('cors')

app.use(cors())
app.use(express.json());

routes(app);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 3000');

});