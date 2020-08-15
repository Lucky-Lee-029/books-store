const book=require("../models/books-model");
const cart=require("../models/cart-model");
const profile=require("../models/profile-model");
const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(
    bodyParser.urlencoded({
        extended: true
    })
);
router.get("/basicinfor/:id",(res,req)=>{
    console.log(" im here");
    console.log(req.params);
    var id = req.params.id;
    console.log(i);
    // res.send(profile.BasicInfor(id));
});
router.get("/ortherinfor",(res,req)=>{
    let id=req.body.id;
    res.json(profile.OtherInfor(id));
});

router.post("/books",(res,req)=>{
    let id=req.body.id;
    res.json(book.allBookInfor());
});

router.post("/search",(res,req)=>{
    let name=req.body.name;
    res.json(book.searchByName(name));
});
module.exports = router ;