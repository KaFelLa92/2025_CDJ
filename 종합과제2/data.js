// const productList = [
//     { pno: 1, pname: '코카콜라', pprice: 1800, pinfo: '단맛', pimg: "https://placehold.co/100x100/png" },
//     { pno: 2, pname: '칠성', pprice: 1500, pinfo: '짠맛', pimg: "https://placehold.co/100x100/png" }
// ]
// 제품 ID 자동화
// let pno = productList.length == 0 ? 1 : productList[productList.length-1].pno + 1;

let productList = localStorage.getItem('productList');

if (productList == null) {
    productList = [];
} else {
    productList = JSON.parse(productList);
};
console.log(productList);



// const stockList = [ // true는 입고, false는 출고.
//     { sno: 1, pno: 1, stype: true, scount: 3, scuz: "제품수량부족" },
//     { sno: 2, pno: 2, stype: false, scount: 2, scuz: "제품과다" },
// ]
// // 재고 ID 자동화
// let sno = stockList.length == 0 ? 1 : stockList[stockList.length-1].sno + 1;

let stockList = localStorage.getItem('stockList');

if (stockList == null) {
    stockList = [];
} else {
    stockList = JSON.parse(stockList);
};
console.log(stockList);

/*

사용자 페이지 기능을 담을 HTML 구조를 구현합니다. CSS 스타일링은 이 단계에서 제외됩니다.

제품 표시 영역: 각 제품의 이미지, 제품명, 가격 정보를 모두 출력하시오 , 테이블(table) 혹은 카드/그리드(div) 등등 표현하기.

장바구니 영역: 선택된 제품의 장바구니 항목을 위한 리스트 또는 테이블 구조, 삭제 버튼 (<button>) 포함. 장바구니 총 금액 표시 요소.

결제 버튼 영역: '주문하기' 또는 '결제하기' 버튼 (<button>) 포함.

*/

//=================================장바구니 리스트=================================


// cartList = {
//     cno : 1,
//     pno : 1,
//     count : 1
// };

let cartList = localStorage.getItem('cartList');
if (cartList == null) {
    cartList = [];
} else {
    cartList = JSON.parse(cartList);
};
console.log(cartList);

