
//task-1 Массив Прототип Последний
Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length-1]

};


/// task-2 Счетчик
var createCounter = function (n) {
    return function() {
        return n++;
    };

};
//const counter = createCounter(10);
console.log(createCounter()); // 10
console.log(createCounter()); // 11
console.log(createCounter()); // 12
