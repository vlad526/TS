var products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    var TITLE = product.title;
    var PRICE = product.price;
    var IMAGE = product.image;
    document.write("\n    <div class=\"product-card\">\n        <h3 class=\"product-title\">".concat(TITLE, ". Price - ").concat(PRICE, "</h3>\n        <img src=\"").concat(IMAGE, "\" alt=\"\" class=\"product-image\">\n    </div>\n    "));
}
