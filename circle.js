//  2維陣列、巢狀迴圈

let number =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [0]
]   //四行三列的二維陣列

// document.write(number[0][0]);    //取得number裡面第一行第一個值

// for(var i = 0; i<4; i++){
//     for(var j = 0; j<3; j++){
//         document.write("i:" + i + ",j:" + j);
//         document.write("<br/>");
//     }
// }    //測試

for(let i = 0; i<number.length; i++){
    for(let j = 0; j<number[i].length; j++){    //number[i].length表示被取出來的每一行長度
        document.write(number[i][j]);
        document.write("<br/>");
    }
}