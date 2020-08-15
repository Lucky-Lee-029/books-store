const db=require('../utils/db');
const jwt = require('jwt-simple');
var secret = 'xxx';

module.exports={
    checkAcount:async(username, password)=>{
        let data={
            "raw": 0
        }
        let adminPass=await db.load(`select admin_password as pass from admins where admin_logname="${username}"`);
        if(adminPass[0]){
            if(adminPass[0].pass==password){
                data.raw=2;
        }
        }else{
            let userPass=await db.load("select `user-password` as pass from users where `user-username`="+ `"${username}"`);
            console.log(userPass);
            if(userPass[0]){
                console.log(userPass[0]);
                if(password==userPass[0].pass){
                    data.raw=1;
                }
            }
        }
        let checked=jwt.encode(data,secret);
        console.log(data);
        return checked;
    },
    creatAcount:async(username, password, name, phone, email,address)=>{
        await db.load("insert into users (`user-username`, `user-password`,`user-name`,`user-phone`,`user-email`) values"
        + `("${username}","${password}","${name}","${phone}","${email}")`);
        let id=await db.load("select `user-id` as id from users where `user-username`="+`"${username}"`);
        await db.load(`insert into address(address_user, address_name) values (${id[0].id},"${address}")`)
    },
    editPass: async(id, password)=>{
        await db.load("update users set `user-password`="+`"${password}" where `+"`user-id`="+`${id}`);
    }
}