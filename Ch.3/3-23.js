const numbers = [10, 20, 3, 16, 45];
const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);
console.log(max, min);