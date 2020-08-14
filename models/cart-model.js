const db=require('../utils/db');
module.exports={
    bookInCart:(id)=>{
        `select * from cart c, book_cart bc, books b
        where c.cart_id=${id} and c.cartid=bc.cart_id and bc.book_id=b.book_id`
    },
    price:(id)=>{
        `select sum(book_price) from cart c, book_cart bc, books b
        where c.cart_id=${id} and c.cartid=bc.cart_id and bc.book_id=b.book_id`
    }
}