
//////////////////////////////////////////////////////////////////////////////////
// 1. Создаем массив с числами
const numbers = [10, 20, 30];

// 2. Добавляем элементы в конец массива
numbers.push(40, 50);

// 3. Удаляем последний элемент из массива
const last = numbers.pop();

// 4. Выводим массив и удалённый элемент
console.log("Массив:", numbers);
console.log("Удалённый элемент:", last);


//////////////////////////////////////////////////////////////////////////////////
const arr = [1, 2, 3, 4, 5];
const part = arr.slice(2);
console.log(part); // [3, 4, 5]
// Берёт все элементы, начиная с индекса 2 до конца массива.
//////////////////////////////////////////////////////////////////////////////////

const str = "a,b,c,d,e";
const result = str.split(",", 3); // Разделить максимум на 3 части
console.log(result); // ["a", "b", "c"]
///////////////////////////////////////////////////////////////////////////////////


//Метод some() проверяет, удовлетворяет ли хотя бы один элемент массива условию, заданному в функции. Возвращает true или false.
const numse = [1, 2, 3, 4, 5];
const hasLargeNumber = numse.some(num => num > 3);
console.log(hasLargeNumber);// true
///////////////////////////////////////////////////////////////////////////////////



//Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в функции. Возвращает true или false.
const nums = [2, 4, 6, 8];
const allEven = nums.every(num => num % 2 === 0);
console.log(allEven); // true
///////////////////////////////////////////////////

//Метод includes() проверяет, содержит ли массив определённое значение. Возвращает true или false.
const fruits = ["apple", "banana", "cherry"];
const hasBanana = fruits.includes("banana");
console.log(hasBanana); // true
///////////////////////////////////////////////////


//Метод concat() используется для объединения двух или более массивов в один. Он возвращает новый массив, не изменяя существующие.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
///////////////////////////////////////////////////


//Метод flat() создаёт новый массив, убирая вложенные массивы на указанную глубину. Если глубина не указана, по умолчанию используется 1.
const nestedArr = [1, [2, 3], [4, [5, 6]]];
const flatArr = nestedArr.flat();
console.log(flatArr); // [1, 2, 3, 4, [5, 6]]

//Чтобы полностью расплющить массив
const completelyFlat = nestedArr.flat(Infinity);
console.log(completelyFlat); // [1, 2, 3, 4, 5, 6]
///////////////////////////////////////////////////


//В JavaScript метод replace() используется для замены части строки на другую строку или результат, вычисленный функцией
//Заменяет только первое совпадение:
const text = "Hello, world!";
const resultes = text.replace("world", "JavaScript");
console.log(resultes); // "Hello, JavaScript!"
///////////////////////////////////////////////////



//Метод trim() в JavaScript используется для удаления пробелов (и других пробельных символов, таких как табуляция и переносы строк) с начала и конца строки.
//Удаление пробелов:
const texts = "   Hello, world!   ";
const trimmedText = texts.trim();
console.log(trimmedText); // "Hello, world!"


//Object.keys()Возвращает массив ключей (свойств) объекта.
const user = {
    name: "Alice",
    age: 25,
    country: "USA"
  };
  
  const keys = Object.keys(user);
  console.log(keys); // ["name", "age", "country"]
///////////////////////////////////////////////////


//Object.values() Возвращает массив значений свойств объекта.
const users = {
    name: "Alice",
    age: 25,
    country: "USA"
  };
  
  const values = Object.values(users);
  console.log(values); // ["Alice", 25, "USA"]
///////////////////////////////////////////////////


//Метод reverse() в JavaScript используется для изменения порядка элементов массива на обратный. Этот метод модифицирует исходный массив, а также возвращает ссылку на этот массив.
const stress = "hello";
const reversedStr = strees.split('').reverse().join('');

console.log(reversedStr); // "olleh"
