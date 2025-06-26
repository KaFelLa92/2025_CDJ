function getPro() {
    products = localStorage.getItem('products');
    if(products == null){
        products = [];
    } else {
        products = JSON.parse(products)
    }
    return products;
}

function setPro(products) {
    localStorage.setItem('products' , JSON.stringify(products))
}

