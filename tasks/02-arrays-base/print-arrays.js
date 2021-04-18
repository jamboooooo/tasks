// пустой массив
let arr = [];
console.log(arr[0]);

// массив с тремя числовыми элементами;
let arrNumb = [1, 2, 3];
console.log(arrNumb[0] + arrNumb[2]);

// массив с тремя строковыми элементами;
let arrStr = ['one', 'two', 'five'];
console.log(arrStr[0] + arrStr[1] + arrStr[2])

// массив с тремя строковыми и с тремя числовыми элементами;
let arrCombo = [1, 2, 3, 'one', 'two', 'five'];
console.log(`1-й элемент массива - ${arrCombo[0]}, а последний элемент - ${arrCombo[arrCombo.length-1]}`)

// массив с именами всех твоих одногруппников;
let namesGroupMemb = ['Islam', 'Mansur', 'Alikhan', 'Alvi', 'Akhmad'];
console.log(namesGroupMemb[4], arrNumb[arrNumb.length - 1]);

// массив, в котором есть число, строка, null, undefined, true и false;
let ultraComboArray = [1, 'lorem', null, undefined, true, false];
console.log(ultraComboArray[0]);
console.log(ultraComboArray[1]);
console.log(ultraComboArray[2]);
console.log(ultraComboArray[3]);
console.log(ultraComboArray[4]);
console.log(ultraComboArray[5]);

// массив, внутри которого три пустых массива;
let array = [
    [],
    [],
    []
];
console.log(array.length)

// массив, внутри которого два массива, а внутри каждого вложенного массива любые три числа.
let numbersArr = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(numbersArr[0][1] + numbersArr[1][2]);