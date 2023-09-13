function pdtriangle() { 
    var show = document.getElementById('show');
    show.innerHTML = ""; 
    
    var num = document.getElementById("triangleType").value;
    var hig = parseInt(document.getElementById("val").value);

    if (isNaN(hig) || hig < 1) {
        show.textContent = "請輸入有效的三角形高度（大於0的整數）";
        return;
    }

    var triangle = "";
    ////直角左下三角形////
    if (num === "a") {
        for (var i=1; i<=hig; i++) {
            for (var j = 1; j <= i; j++) {
                triangle += "*";              
            }
            triangle += "<br>";
        }
    }
    ////直角左上三角形////
    else if (num === "b") {
        for (var i=hig; i>=1; i--) {
            for (var j=1; j<=i; j++) {
                triangle += "*";
            }
            triangle += "<br>";
        }
    }
    ////直角右下三角形////
    else if (num === "c") {
        for (var i=1; i<=hig; i++) {
            for (var j = 1; j <= hig - i; j++) {
                triangle += "&ensp;";
            }
            for (var k = 1; k <= i; k++) {
                triangle += "*";
            }
            triangle += "<br>";
        }
    } 
    ////直角右上三角形////
    else if (num === "d") {
        for (var i=1; i<=hig; i++) {
            for (var j=1; j<i; j++) {
                triangle += "&ensp;";
            }
            for (var k=i; k<=hig; k++) {
                triangle += "*";
            }
            triangle += "<br>";
        }
    }
    ////正三角形////
    else if (num === "e") {
        for (var i=1; i<=hig; i++) {
            var spaces = hig - i;
            var stars = 2 * i - 1;

            for (var s = 0; s < spaces; s++) {
                triangle += "&ensp;";
            }
            for (var j = 0; j < stars; j++) {
                triangle += "*";
            }
            triangle += "<br>";
        }
    }
    ////倒三角形////
    else if (num === "f") {
        for (var i=hig; i>=1; i--) {
            for (var j=1; j<=hig-i; j++) {
                triangle += "&ensp;";
            }
            for (var k=1; k<=2*i-1; k++) {
                triangle += "*";
            }
            triangle += "<br>";
        }
    }


    show.innerHTML = triangle;

    console.log(num)
    console.log(hig)
}