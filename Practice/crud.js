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



/*
const insertData=()=>{
    
    let product=getInsertData();
    svc.create(product);

    let productS= svc.getAll();
    displayAllProducts(productS);
};

const updateData=()=>{
    let product=getInsertData();
    svc.update(product);

    let productS= svc.getAll();
    displayAllProducts(productS);
};

const removeData=()=>{
    let productId = parseInt(document.getElementById('id').value);
    svc.remove(product);

    let productS= svc.getAll();
    displayAllProducts(productS);
};
*/
