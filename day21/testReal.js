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
    const pno = products.length == 0 ? 1 : products[products.length - 1].pno + 1;

    const obj = {
        pno,
        pname,
        pprice: Number(pprice),
        pinfo,
        pimg: pimg ? URL.createObjectURL(pimg) : 'https://placehold.co/100x100'
    }

    products.push(obj);
    alert('제품등록완료')

    pnameInput.value = '';
    ppriceInput.value = '';
    pinfoInput.value = '';

    setPro(products);
    proPrint();
}

proPrint();
function proPrint() {
    const ProBody = document.querySelector('#proBody')
    const products = getPro();
    let html = '';

    for (let i = 0; i <= products.length - 1; i++) {
        const product = products[i];
        html += `<tr>
                        <td> <img src="${product.pimg}" /> </td>
                        <td> ${product.pname} </td>
                        <td> ${product.pprice.toLocaleString()} </td>
                        <td> ${product.pinfo} </td>
                        <td> <button onclick="proDel(${product.pno})" class="btnDel"> 삭제 </button> </td>
                    </tr>`
    }
    ProBody.innerHTML = html;
}

function proDel(pno) {
    const products = getPro();
    for(let i = 0; i <= products.length - 1; i++){
        if(products[i].pno == pno){
            products.splice(i , 1);
            alert('제품삭제완료')
            setPro(products);
            proPrint();
        }
    }
    alert('삭제할 제품 없음!')
}