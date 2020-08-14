const db=require('../utils/db');
module.exports={
    allBookInfor: ()=>{
        `select * from books b inner join categories c on b.book_cat=c.cat_id`
    },
    singleBookinfor:(id)=>{

    },
    bookEdit: (id, name, cat, author, price)=>{
        `update books
        set book_name='${name}', book_cat='${cat}',book_author='${author}', book_price='${price}'
        where book_id=${id}`
    },
    bookDelete:(id)=>{
        `delete books
        where id=${id}`
    },
    searchByName: (name, offset) =>{
        db.load(`SELECT * FROM books WHERE MATCH(book_name) Against("+${name}*" IN BOOLEAN MODE) limit 10 offset 1`)
    }
}