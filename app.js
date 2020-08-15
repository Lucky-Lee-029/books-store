//Express instance
var express = require('express');
const app = express();
const PORT = process.env.PORT | 3000;
const book=require("./models/books-model");
const pro=require("./models/profile-model");
const account=require("./models/account-model");
const bodyParser = require('body-parser');
app.use(function(err, req, res, next) {
    console.log(err);
    res.render('errors');
});
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//User route
require('./middlewares/route.mdw')(app);

//Listen at PORT
app.listen(PORT, async() => {
    account.checkAcount("chung","123456");
    console.log(`Listening Port: ${PORT}`);
});

