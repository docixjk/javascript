//넣을 곳에 import  //* as 넣고 참조 변수명 쩍어
// import * as md from "./module.js";//module.js 를 참조함
//두번쨰 방법
//import {필요한것} from "./module.js";
import square, { circle } from "./module1.js";
// md.module('test');
// md.area(10, 20);
square();
circle();