//  for 迴圈

// for(var i = 0; i <= 10; i++){
//     document.write(i);
//     document.write("<br/>");
// }

// var friend = ["小黑", "小黃", "小綠"];

// for(var q = 0; q<friend.length; q++){
//     document.write(friend[q]);
//     document.write("<br/>");
// }

//  製作一個問答程式

var questions = [
    {
        prompt:"香蕉是什麼顏色？\n(a)紅色\n(b)綠色\n(c)黃色",
        answer:"c"
    },
    {
        prompt:"草莓是什麼顏色？\n(a)紅色\n(b)綠色\n(c)黃色",
        answer:"a"
    },
    {
        prompt:"芭樂是什麼顏色？\n(a)紅色\n(b)綠色\n(c)黃色",
        answer:"b"
    }
]  

var score = 0;
for(var i = 0; i<questions.length; i++){
    var input = prompt(questions[i].prompt);
    if(input == questions[i].answer){
        score++;
        alert("答對了！");
    }
    else{
        alert("答錯囉！");
    }
}

document.writec("總共獲得：" + score + "分");