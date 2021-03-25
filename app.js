//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 7000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static("uploads"));

//routes prefix

app.use('/api/post', require('./routes/routes'));
app.use('/api/entrada', require('./routes/routesEntrada'));
app.use('/api/salida', require('./routes/routesSalida'));

// database connection
// mernv1, LR4L6C6AS1PTTmpU
// const uri = `mongodb+srv://armalot:dOem6rXj2o1FwO5O@cluster0.jkspm.mongodb.net/control?retryWrites=true&w=majority`;
// const uri = `mongodb+srv://mernv1:LR4L6C6AS1PTTmpU@cluster0.qox98.mongodb.net/post?retryWrites=true&w=majority`;
const uri = `mongodb+srv://armalot:mI8NP98MpefsSj4J@cluster0.jkspm.mongodb.net/control?retryWrites=true&w=majority`;
(
async () => {
    mongoose.connect(uri,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))
})()

// start server

app.listen(port, () => console.log('Servidor en marcha en ' + port))