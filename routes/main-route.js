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
router.post("/api/addbook",async (req,res)=>{
    let name=req.body.name;
    let cat=req.body.catId;
    let author=req.body.author;
    let price=req.body.price;
    await book.bookAdd(name,cat,author,price);
    res.send(null);
});
router.post("/api/editbook",async (req,res)=>{
    let id=req.body.bookId;
    let name=req.body.name;
    let cat=req.body.catId;
    let author=req.body.author;
    let price=req.body.price;
    await book.bookEdit(id,name,cat,author,price);
    res.send(null);
});
router.post("/api/delbook",async (req,res)=>{
    let name=req.body.bookId;
    let data=await book.bookDelete(id);
    res.send(null);
});
router.post("/api/singlebook",async (req,res)=>{
    let id=req.body.id;
    let data=await book.singleBookinfor(id);
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
router.post("/api/addcat", async(req,res)=>{
    let name=req.body.catName;
    await cat.addCat(name);
    res.send(null);
})
router.post("/api/editcat", async(req,res)=>{
    let name=req.body.catName;
    let id=req.body.catId;
    await cat.editCat(id,name);
    res.send(null);
})
router.post("/api/delcat", async(req,res)=>{
    let id=req.body.catId;
    await cat.deleteCat(id);
    res.send(null);
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
    res.send(null);
})
router.post("/api/editpass",async(req,res)=>{
    let data=await account.editPass(req.body.id,req.body.old_pass,req.body.new_pass);
    if(data==true){
        res.send(true);
    }else{
        res.send(false);
    }
})
router.post("/api/getaddress", async(req,res)=>{
    let id=req.body.id;
    let data=await account.address(id);
    res.send(data);
})
router.post("/api/editaddress",async(req,res)=>{
    let id=req.body.id;
    let address=req.body.address;
    await account.editadress(id,address);
    res.send(null);
})
router.post("/api/editcontact",async(req,res)=>{
    let id=req.body.id;
    let email=req.body.email;
    let phone=req.body.phone;
    console.log(email);
    console.log(phone);
    if(email){
        await account.editEmail(id,email);
    }
    if(phone){
        await account.editPhone(id,phone);
    }
    res.send(null);
})
//order
router.post("/api/addorder", async(req,res)=>{
    await cart.addToOrder(req.body.id,req.body.idUser,req.body.time_start,req.body.books,req.body.total);
    res.send(null);
})
router.post("/api/allorder", async(req,res)=>{
    let id=req.body.id;
    let data =await cart.allOrder(id);
    res.send(data);
})
router.post("/api/changestatus", async(req,res)=>{
    let id=req.body.orderId;
    let status=req.body.status;
    await cart.editStatus(id,status);
    res.send(null);
})
router.post("/api/admin/ordercomplete", async(req,res)=>{
    let id=req.body.orderId;
    await cart.editStatus(id,1);
    res.send(null);
})
module.exports = router ;