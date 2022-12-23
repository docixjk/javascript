

let books = [
  { no: 'inbn0002', title: '스프링', writer: '김기자', price: 40000 },
  { no: 'inbn0003', title: '자바', writer: '이순신', price: 25000 },
  { no: 'inbn0004', title: 'SQL', writer: '을지문덕', price: 32000 }
]//기본 배열 만들기
booksadd() //함수 실행
priceTotal() //총계산 금액
function booksadd() { //배열의 내용을 출력
  list.innerHTML = "" // 처음내용 지우고 시작
  for (let i = 0; i < books.length; i++) {//books 배열길이 만큼
    list.innerHTML +=
      `<tr>
    <td><input type="checkbox"></td>
    <td>${books[i].no}</td>
    <td>${books[i].title}</td>
    <td>${books[i].writer}</td>
    <td class="price">${books[i].price}</td>
    <td><button>삭제</button></td>
    </tr>`
  }
}


//삭제
list.addEventListener("click", function (ev) {
  if (ev.target.nodeName == "BUTTON") { //해당 이벤트 타겟의 노드네임이 버튼인지 확인
    // ev.target.closest("tr").remove() //확인 후 맞으면 삭제
    //배열에서 삭제
    let no = ev.target.closest("tr").children[1].innerText
    for (let i = 0; i < books.length; i++) {
      if (books[i].no == no) {
        books.splice(i, 1)
      }
    }
    //태그 그리기
    booksadd()
    //금액 계산
    priceTotal()
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
  if (!inClear()) {//입력 체크
    return
  }
  books.push(addObj) //준비된 값을 배열에 추가 (뒤에 추가 됨)

  priceTotal() //금액 계산

  booksadd() //추가 함수 실행

  inClear() //인풋 초기화
})
function inCheck() {
  //도서번호와 도서명이 입력되지 않았으면 경고출력 
  if (no.value == "") {
    alert("도서번호를 입력해주세요")
    no.focus()
    return false
  }
  if (title.value = "") {
    alert("도서명을 입력해주세요")
    title.focus()
    return false
  }
  return true
}
function inClear() {//input 값 초기화
  no.value = ""
  title.value = ""
  writer.value = ""
  price.value = ""
}
function priceTotal() { //총금액 계산 함수
  let total = 0
  for (let i = 0; i < books.length; i++) {
    total += parseInt(books[i].price)
  }
  totalPrice.innerHTML = total
}








// list.addEventListener("click", function (ev) {
//   let node = ev.target //실제로 이벤트가 발생한 대상 (태그=타겟)
//   if (node.nodeName == "BUTTON") {// 버튼이냐 ? 아니냐 ?
//     node.closest('tr').remove() // 부모까지 지워버리기!
//   }
// })

// btn2.addEventListener("click", function (ev) {
//   let node2 = ev.target //실제로 이벤트가 발생한 대상 (태그=타겟)
//   if (node2.nodeName == "BUTTON") {// 버튼이냐 ? 아니냐 ?
//     if ((no.value && title.value) == '') { alert("입력하지 않았습니다.") }
//     else {

//       let no1 = document.querySelector('#no').value * 1
//       let title1 = document.querySelector('#title').value
//       let writer1 = document.querySelector('#writer').value
//       let price1 = document.querySelector('#price').value * 1
//       books.push({ no: no1, title: title1, writer: writer1, price: price1 })

//       let ddd = `
//       <tr>
//       <td><input type="checkbox"></td>
//       <td>${no1}</td>
//           <td>${title1}</td>
//           <td>${writer1}</td>
//           <td class="price">${price1}</td>
//           <td><button>삭제</button></td>
//           </tr>
//           `
//       list.innerHTML += ddd
//     }
//   }
// })

