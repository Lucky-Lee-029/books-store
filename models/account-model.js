const db=require('../utils/db');
const jwt = require('jwt-simple');
var secret = 'xxx';
const bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

const checkAuth = async(username, password) => {
    let data={
        "role": 0,
        "id": 0
    }
    console.log(password);
    let admin=await db.load(`select admin_password as pass, admin_id as id from admins where admin_logname="${username}"`);
    if(admin[0]){
        if(bcrypt.compareSync(password,admin[0].pass)){
            data.role=2;
            data.id=admin[0].id;
        }
    }else{
        let user=await db.load("select `user-password` as pass, `user-id` as id from users where `user-username`="+ `"${username}"`);
        if(user[0]){
            if(bcrypt.compareSync(password,user[0].pass)){
                data.role=1;
                data.id=user[0].id;
            }
        }
    }
    if(data.role==0) return null;
    let checked=jwt.encode(data,secret);
    return checked;
}
module.exports={
    checkAcount:checkAuth,
    createAccount:async(username, password, name, phone, email)=>{
        if(!username || !password || !name || !phone || !email)
        return;
        let hashPass=await bcrypt.hashSync(`${password}`, salt);
        await db.load("insert into users (`user-username`, `user-password`,`user-name`,`user-phone`,`user-email`) values"
        + `("${username}","${hashPass}","${name}","${phone}","${email}")`);
        let id=await db.load("select `user-id` as id from users where `user-username`="+`"${username}"`);
        await db.load(`insert into address(address_user, address_name) values (${id[0].id},";;;;;")`);
        return null;
    },
    editPass: async(id, oldPass, newPass)=>{
        let username=await db.load("select `user-username` as name from users where `user-id`="+`${id}`);
        let check=await checkAuth(username[0].name,oldPass);
        if(check){
            let hashPass=await bcrypt.hashSync(`${newPass}`, salt);
            await db.load("update users set `user-password`="+`"${hashPass}" where `+"`user-id`="+`${id}`);
            return true;
        }
        return false;
    },
    editadress: async(id, address)=>{
        await db.load(`update address set address_name="${address}" where address_user=${id}`);
        return null;
    },
    address: async(id)=>{
        let address=await db.load(`select address_name as address from address where address_user=${id}`);
        let str=address[0].address;
        let items=str.split(';');
        let data={
            "local": items[0] || "Chưa xác định",
            "city": items[1] || "Chưa xác định",
            "state": items[2] || "Chưa xác định",
            "landmark": items[3] || "Chưa xác định",
            "country": items[4] || "Chưa xác định",
            "code":items[5] || "Chưa xác định"
        }
        console.log(data);
        return data;
    },
    editEmail: async(id, email)=>{
        await db.load("update users set `user-email`="+`" ${email} "`+" where `user-id`="+`${id}`);
        return null;
    },
    editPhone: async(id, phone)=>{
        await db.load("update users set `user-phone`="+`" ${phone} "`+" where `user-id`="+`${id}`);
        return null;
    }
}