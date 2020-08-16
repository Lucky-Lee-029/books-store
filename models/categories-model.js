const db=require('../utils/db');
module.exports={
    allCat:async()=>{
        let cat=await db.load(`select cat_id as id, cat_name as name from categories`);
        console.log(cat);
        return cat;
    },
    bookInCat:async(id)=>{
        let data=await db.load(`select b.book_id as id, b.book_name as name, c.cat_name as category, b.book_author as author, b.book_price as price
         from books b inner join categories c on b.book_cat=c.cat_id where c.cat_id=${id}`);
        var item;
        for(item in data){
            data[item].image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c";
            data[item].description="Lorem ipsum dolor sit amet.";
            data[item].longDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum a";
        }
        return data;
    },
    addCat: async(name)=>{
        db.load(`INSERT INTO categories (cat_name) VALUES ('${name}') `);
    },
    editCat: async(id, name)=>{
        db.load(`UPDATE categories SET cat_name = '${name}' WHERE cat_id =${id}`);
    },
    deleteCat: async(id)=>{
        db.load(`DELETE FROM categories WHERE cat_id =${id}`);
    },
    
}