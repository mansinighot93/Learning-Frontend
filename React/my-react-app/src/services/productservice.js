
var products = [
    { id: 1, title: 'Gerbera', description:'Wedding Flower', imageurl:"/Images/gerbera.jpg", unitprice:8, quantity:2300,likes:8734 },
     { id: 2, title: 'Lotus', description:'Worship Flower',imageurl:"/Images/lotus.jpg", unitprice:35, quantity:5400,likes:4598 },
     { id: 3, title: 'Jasmine', description:'Fregrance Flower', imageurl:"/Images/jasmine.jpg",unitprice:2, quantity:5600,likes:6587 },
     { id: 4, title: 'Lily', description:'De licate Flower', imageurl:"/Images/lily.jpg",unitprice:15, quantity:1200,likes:5678 },
     { id: 5, title: 'Rose', description:'Valentine Flower', unitprice:9,imageurl:"/Images/rose.jpg", quantity:1200,likes:2387 },
     { id: 6, title: 'Marigold', description:'Festival Flower',imageurl:"/Images/marigold.jpg", unitprice:2, quantity:6500,likes:9834 }    
 ];
 
 const ProductService = {
    
     getAll() {     
         return products;
     },
 
     getById(id){
        let product= products.find( (product)=>(product.id ===id));
        return product;
     },
 
     insert(theProduct){
         products.push(theProduct);
     },
 
     Update(theProduct){
         products=products.filter(product=>product.id !==theProduct.id);
         products.push(theProduct);
     },
 
     remove(id){
         products=products.filter(product=>product.id !==id);
     } 
 }
  
 export default ProductService;