let arr = [];
arr.push(1, 2, 3);
console.log(arr);

let arr2 = [];
arr.push('lorem', 'ipsum', 'dolor');
console.log(arr2);

let arr3 = [true, false];
arr.unshift(null);
console.log(arr3);

let arr4 = [
    [],
    []
];
arr4[1].push(true, true, true);
console.log(arr4);

let arr5 = ['html', 'css'];
arr5.unshift('git');
arr5.push('javascript');
console.log(arr5);

arr5[4] = 'figma';
console.log(arr5);

let stack = ["html", "css", "bem", "js"];

// A) добавь в конец массива значение "react" (используй .push())
stack.push('react');

// B) выведи весь массив в консоль
console.log(stack);

// C) добавь в конец массива значение "redux" (используй способ с [])
stack[stack.length] = 'redux';

// D) выведи весь массив в консоль
console.log(stack);

// E) добавь в начало массива значение "git"
stack.unshift('git');

// F) выведи весь массив в консоль
console.log(stack);

/* 
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux". 
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */
console.log(`сначала мы изучим ${stack[0]}, а в конце изучим ${stack[stack.length-1]}`)

// H) добавь в конец массива сразу два элемента: "mysql" и "mongodb".
stack.push('mysql', 'mongodb');

// I) выведи в консоль длину массива
console.log(stack.length)