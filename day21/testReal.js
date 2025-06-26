function getPro() {
    products = localStorage.getItem('products')
    if (products == null) {
        products = [];
    } else {
        products = JSON.parse(products)
    }
    return products;
}

function setPro(products) {
    localStorage.setItem('products', JSON.stringify(products))
}

function proAdd() {
    const pnameInput = document.querySelector('#pnameInput')
    const ppriceInput = document.querySelector('#ppriceInput')
    const pinfoInput = document.querySelector('#pinfoInput')
    const pimgInput = document.querySelector('#pimgInput')

    const pname = pnameInput.value;
    const pprice = ppriceInput.value;
    const pinfo = pinfoInput.value;
    const pimg = pimgInput.files[0];

    const products = getPro();
    let pno = products.length == 0 ? 1 : products[products.length - 1].pno + 1;

    const obj = {
        pno: pno,
        pname: pname,
        pprice: Number(pprice),
        pinfo: pinfo,
        pimg: pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100'
    }

    products.push(obj);

    pnameInput.value = '';
    pnameInput.value = '';
    pnameInput.value = '';

    alert('제품등록완');
    setPro(products);
    proPrint();
}

function proPrint() {
    const proBody = document.querySelector('#proBody')
    let products = getPro();
    let html = '';
}