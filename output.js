/*
寫入內容：innerHTML
直接輸出：document.weite()
彈跳警示視窗：window.alert() ＊window可省略
顯示於控制台：console.log()
*/

document.getElementById("innerHTMLdemo").innerHTML = "Hello,JavaScript!";

document.write("Hello,write!");

alert("Hello,alert!");

console.log("Hello,consolelog!");

function myFunction() {
    document.getElementById("click").innerHTML = "click change string!";
};