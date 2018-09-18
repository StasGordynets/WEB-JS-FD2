let counter;

function countLetters(string) {
    let matches_array = string.match(/[аеёиоуыэюя]/gi);
    return matches_array.length;
}

function inputString() {
    counter = 0;
    let string = prompt("Введите строку с русскими символами!");
    alert(countLetters(string));
}
