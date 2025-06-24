/*
[ 실습17 ] 식당 대기표 페이지 * 제출용( CSS 선택,생략가능 )
1. 목표
    -식당 직원이 대기 손님의 정보를 등록하고, 손님은 자신의 전화번호로 대기 상태를 직접 확인할 수 있는 간단한 대기 관리 페이지를 제작합니다.
    -모든 대기 정보는 브라우저의 localStorage 활용하여 관리합니다.

2. 화면 구성
    -페이지는 **'대기 등록 영역'**과 **'대기 확인 영역'**으로 명확히 구분되어야 합니다.
    -대기 등록 영역:
        --대기자 이름 입력: 대기하는 손님의 이름을 입력받는 <input> 필드가 있어야 합니다.
        --전화번호 입력: 손님의 전화번호를 입력받는 <input> 필드가 있어야 합니다.
        --인원 수 입력: 함께 온 인원 수를 숫자로 입력받는 <input> 필드가 있어야 합니다.
        --대기 등록 버튼: 클릭 시 addWaiting() 함수를 호출하는 "대기 등록" 버튼이 있어야 합니다.
    -대기 확인 영역:
        --전화번호 입력: 대기 상태를 확인할 손님의 전화번호를 입력받는 <input> 필드가 있어야 합니다.
        --대기 확인 버튼: 클릭 시 checkStatus() 함수를 호출하는 "대기 확인" 버튼이 있어야 합니다.

3. 데이터 관리
    -저장소: 모든 대기 정보는 브라우저의 **localStorage**를 사용하여 저장 및 관리되어야 합니다. (브라우저 탭 종료 시 대기 목록 초기화)
    -데이터 구조: 대기 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
    -각 대기 팀 객체는 { no: 대기번호, name: '이름', phone: '전화번호', count: 인원수 } 형태를 가집니다.
    -대기번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.
    -이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, localStorage 'waitingList'라는 키(key)로 저장되어야 합니다.

4. 핵심 기능 구현
addWaiting() 구현 (대기 등록):
    -입력된 이름, 전화번호, 인원 수를 받아 새로운 대기 객체를 생성하고, waitingList 배열에 추가합니다.
    -대기번호는 현재 배열의 마지막 대기번호에 1을 더한 값으로 자동 부여합니다.
checkStatus() 구현 (대기 확인):
    -"대기 확인" 버튼 클릭 시 실행됩니다.
    -입력된 전화번호를 받아, localStorage에 저장된 waitingList 배열에서 전화번호가 일치하는 객체를 찾습니다.
    -일치하는 정보가 있으면, alert를 통해 해당 손님의 "대기번호"를 보여줍니다. (예: "고객님의 대기번호는 O번 입니다.")
    -일치하는 정보가 없으면, alert로 "대기 정보가 없습니다."를 알려줍니다.
*/

/* 

    [데이터 모델링]

    1. 대기등록영역
        (1) 대기자 이름 input으로 입력
        (2) 고객 전화번호 input으로 입력
        (3) 인원 수 input으로 입력(Number)
        (4) 대기등록 버튼으로 addWaiting() 함수 호출

    2. 대기확인영역
        (1) 대기 상태 확인할 전화번호 input으로 입력
        (2) 대기확인 버튼으로 checkStatus() 함수 호출

    3. 데이터관리
        (1) localStorage 사용하여 대기 정보 저장
        (2) 대기 목록은 객체를 담는 배열 형태로 관리 (guestNum = JSON.parse(guestNum); , guestName = JSON.stringify(guestName)
        (3) { no: 대기번호, name: '이름', phone: '전화번호', count: 인원수 }
        (4) 대기번호는 등록 마다 1씩 자동 증가
        (5) localStorage 'waitingList'라는 키로 저장
*/

// const waitingList = [
//     { no: 1, name: 'johnDo', phone: '010-1234-5678', count: 3 },
//     { no: 2, name: 'killDong', phone: '010-9633-7411', count: 1 }
// ]

