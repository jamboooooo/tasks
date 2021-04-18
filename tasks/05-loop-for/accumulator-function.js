function sumArray(array) {
    let sum;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function sumArray2(array) {
    let sum;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}

function namesLang(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 3) {
            arr.push(array[i]);
        }
    }
    return arr;
}

function namesLang(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === 'А' && array[i][0] === 'У') {
            arr.push(array[i]);
        }
    }
    return arr;
}

function deleteMessages(array) {
    arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].deleted === false) {
            arr.push(array[i]);
        }
    }
    return arr;
};

const messages = [
    { text: 'hello', deleted: true },
    { text: 'bue', deleted: false },
    { text: 'js is a beauty', deleted: false },
    { text: 'pair programming', deleted: true },
    { text: 'this is my horse', deleted: false },
];

console.log(deleteMessages(messages))