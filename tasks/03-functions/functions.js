// создание функции removeUser()
function removeUser() {

};
// вызов фуекции removeUser()
removeUser();

// создание функции createPost()
function createPost() {

};
// вызов фуекции createPost()
createPost();

// создание функции addItem()
function addItem() {

};
// вызов фуекции addItem()
addItem();

// создание функции readFile()
function readFile() {

};
// вызов фуекции readFile()
readFile();

// создание функции getElement()
function getElement() {

};
// вызов фуекции getElement()
getElement();

// создание функции createParentElement()
function createParentElement() {

};
// вызов фуекции createParentElement()
createParentElement();

// создание функции startGame()
function startGame() {

};
// вызов фуекции startGame()
startGame();

// создание функции sendMessage()
function sendMessage() {

};
// вызов фуекции sendMessage()
sendMessage();

// задание 2
// создание функции endGame()
function endGame(item) {

};
// вызов фуекции endGame()
endGame(1);

// создание функции returnValue()
function returnValue(item) {

};
// вызов фуекции returnValue()
returnValue(1);

// создание функции addUser()
function addUser(item) {

};
// вызов фуекции addUser()
addUser(1);

// создание функции deletePost()
function deletePost(item) {

};
// вызов фуекции deletePost()
deletePost(1);

// создание функции addFile()
function addFile(item) {

};
// вызов фуекции addFile()
addFile(1);

// создание функции createElement()
function createElement(item) {

};
// вызов фуекции createElement()
createElement(1);

// создание функции testFunction()
function testFunction(item) {

};
// вызов фуекции testFunction()
testFunction(1);

// создание функции deathPers()
function deathPers(item) {

};
// вызов фуекции deathPers()
deathPers(1);

// создание функции addPers()
function addPers(item) {

};
// вызов фуекции addPers()
addPers(1);

// создание функции rename()
function rename(item) {

};
// вызов фуекции rename()
rename(1);

//ЗАДАНИЕ 3
function startButton(on_off) {
    return on_off;
}
startButton(true);

function clickCount(count) {
    return count;
}
clickCount(10);

function x_position(x_plus) {
    return x_plus;
}
x_position(21);

function goRight(x_pos) {
    return x_pos;
}
goRight(17);

function goLeft(x_pos) {
    return x_pos;
}
goLeft(-19);

function onOpacity(on_off) {
    return on_off;
}
onOpacity(false);

function addLink(link) {
    return link;
}
addLink('https://che-to.tam');

function addForse(forseCount) {
    return forseCount;
}
addForse(500);

function addHP(HPcount) {
    return HPcount;
}
addHP(1000);

function addSpeed(speedCount) {
    return speedCount;
}
addSpeed(1500);

//ЗАДАНИЕ 4

function boostSpeed(count) {
    return count * 2;
}
console.log(func1(15));

function doubleCash(cash) {
    return cash * 2;
}
console.log(doubleCash(1300000));

function moreTime(time) {
    return time * 2;
}
console.log(moreTime(30));

function damageBoost(damage) {
    return damage * 2;
}
console.log(damageBoost(1490));

function moreHP(HP) {
    return HP * 2;
}
console.log(moreHP(1600));

//ЗАДАНИЕ 5

function firstElement(array) {
    return array[0];
}
console.log(firstElement([1, 2, 3, 4]));

//ЗАДАНИЕ 6

function lastElement(array) {
    return array[array.length - 1];
}
console.log(lastElement([1, 2, 3, 4]));

//ЗАДАНИЕ 7

/* объявление функции printMyFullName(),
которая приинимает два значения, соединяет эти 
два значения в одну строчную переменную и возврашает ее*/
function printMyFullName(firstname, secondname) {
    const fullname = `${firstname} ${secondname}`;

    return fullname;
}

// вызов ранее объявленной переменной
console.log(printMyFullName('into', 'code'));

/* объявление функции которая принимает массив как параметр
и возвращает сумму первого и последнего элемента массива */
function getSumOfFirstAndLastElement(arr) {
    if (arr.length < 2) {
        return 'леее, минимум два элемента нужно жи есть';
    } else {
        const lastIndex = arr.length - 1;

        return arr[0] + arr[lastIndex];
    }
}

/* данный вызов функции вернет строку
'леее, минимум два элемента нужно жи есть'
так как в передаваемом массиве недостаточно элементов*/
console.log(getSumOfFirstAndLastElement([]));

/* этот вызов функции вернет число 11 */
console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]));

//ЗАДАНИЕ 8 

let text = "css";

function testVariableScope() {
    let text = "html";

    return text;
}

/* функция возвращает  "html" потому что в самой функции
происходит замена значения переменной, а так как 
переменная text глобальная в функции она переписывается
а не создается новая */
console.log(testVariableScope());

//ЗАДАНИЕ 9

/* функции инициализируются раньше чем начнется
выполнение кода */
console.log(addToNumbers(4, 8))

function addToNumbers(x, y) {
    return x + y;
}