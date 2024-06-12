var arr = [1, 2];
Array.prototype.toString.call(arr);
Object.prototype.toString.call(arr);
console.log(Array.prototype.toString.call(arr)); // "1,2"
console.log(Object.prototype.toString.call(arr)); // "[object Array]"
arr.toString();

console.log(arr.toString()); // "1,2"

arr.toString = function () {
    return this.join('_');
};
arr.toString();



console.log(arr.toString()); // "1_2"