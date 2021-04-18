let array = ['c', 'c++', 'c#', 'java', 'javascript', 'python', 'ruby', 'php', 'delphi', 'visual basic'];
let accumulator = [];

for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
        accumulator.push(array[i]);
    }
}