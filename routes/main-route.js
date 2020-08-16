const book=require("../models/books-model");
const cart=require("../models/cart-model");
const profile=require("../models/profile-model");
const account=require("../models/account-model");
const cat=require("../models/categories-model");
const router = require('express').Router();
var path = require('path');
var url = require('url'); 
// books 
router.get("/api/books",async(req,res)=>{
    let data = await book.allBookInfor()
    res.send(data);
});
router.post("/api/search",async (req,res)=>{
    let name=req.body.name;
    let data=await book.searchByName(name);
    res.send(data);
});
// cat
router.get("/api/allcat", async(req,res)=>{
    console.log("here");
    let data=await cat.allCat();
    res.send(data);
})
router.post("/api/bookincat", async(req,res)=>{
    let id=req.body.id;
    let data=await cat.bookInCat(id);
    res.send(data);
})

// infor
router.post("/api/basicinfor",async(req,res)=>{
    let id = req.body.id;
    let data=await profile.BasicInfor(id);
    res.send(data);
});
router.post("/api/otherinfor",async(req,res)=>{
    let id=req.body.id;
    let data=await profile.OtherInfor(id);
    res.send(data);
});

//acount
router.post("/api/auth",async(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let data=await account.checkAcount(username,password);
    res.send(data);
})
router.post("/api/newaccount",async(req,res)=>{
    let data=await account.createAccount(req.body.username,req.body.password,req.body.name,req.body.phone,req.body.email);
    res.send("Heloo world!");
})
router.post("/api/editpass",async(req,res)=>{
    let data=await account.editPass(req.body.id,req.body.password);
})
router.post("/api/getaddress", async(req,res)=>{
    let id=req.body.id;
    let data=account.address(id);
    res.send(data);
})

//order
router.post("/api/addorder", async(req,res)=>{
    await cart.addToOrder(req.body.id,req.body.idUser,req.body.time_start,req.body.books,req.body.total);
})
router.post("/api/allorder", async(req,res)=>{
    let id=req.body.id;
    let data =await cart.allOrder(id);
    res.send(data);
})

module.exports = router ;