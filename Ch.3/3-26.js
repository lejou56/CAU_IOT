var func = function(a, b, c, d) {
    console.log(this, a, b, c, d);
};
var bindFunc1 = func.bind({ x: 1 }, 4, 5);
console.log(func.name);
console.log(bindFunc1.name);