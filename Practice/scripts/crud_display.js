function getInsertData(){
    let id = parseInt(document.getElementById('id').value);
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let unitprice = parseFloat(document.getElementById('unitprice').value);
    let stockavailable = parseInt(document.getElementById('stockavailable').value);
    return {
        id: id,
        title: title,
        description: description,
        unitprice: unitprice,
        stockavailable: stockavailable
    };
}

const displayAllProducts=(products)=>{
    let lstProducts=document.getElementById("list");

    //remove child nodes if exist
    //clear all items from list
    if(lstProducts.hasChildNodes){
        while(lstProducts.firstChild)
            {
                lstProducts.removeChild(lstProducts.firstChild);
            } 
    }
    
    //get all products and fill inside list
    products.map((product)=>{
        const node = document.createElement("li");
        const textnode = document.createTextNode(product.id + " : " + product.title + " : " + product.description + " : " + product.unitprice + " : " + product.stockavailable);
        node.appendChild(textnode);
        lstProducts.appendChild(node);
    })

}


const displayProduct=(product)=>{
    //get data from controls and create product json object
    let txtId=document.getElementById("id");
    let txtTitle=document.getElementById("title");
    let txtDescription=document.getElementById("description");
    let txtUnitPrice=document.getElementById("unitprice");
    let txtStockAvailable=document.getElementById("stockavailable");
    
    txtId.innerHTML=product.id;
    txtTitle.innerHTML=product.title;
    txtDescription.innerHTML=product.description;
    txtUnitPrice.innerHTML=product.unitPrice;
    txtStockAvailable.innerHTML=product.stockAvailable;
}