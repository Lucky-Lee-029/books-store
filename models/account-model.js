const db=require('../utils/db');
const jwt = require('jwt-simple');
var secret = 'xxx';

module.exports={
    checkAcount:async(username, password)=>{
        let data={
            "role": 0,
            "id": 0
        }
        let admin=await db.load(`select admin_password as pass, admin_id as id from admins where admin_logname="${username}"`);
        if(admin[0]){
            if(admin[0].pass==password){
                data.role=2;
                data.id=admin[0].id;
        }
        }else{
            let user=await db.load("select `user-password` as pass, `user-id` as id from users where `user-username`="+ `"${username}"`);
            if(user[0]){
                if(password==user[0].pass){
                    data.role=1;
                    data.id=user[0].id;
                }
            }
        }
        let checked=jwt.encode(data,secret);
        return checked;
    },
    creatAcount:async(username, password, name, phone, email)=>{
        await db.load("insert into users (`user-username`, `user-password`,`user-name`,`user-phone`,`user-email`) values"
        + `("${username}","${password}","${name}","${phone}","${email}")`);
        let id=await db.load("select `user-id` as id from users where `user-username`="+`"${username}"`);
        await db.load(`insert into address(address_user, address_name) values (${id[0].id},";;;;;")`)
    },
    editPass: async(id, password)=>{
        await db.load("update users set `user-password`="+`"${password}" where `+"`user-id`="+`${id}`);
    },
    editadress: async(id, address)=>{
        await db.load(`update address set address_name="${address}" where address_user=${id}`);
    },
    address: async(id)=>{
        let address=await db.load(`select address_name as address from address where address_user=${id}`);
        let str=address[0].address;
        let items=str.split(';');
        let data={
            "local": items[0],
            "city": items[1],
            "state": items[2],
            "landmark": items[3],
            "country": items[4],
            "code":items[5]
        }
        console.log(data);
        return data;
    }
}