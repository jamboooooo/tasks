const names = "intocode bootcamp";

const nameLetters = names.split('');

const words = names.split(' ');

// выведи в консоль последнюю букву переменной name.
console.log(names[names.length - 1]);

// выведи в консоль второе слово переменной name
console.log(names.split(' ')[1]);

// добавь в конец массива words любое слово
words.push('best');

// добавь в начало массива nameLetters четыре новых 
// элемента 't', 'h', 'e' и ' '. Последний элемент это пробел.
nameLetters.unshift('t', 'h', 'e', ' ')