// 1 저장 C : 대기 등록
function addWaiting() {
    console.log("wait Pz")
    // 1. 입력 마크업 객체 가져오기
    const nameInput = document.querySelector('.nameInput'); console.log(nameInput);
    const phoneInput = document.querySelector('.phoneInput'); console.log(phoneInput);
    const numInput = document.querySelector('.numInput'); console.log(numInput);
    // 2. 입력 마크업 객체내 입력값 가져오기(저장)
    const name = nameInput.value; console.log(name);
    const phone = phoneInput.value; console.log(phone);
    const count = numInput.value; console.log(count);
    // 3. 객체화    -> 자바가 할 거임
    // 함수화된 localStorage에서 배열 불러오기

    // (1) localStorage에서 waitingList 가져오기

    let waitingList = getLocalStorage();
    const no = waitingList.length == 0 ? 1 :waitingList[ waitingList.length - 1].no + 1;

    // let no = 1;
    // if (waitingList.length - 1 >= 0) {
    //     no = waitingList[waitingList.length - 1].no + 1; // 배열 내 마지막 인덱스 회원번호 1 증가
    // }

    // let waitingList = localStorage.getItem('waitingList');  // .getItem('속성명/key')
    // // (2) waitingList가 존재하지 않을 때, 배열 새로 생성. 존재하면 타입변환.
    // if (waitingList == null) { // 대기리스트(속성명)가 없으면
    //     waitingList = []; // 배열로 만든다.
    // } else { // 속성명 존재할 경우, JSON(배열타입)으로 변환.
    //     waitingList = JSON.parse(waitingList);  // 객체를 숫자로 바꿔줌
    //     no = waitingList[waitingList.length - 1].no + 1; // 배열 내 마지막 인덱스 회원번호 1 증가
    // }

    // (3) 객체를 상수로 지정하기
    const obj = { no: no, name: name, phone: phone, count: count }; console.log(obj);
    // 4. 배열에 객체 저장  -> 이것도 자바가 할 거임
    waitingList.push(obj); console.log(waitingList);
    alert(`대기 등록 완료`); // 알림
    // localStorage에서 waitingList 저장하기
    // (1) 배열타입을 JSON 문자열 타입으로 변환하기
    let jsonData = JSON.stringify(waitingList); // 자바스크립트 객체 문자열로
    // (2) localStorage에 waitingList 속성명으로 배열 저장
    localStorage.setItem('waitingList', jsonData);    // waitingList 변수값 넣기

} // func end

// 2 조회/비교 R : 대기 확인
function checkStatus() {
    console.log('check your count.')    // 수시로 확인
    // 1. 입력 마크업 객체 가져오기
    const phoneCheck = document.querySelector('.phoneCheck'); console.log(phoneCheck);
    // 2. 입력 마크업 객체내 입력값 가져오기(비교)
    const waitC = phoneCheck.value; console.log(waitC);
    // 3. localStorage에 저장된 입력받은 값과 일치하는 정보를 for문으로 순회하며 찾기 (배열 목록 조회)
    // localStorage에서 waitingList 가져오기
    let waitingList = localStorage.getItem(`waitingList`); // 'waitingList'라는 속성값 가져오기
    if (waitingList == null) { // 만약 waitingList라는 이름의 속성값이 존재하지 않으면
        waitingList = [];   // waitingList는 앞으로 배열.
    } else {    // waitingList 속성명 존재하면 JSON(배열) 타입으로 변환.
        waitingList = JSON.parse(waitingList);
    }
    for (let i = 0; i <= waitingList.length - 1; i++) {
        const wait = waitingList[i]; // i번째 대기순번 (객체)
        if (wait.phone == waitC) {  // 웨이팅리스트 인덱스에서 phone에 해당하는 값(등록된 값)이 체크하는 값과 같을 경우
            alert(`대기번호는 ${wait.no}입니다. `)
            return; // 반복문 종료
        }
    }   // for end
    // 4. 못찾았다면?
    alert('대기번호가 없습니다. 등록해주세요.')

}   // func end


// 3 localStorage 관리하는 함수
function setLocalStorage(waitingList) {
    localStorage.setItem('waitingList', JSON.stringify(waitingList))

} // func end

function getLocalStorage() {
    let waitingList = localStorage.getItem('waitingList');
    if (waitingList == null) {
        waitingList = []
    } else {
        waitingList = JSON.parse(waitingList)
    }
    return waitingList; //
}
