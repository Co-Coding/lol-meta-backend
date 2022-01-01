let express = require('express');
let app = express();

app.get('/', (req, res) => {

    res.status(200).json({
        mensaje: 'Servidor funcionando'
    });

});

module.exports = app;