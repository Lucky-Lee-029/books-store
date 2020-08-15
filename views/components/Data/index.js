const products = [
  {
    id: 1,
    name: "Brown book",
    description: "Brown T-book for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 16.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 2,
    name: "Light Brown book",
    description: "Light Brown book for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 4.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 3,
    name: "Women Grey book",
    description: "Grey book for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 14.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 4,
    name: "Warm book Women",
    description: "Woolen Hoodie Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 20.00,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 5,
    name: "Women Grey book",
    description: "Light Grey book for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 4.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 6,
    name: "Women Red/Brown book",
    description: "Red/Brown Blouse for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 19.99,
    
    type: "blouse",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 7,
    name: "Dark Grey book Women",
    description: "Dark Grey book for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 6.00,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 8,
    name: "White book Women",
    description: "White book for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 14.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 9,
    name: "Black book Women",
    description: "Black book for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 20.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 10,
    name: "No Shoulder Hoodie",
    description: "Hoodie for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 4.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 11,
    name: "Women Watch Gold",
    description: "Golden Watch for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 45.99,    
    type: "watch",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "accessories"
  },
  {
    id: 12,
    name: "Black Pearl Necklace",
    description: "Black Pearl Necklace for Women",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 14.99,
    
    type: "necklace",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "accessories"
  },
  {
    id: 13,
    name: "Man Black book",
    description: "Black T-book for Men",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 10.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 14,
    name: "Man Grey Tanktop",
    description: "Grey Tanktop for Men",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 14.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 15,
    name: "Man White book",
    description: "White book for Men",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 20.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 16,
    name: "Man Brown book",
    description: "Brown book for Men",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 13.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 17,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 13.99,
    
    type: "tie",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "accessories"
  },
  {
    id: 18,
    name: "Black book Men",
    description: "Black book for Men",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 9.99,
    
    type: "book",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "handbook"
  },
  {
    id: 19,
    name: "4-Pack Man Ties",
    description: "Ties for Men",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 35.99,
    
    type: "tie",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "accessories"
  },
  {
    id: 20,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nihil dicta temporibus incidunt fugit culpa similique ipsum sit? Hic ad beatae quidem repudiandae dignissimos tenetur consequuntur, ullam, accusantium earum at",
    price: 15.99,
    
    type: "tie",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    inCart: false,
    category: "accessories"
  },
];

export default products;
