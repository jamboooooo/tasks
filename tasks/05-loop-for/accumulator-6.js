let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let accumulatorOdd = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
        accumulatorOdd.push(array[i]);
    }
}