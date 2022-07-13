function toggle(...vals) {
    var unset = {};
    var cur = unset;
    return function next(){
        if (cur != unset) {
            vals.push(cur);
        }
        cur = vals.shift();
        return cur;
    };
}

var hello = toggle("hello");
var onOff = toggle("on","off");
var speed = toggle("slow","medium","fast");
console.log(hello()); 
console.log(hello()); 
console.log(onOff()); 
console.log(onOff());
console.log(onOff()); 
console.log(speed());
console.log(speed()); 
console.log(speed()); 
console.log(speed());e