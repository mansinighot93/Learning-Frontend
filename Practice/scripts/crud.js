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
        console.log("removing data " + productId);
        const productIndex=this.products.findIndex(p=>p.id ==productId);
        if(productIndex === -1){
            console.log("Product not found with id "+ productId)
        }
        console.log(productIndex);
        //remove the product from the array
        this.products=this.products.splice(productIndex,1);
        //this.products=this.products.filter( (product)=>(product.id !== productId));
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
