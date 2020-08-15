//Express instance
var express = require('express');
const app = express();
const PORT = process.env.PORT | 3000;
const book=require("./models/books-model");
const pro=require("./models/profile-model");
app.use(function(err, req, res, next) {
    console.log(err);
    res.render('errors');
});

//Listen at PORT
app.listen(PORT, async() => {
    let data=await pro.OtherInfor(1);
    console.log(data);
    console.log(`Listening Port: ${PORT}`);
});