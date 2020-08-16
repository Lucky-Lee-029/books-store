const db=require('../utils/db');
module.exports={
    allBookInfor: async()=>{
        let data=await db.load(`select b.book_id as id, b.book_name as name, c.cat_name as category, b.book_author as author, b.book_price as price
         from books b inner join categories c on b.book_cat=c.cat_id`);
        var item;
        for(item in data){
            data[item].image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c";
            data[item].description="Nothing";
        }
        return data;
    },
    singleBookinfor:(id)=>db.load(`select * from books`)
    ,
    bookEdit: (id, name, cat, author, price)=>{
        return db.load(`update books
        set book_name='${name}', book_cat='${cat}',book_author='${author}', book_price='${price}'
        where book_id=${id}`)
    },
    bookDelete:(id)=>{
        db.load(`delete books
        where id=${id}`)
    },
    searchByName: async(name) =>{
        let data=await db.load(`SELECT * FROM books WHERE MATCH(book_name) Against("+${name}*" IN BOOLEAN MODE) limit 10 offset 0`)
        var item;
        for(item in data){
            data[item].image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c";
            data[item].description="Nothing";
        }
        return data;
    }
}