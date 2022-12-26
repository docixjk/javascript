//보내는 곳은 export
function module(msg) {//defoult는 하나에만 가능
  console.log("msg :" + msg);
}
function area(a, b) {
  console.log("area:" + a * b);
}
export { module, area };