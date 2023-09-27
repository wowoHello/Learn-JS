//物件Object

// key   value
// 鍵      值

var person = {
    name:"小白",
    age:23,
    is_male:true,
    print_name:function(){
        document.write(this.name)
    }
};

document.write(person.name);


var movie = {
    title:"刻在你心底的名字",
    maker:"氧氣電影",
    duration:114,
    actor:[
        {
            name:"陳昊森",
            age:24,
            is_male:true
        },
        {
            name:"曾敬驊",
            age:23,
            is_male:true
        }
    ] 
};

document.write(movie.title);
document.write(movie.actor[0].name);