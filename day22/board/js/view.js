getBoard();
function getBoard() {
    // 1. URL(웹주소) 상의 웹주소 가져오기
    const url = new URLSearchParams(location.search);
    // 2. 선택된 게시물번호(쿼리스트링값) 가져오기
    const selectNo = url.get('no');
    // 3. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }
    // 4. 선택된 게시물번호와 일치한 게시물 찾기 <for>
    for (let i = 0; i <= boardList.length - 1; i++) {
        const obj = boardList[i];
        if (obj.no == selectNo) { // 선택한 게시물 번호와 일치할 경우
            // 5. 찾았으면 내용 출력
            document.querySelector('#title').innerHTML = obj.title;
            document.querySelector('#content').innerHTML = obj.content;
            return;
        } // if end
    } // for end

}   // func end

function boardDelete() {
    // 1. URL(웹주소) 상의 경로 가져오기
    const url = new URLSearchParams(location.search);
    // 2. 경로 상의 선택된 게시물번호(쿼리스트링) 가져오기
    const selectNo = url.get('no');
    // 3. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList')
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }
    // 4. 배열내 선택된 게시물번호가 존재하면
    for (let i = 0; i <= boardList.length - 1; i++) {
        const obj = boardList[i]
        if (obj.no == selectNo) {// 선택한 게시물번호를 찾았으면
            // 5. 확인용비밀번호를 입력받아 기존 비밀번호와 일치하면 삭제 , 아니면 실패
            const confirm = prompt('비밀번호 입력');
            if (obj.pwd == confirm) { // 비밀번호 일치
                boardList.splice(i, 1); // 객체 1개 삭제
                localStorage.setItem('boardList', JSON.stringify(boardList));
                alert('게시물 삭제 완료')
                // 6. (성공) list.html 이동
                location.href = 'list.html';
            } else {
                alert('게시물 삭제 실패')
            }
        } // for end


    } // for end
} // func end

function boardUpdateView() {
    // 1. URL(웹주소) 경로 가져오기
    const url = new URLSearchParams(location.search);
    // 2. 경로 상의 선택된 게시물번호(쿼리스트링) 가져오기
    const selectNo = url.get('no')
    // 3. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if (boardList == null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }
    // 4. 배열내 선택된 게시물 번호 존재하면
    for (let i = 0; i <= boardList.length - 1; i++) {
        const obj = boardList[i];
        if (obj.no == selectNo) {
            // 5. 비번이 기존비번과 일치하면 수정페이지 이동            
            const confirm = prompt('비밀번호 입력')
            if (obj.pwd == confirm) { // 만약 비번 일치하면 수정페이지 이동
                location.href = `update.html?no=${selectNo}`
            } else {
                alert('수정 안 됨. 패스워드 불일치합니다')
            }
        }
    }
}