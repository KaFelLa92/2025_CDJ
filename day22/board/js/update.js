
// (1) 수정페이지 접속했을 때 기존 데이터 호출 함수
getBoard(); // 최초 1번 함수 실행
function getBoard() {
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }
    for (let i = 0; i < boardList.length; i++) {
        const obj = boardList[i]
        if (obj.no == selectNo) {
            // 기존 게시물 정보를 input 마크업에 넣어주기.
            document.querySelector('#titleInput').value = obj.title
            document.querySelector('#contentInput').value = obj.content
        }   // if end
    }   // for end
} // func end

// (2) 수정처리 함수
function boardUpdate() {
    // 1. 웹주소(URL) 경로 가져오기
    const url = new URLSearchParams(location.search)
    // 2. URL 경로에서 내가 선택한 게시물번호(no) 가져오기
    const selectNo = url.get('no')
    // 3. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList')
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }
    // 4. 반복문 이용하여 선택한 게시물 찾기
    for (let i = 0; i <= boardList.length - 1; i++) {
        let obj = boardList[i];
        // 5. 찾은 게시물에 새롭게 입력받은 값으로 수정.
        if (obj.no == selectNo) {
            obj.title = document.querySelector('#titleInput').value;
            obj.content = document.querySelector('#contentInput').value;
            obj.pwd = document.querySelector('#pwdInput').value;
            // 6. localStorage에 배열 저장
            localStorage.setItem('boardList', JSON.stringify(boardList));
            // 7. (성공) view.html 이동하기.
            location.href = `view.html?no=${selectNo}`
            alert('게시물로 이동합니다.')
        }
    } // for end

} // func end