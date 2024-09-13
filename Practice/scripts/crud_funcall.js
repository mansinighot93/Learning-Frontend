let svc=new ProductService()
console.log("***********************************");

function insertData() {
    let product = getInsertData();
    svc.create(product);
    console.log(svc.getAll());

    let productS= svc.getAll();
    displayAllProducts(productS);
}


function showAllData() {
    let productS= svc.getAll();

    displayAllProducts(productS);
    console.log("All Products: ",svc.getAll());

}

// Update data (update product)
function updateData() {
    let product = getInsertData();
    svc.update(product);
    console.log(svc.getAll());

    let productS= svc.getAll();
    displayAllProducts(productS);
}

// Remove data (remove product)
function removeData() {
    let product = getInsertData();
    let productId = parseInt(document.getElementById('id').value);
    svc.remove(product.productId);
    console.log(svc.getAll());

    let productS= svc.getAll();
    displayAllProducts(productS);

}
