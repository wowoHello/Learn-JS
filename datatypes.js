/*
JS有八種資料型別：
。Boolean 布林型別
代表兩個值：true、false.

。Null Null型別
只有一個值：Null.

。Undefined (en-US) 未定義型別
沒有被定義的變數有 undefined 值.

。Number 數字型別
所有數字都存儲為十進制數字（浮點），數字可以帶小數，也可以不帶小數.

。BigInt (en-US) 大整數
當number大於某範圍會有精確度問題，故會將值當作string處理
但BigInt可以表示為numeric values.

。String (en-US) 字串
文字資料.

。Symbol (en-US)（於 ECMAScript 6 新定義）
符號.

。Object 對象
用花括號編寫的{}內容
一般object
Array object
Date object
*/

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");