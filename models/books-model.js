const db=require('../utils/db');
module.exports={
    allBookInfor: async()=>{
        let data=await db.load(`select b.book_id as id, b.book_name as name, c.cat_name as category, b.book_author as author, b.book_price as price
         from books b inner join categories c on b.book_cat=c.cat_id`);
        var item;
        for(item in data){
            data[item].image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c";
            data[item].description="Lorem ipsum dolor sit amet.";
            data[item].longDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum a";
        }
        return data;
    },
    singleBookinfor:async(id)=>{
        let data= await db.load(`select b.book_id as id, b.book_name as name, c.cat_name as category, b.book_author as author, b.book_price as price from books b inner join categories c on b.book_cat=c.cat_id where b.book_id=${id}`);
        data[0].image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c";
        data[0].description="Lorem ipsum dolor sit amet.";
        data[0].longDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum a";
        console.log(data[0]);
        return data;
    }
    ,
    bookEdit: async(id, name, cat, author, price)=>{
        if(name){
            await db.load(`update books set book_name='${name}' where book_id=${id}`);
        }
        if(cat){
            await db.load(`update books set book_cat=${cat} where book_id=${id}`);
        }
        if(author){
            await db.load(`update books set book_author='${author}' where book_id=${id}`);
        }
        if(price){
            await db.load(`update books set book_price=${price} where book_id=${id}`);
        }
        return null;
    },
    bookDelete:(id)=>{
        db.load(`delete books
        where id=${id}`);
        return null;
    },
    bookAdd:async(name,cat,author,price)=>{
        if(!name || !cat || !author || !price){
            return null;
        }else{
            await db.load(`INSERT INTO books (book_id, book_name, book_cat, book_author, book_price) VALUES (NULL, '${name}', ${cat}, '${author}', ${price}) `);
            return null;
        }
    },
    searchByName: async(name) =>{
        let data=await db.load(`SELECT book_id as id, book_name as name, book_author as author, book_price as price, c.cat_name as category FROM books b INNER JOIN categories c on b.book_cat=c.cat_id WHERE MATCH(book_name) Against("+${name}}*" IN BOOLEAN MODE) limit 10 offset 0 `)
        var item;
        for(item in data){
            data[item].image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c";
            data[item].description="Lorem ipsum dolor sit amet.";
            data[item].longDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum a";
        }
        return data;
    }
}