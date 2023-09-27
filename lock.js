//  密碼檢驗程式

const password = 123456;
let input;
let entry_count = 0;    //輸入次數起始
const entry_limit = 3;    //最高輸入次數
let out_of_limit = false;

while(password!=input && !out_of_limit){
    entry_count++;  //次數先+1
    if(entry_count<= entry_limit){
        input = prompt("請輸入密碼");
    }
    else{
        out_of_limit = true;
    }
    
}

if(out_of_limit){
    alert("超出輸入次數");

}
else{
    alert("登入成功");
    document.write("歡迎您！");
}
