let books = [//기본 테이블 배열 만들기
  { no: 'inbn0002', title: '스프링', writer: '김기자', price: 40000 },
  { no: 'inbn0003', title: '자바', writer: '이순신', price: 25000 },
  { no: 'inbn0004', title: 'SQL', writer: '을지문덕', price: 32000 }
]
booksadd() //함수 실행
priceTotal() //총계산 금액

function booksadd() { //배열의 내용을 출력
  list.innerHTML = ""; // 전 내용 지우고 시작 안하면 중복해서 나옴
  for (let i = 0; i < books.length; i++) {//books 배열길이 만큼
    list.innerHTML += //태그 자체를 추가
      `<tr>
        <td><input type="checkbox"></td>
        <td>${books[i].no}</td>
        <td>${books[i].title}</td>
        <td>${books[i].writer}</td>
        <td class="price">${books[i].price}</td>
        <td><button>삭제</button></td>
      </tr>`;
  }
}


//삭제
list.addEventListener("click", function (ev) {
  if (ev.target.nodeName == "BUTTON") { //해당 이벤트 타겟의 노드네임이 버튼인지 확인
    // ev.target.closest("tr").remove() //확인 후 맞으면 삭제
    //배열에서 삭제
    let no = ev.target.closest("tr").children[1].innerText;
    for (let i = 0; i < books.length; i++) {
      if (books[i].no == no) {
        books.splice(i, 1);
      }
    }
    //태그 그리기
    booksadd();
    //금액 계산
    priceTotal();
  }
})

//추가
btnadd.addEventListener("click", function (ev) {
  let addObj = {
    no: no.value,  //인풋 값만 불러오기 위해 value 작성
    title: title.value,
    writer: writer.value,
    price: price.value
  }
  if (!inCheck()) {//입력 체크
    return
  }
  books.push(addObj); //준비된 값을 배열에 추가 (뒤에 추가 됨)

  priceTotal(); //금액 계산

  booksadd(); //추가 함수 실행

  inClear(); //인풋 초기화
})
function inCheck() { //도서번호와 도서명이 입력되지 않았으면 경고출력 
  if (no.value == "") {
    alert("도서번호를 입력해주세요");
    no.focus();
    return false;
  }
  if (title.value = "") {
    alert("도서명을 입력해주세요");
    title.focus();
    return false;
  }
  return true;
}
function inClear() {//input 값 초기화
  no.value = "";
  title.value = "";
  writer.value = "";
  price.value = "";
}
function priceTotal() { //총금액 계산 함수
  let total = 0; //총금액 합할 변수 선언
  for (let i = 0; i < books.length; i++) {
    total += parseInt(books[i].price); // parseInt로 type을 수로 바꿔주기
  }
  totalPrice.innerHTML = total;
}