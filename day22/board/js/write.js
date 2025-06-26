function boardWrite() {
    // 1. 입력 마크업 객체 가져오기
    const titleInput = document.querySelector('#titleInput');
    const contentInput = document.querySelector('#contentInput');
    const pwdInput = document.querySelector('#pwdInput');
    // 2. 입력마크업 객체 내 입력값 가져오기
    const title = titleInput.value;
    const content = contentInput.value;
    const pwd = pwdInput.value;
    // 3. 객체화
    const obj = {
        title: title,   // 속성명과 값이 똑같으면 값 생략 가능. ex) title,
        content: content,
        pwd: pwd
    };
    // 4. localStorage에서 배열 가져오기
    let boardList = localStorage.getItem('boardList');
    if (boardList == null){
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }
    // 5. 객체 배열에 저장
    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length - 1].no + 1;
    boardList.push(obj);
    // 6. localStorage에 배열 저장
    localStorage.setItem('boardList' , JSON.stringify(boardList))
    // 7. 기타
    alert('게시물 작성 완료')
    location.href = 'list.html' // 글쓰기 성공 시 게시물목록(list) 페이지 이동
    
} // func end