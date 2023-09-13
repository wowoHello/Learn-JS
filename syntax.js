/*
var = 宣告一個變量
為會改變的數值。

let = 宣告一個塊變量
為會改變的數值。

const = 宣告一個塊常量
為固定不變的值。
*/

var x;
let y;

x = 5;
y = 6;
let z = x + y;
document.write(z);

let sun = "5" + 2 + 3;  //字串之後的數字將視為字串。 顯示：523
let sun2 = 2 + 3 + "5"; //字串之前的數字會先相加在跟字串組合。 顯示：55


var X = 3;
let Y = 4;
const Z = 5;
// X = 3 (var)
// Y = 4 (let)
// Z = 5 (const)

function myFunction(){
    var X = 6;
    let Y = 8;
    const Z = 10;

// X = 6 (var)
// Y = 8 (let)
// Z = 10 (const)
}

// X = 6 (var)
// Y = 4 (let)※塊內與塊外分開
// Z = 5 (const)※塊內與塊外分開