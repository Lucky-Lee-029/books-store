const book=require("../models/books-model");
const cart=require("../models/cart-model");
const profile=require("../models/profile-model");
const account=require("../models/account-model");
const router = require('express').Router();
var path = require('path');
var url = require('url'); 

router.get("/api/basicinfor",async(req,res)=>{
    let id = req.query.id;
    let data=await profile.BasicInfor(id);
    res.send(data);
});
router.get("/api/ortherinfor",async(req,res)=>{
    let id=req.body.id;
    let data=await profile.OtherInfor(id);
    res.send(data);
});

router.post("/api/books",async(req,res)=>{
    let id=req.body.id;
    let data = await book.allBookInfor()
    res.send(data);
});

router.post("/api/search",async (req,res)=>{
    let name=req.body.name;
    let data=await book.searchByName(name);
    res.send(data);
});
router.post("/api/auth",async(req,res)=>{
    console.log(req);
    let username=req.body.username;
    let password=req.body.password;
    let data=await account.checkAcount(username,password);
    res.send(data);
})
router.post("/api/newacount",async(req,res)=>{
    let data=await account.creatAcount(req.body.username,req.body.password,req.body.name,req.body.phone,req.body.email);
    res.send("Heloo world!");
})
router.post("/api/editpass",async(req,res)=>{
    let data=await account.editPass(req.body.id,req.body.password);
    res.send("Heloo world!");
})
router.post("/api/getaddress", async(req,res)=>{
    let id=req.body.id;
    let data=account.address(id);
    res.send(data);
})
module.exports = router ;