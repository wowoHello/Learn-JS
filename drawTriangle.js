function pdtriangle() { 
    let show = document.getElementById('show');
    show.innerHTML = ""; 
    
    let num = document.getElementById("triangleType").value;
    let hig = parseInt(document.getElementById("val").value);

    if (isNaN(hig) || hig < 1) {
        show.textContent = "請輸入有效的三角形高度（大於0的整數）";
        return;
    }

    let triangle = "";
    ////直角左下三角形////
    if (num === "a") {
        for (let i=1; i<=hig; i++) {
            for (let j = 1; j <= i; j++) {
                triangle += "*";              
            }
            triangle += "<br>";
        }
    }
    ////直角左上三角形////
    else if (num === "b") {
        for (let i=hig; i>=1; i--) {
            for (let j=1; j<=i; j++) {
                triangle += "*";
            }
            triangle += "<br>";
        }
    }
    ////直角右下三角形////
    else if (num === "c") {
        for (let i=1; i<=hig; i++) {
            for (let j = 1; j <= hig - i; j++) {
                triangle += "&ensp;";
            }
            for (let k = 1; k <= i; k++) {
                triangle += "*";
            }
            triangle += "<br>";
        }
    } 
    ////直角右上三角形////
    else if (num === "d") {
        for (let i=1; i<=hig; i++) {
            for (let j=1; j<i; j++) {
                triangle += "&ensp;";
            }
            for (let k=i; k<=hig; k++) {
                triangle += "*";
            }
            triangle += "<br>";
        }
    }
    ////正三角形////
    else if (num === "e") {
        for (let i=1; i<=hig; i++) {
            let spaces = hig - i;
            let stars = 2 * i - 1;

            for (let s = 0; s < spaces; s++) {
                triangle += "&ensp;";
            }
            for (let j = 0; j < stars; j++) {
                triangle += "*";
            }
            triangle += "<br>";
        }
    }
    ////倒三角形////
    else if (num === "f") {
        for (let i=hig; i>=1; i--) {
            for (let j=1; j<=hig-i; j++) {
                triangle += "&ensp;";
            }
            for (let k=1; k<=2*i-1; k++) {
                triangle += "*";
            }
            triangle += "<br>";
        }
    }


    show.innerHTML = triangle;

    console.log(num)
    console.log(hig)
}