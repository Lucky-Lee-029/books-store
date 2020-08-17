//Express instance
var express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT | 3000;
const book=require("./models/books-model");
const pro=require("./models/profile-model");
const account=require("./models/account-model");
const order=require("./models/cart-model");
const cat=require("./models/categories-model");
const multer=require('multer');

app.use(express.static(path.join(__dirname, "public/dist")));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(err, req, res, next) {
    console.log(err);
    res.render('errors');
});
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());
//User route
require('./middlewares/route.mdw')(app);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public/dist/index.html"));
});
//Listen at PORT
app.listen(PORT, async() => {
    console.log(`Listening Port: ${PORT}`);
});
