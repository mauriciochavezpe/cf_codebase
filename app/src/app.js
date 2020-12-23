const express = require('express');
const router = require('./api/routers/router')
const app = express();


app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    // res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY,Origin, X-Requested-With,Content-Type, Accept,Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
    // res.header("Allow", "POST,GET,PUT,DELETE,OPTIONS");
    console.log("======================================");
	console.log("Ruta: "+req.hostname+":"+""+req.originalUrl+" Metodo: "+req.method);
	console.log("======================================");
    next();
})
app.use("/api", router);

module.exports = app;

