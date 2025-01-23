//Алгоритм для уникальных символов строки
function Uniquest(str) {

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++)

            if (str[i] === str[j]) {
                return false;

            }


    }
    return true;
}

console.log(Uniquest('abcd'));
console.log(Uniquest('aabcd'));

console.log("hello");

