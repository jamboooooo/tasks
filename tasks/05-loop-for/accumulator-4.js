let array = ['Абдулла', "Халид", "Альви", "Мансур", "Ислам", "Магомед", "Мовли", "Усман", "Амина", "Алина"];
let accumulator = [];

for (let i = 0; i < array.length; i++) {
    if (array[i][0] === 'А') {
        accumulator.push(array[i]);
    }
}