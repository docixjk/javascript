document.addEventListener("DOMContentLoaded", function(){
      
  document.addEventListener("mousemove",function(ev){
    // console.log(ev)
    //스타일에 이미지 태그를 뺴옴
    let img = document.querySelector("img")
    img.style.left = ev.clientX +'px'
    img.style.top = ev.clientY+'px'
  })
})