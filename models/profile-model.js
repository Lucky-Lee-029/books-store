const db=require('../utils/db');

module.exports={
    BasicInfor:async(id)=> {
        let data=await db.load("select `user-name` as name from users where `user-id` = "+id);
        
        return data[0];
    },
    OtherInfor:async(id)=> {
        let data=await db.load("select `user-email` as email, `user-phone` as phone from users where `user-id` = "+id);
        let address=await db.load(`select address_name as address from address where address_id=${id}`);
        data[0].address=address[0].address;
        return data[0];
    }
}