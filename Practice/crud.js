console.log("from crud.js");
/*class ProductService{
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
 
let svc=new ProductService();
console.log(svc.getAll());
let theProduct1={ id:12, title:"gerbera", description:"wedding Flower",unitprice:5, stackavailable:9000};
svc.create(theProduct1);
 
let theProduct2={ id:13, title:"rose", description:"valentine Flower",unitprice:15, stackavailable:19000};
svc.create(theProduct2);
console.log(svc.getAll());

let updatedProduct = { id: 12, title: "gerbera", description: "updated description", unitprice: 10, stackavailable: 8000 };
svc.update(updatedProduct);
console.log(svc.getAll());

let removedProduct=svc.remove(12);
console.log("Removed Product:", removedProduct);
console.log(svc.getAll());
console.log("***********************************");
*/
let products = [];

function insertData(){
    let id = parseInt(document.getElementById('id').value);
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let unitprice = parseFloat(document.getElementById('unitprice').value);
    let stackavailable = parseInt(document.getElementById('stackavailable').value);
    let product={
        id: id,
        title: title,
        description: description,
        unitprice: unitprice,
        stackavailable: stackavailable
    };
    products.push(product);
    console.log()

}
