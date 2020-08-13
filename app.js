//Express instance
var express = require('express');
const app = express();
const PORT = process.env.PORT | 3000;

app.use(function(err, req, res, next) {
    console.log(err);
    res.render('errors');
});

//Listen at PORT
app.listen(PORT, () => {
    console.log(`Listening Port: ${PORT}`);
});