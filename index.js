//npm install ejs
const express = require('express');
const app = express();

app.engine('hmtl', require('ejs').renderFile);
app.set('view engine', 'ejs')
var path = require('path');
app.set('views', path.join(__dirname, '/view'));


//npm install body-parser
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//npm install consign
var consign = require('consign');
consign().include('controller/routes').into(app);

app.listen(8081,function(){
    console.log("Servidor na url http://localhost:8081");
});
