console.log("from crud.js");
class ProductService{
    constructor(){
        this.products=[];
    }
 
    getAll(){
        return this.products;
    }
 
    getById(productId){
       const product= this.products.find(p=>p.id === productId)
       return product;
    }
    
    create(product){
        this.products.push(product);
    }
 
    update(product){
        const productIndex = this.products.findIndex(p => p.id === product.id);
        if (productIndex === -1) {
            console.log("Product not found with id " + product.id);
            return null;
        }
        this.products[productIndex] = product;
        return product;
    }
 
    remove(productId){
        const productIndex=this.products.findIndex(p=>p.id ==productId);
        if(productIndex === -1){
            console.log("Product not found with id "+ productId);
            return null;
        }
        //remove the product from the array
        const deletedProduct=this.products.slice(productIndex,1)[0];
        return deletedProduct;
    }
}
let svc=new ProductService()
console.log("***********************************");


function insertData(){
    let id = parseInt(document.getElementById('id').value);
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let unitprice = parseFloat(document.getElementById('unitprice').value);
    let stockavailable = parseInt(document.getElementById('stockavailable').value);
    let product={
        id: id,
        title: title,
        description: description,
        unitprice: unitprice,
        stockavailable: stockavailable
    };
    svc.create(product);
    console.log(svc.getAll());
}
