const book=require("../models/books-model");
const cart=require("../models/cart-model");
const profile=require("../models/profile-model");
const account=require("../models/account-model");
const router = require('express').Router();
const bodyParser = require('body-parser');
router.use(
    bodyParser.urlencoded({
        extended: true
    })
);
router.get("/api/basicinfor/:id",(res,req)=>{
    console.log(" im here");
    console.log(req.params);
    var id = req.params.id;
    console.log(i);
    // res.send(profile.BasicInfor(id));
});
router.get("/api/ortherinfor",(res,req)=>{
    let id=req.body.id;
    res.send(profile.OtherInfor(id));
});

router.post("/api/books",(res,req)=>{
    let id=req.body.id;
    res.send(book.allBookInfor());
});

router.post("/api/search",(res,req)=>{
    let name=req.body.name;
    res.send(book.searchByName(name));
});
router.post("/api/auth",(res,req)=>{
    let username=req.body.username;
    let password=req.body.password;
    res.send(account.checkAcount(username,password));
})
module.exports = router ;