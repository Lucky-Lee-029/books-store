const db=require('../utils/db');
module.exports={
    bookInCart:(id)=>{
        let data=db.load(`from cart c, book_cart bc, books b
        where c.cart_id=${id} and c.cartid=bc.cart_id and bc.book_id=b.book_id`);
        return data
    },
    sumPrice:(id)=>{
        let data=db.load(`select sum(book_price) from cart c, book_cart bc, books b
        where c.cart_id=${id} and c.cartid=bc.cart_id and bc.book_id=b.book_id`);
        return data;
    },
    addToOrder:async(id, order, time, listbook, price)=>{
        let unix_timestamp = time;
        let receive=Number(time)+86400*3;
        let orderId=Number(order);
        await db.load(`insert into orders (order_id, order_user,order_time,order_receive,order_price,order_address,order_status)
        values (${orderId}, ${id}, "${time}","${receive}",${price},${id},1)`);
        let i;
        for(i in listbook){
            await db.load(`insert into book_cart (book_id,order_id) values (${listbook[i]},${orderId})`);
        }
    },
    allOrder: async (id)=>{
        let order=await db.load(`select order_id as id, order_price as total, order_time as time_start, order_receive as time_end, order_status as status from orders where order_user=${id}`);
        if(!order[0]){
            return [];
        }
        let i;
        for(i in order){
            let idOrder=order[i].id;
            order[i].books=[];
            let books=await db.load(`select book_id as book from book_cart where order_id=${idOrder}`);
            let j;
            for(j in books){
                order[i].books[j]=books[j].book;
            }
        }
        return order;
    }
}