function fibs(n){
    if(n === 0) return [];
    if(n === 1) return [0];
    if(n === 2) return [0,1];
    if(n > 2) {
        const prev = fibs(n-1);
        return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
    }
}

console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(3)); // [0, 1, 1]
console.log(fibs(5)); // [0, 1, 1, 2, 3]
console.log(fibs(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
