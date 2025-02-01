///Object////////////
let obj = {
    name: "aza",
    age: 18,
}
obj.c = "Priv"
console.log(obj);
//////////////////////////////////////


//Json
let JsonString = '{"name": "Иван", "age": 25}'
let obj2 = JSON.parse(JsonString)

let obj3 = JSON.stringify(JsonString)
console.log(obj3);
//////////////////////////////////////

//Object.assign()
const person = {
    name: "Alex",
    age: 18,
    family: {
        papa: "Dad",
        mam: "Zizi"
    }
}
let cloneObj = Object.assign({}, person)
console.log(person);
console.log(cloneObj);
///////////////////////////////////////


//Colback function

function PrintMayNamr() {
    console.log("Azamat");

}
setTimeout(PrintMayNamr, 1000)
////////////////////////////////////////


//operator ...
const btn = {
    color: "red",
    text: "Baye"

}
const redBtn = {
    ...btn,
    age: 18,
}
console.table(redBtn);
////////////////////////////////////////////


//Значение параметров функции по умольчанию
function xaz(value, multi = 2)/* defoult значение 2, если в агргумент передан только одно значение*/ {
    return value * multi
}
console.log(xaz(10, 5));
console.log(xaz(3));
//
let newPost = (post, adddAt = Date()) => ({
    ...post,
    adddAt,
})
const fire = {
    id: 1,
    author: "Azamat"
}
console.table(newPost(fire));
/////////////////////////////////////////////



//Обработка ошибок 
const FintEarror = () => {
    throw new Error("Some Error");//Создает ошибку

}
try {
    FintEarror()
} catch (error) {
    console.error(error);
    console.log(error.message);

}

console.log("Continue");
/////////////////////////////////////////////// 



//Деструктуризация объяектов
const userProfile = {
    name: "Fedya",
    age: 18,
    isMare: false,
}
const { name, age } = userProfile //Зачем нужна деструктуризация?
const { isMare } = userProfile    //Упрощает код – меньше строк при извлечении данных.
console.log(name);                //Позволяет работать только с нужными свойствами – удобно при работе с API.
console.log(isMare);              //Облегчает передачу параметров в функции – можно сразу извлекать нужные значения.
/////////////////////////////////////////////////


//Деструктуризация массивов
const fruits = ["Aplle", "Banana"] //Деструктуризация массивов позволяет извлекать элементы из массива и присваивать их переменным в удобной форме.
const [firstFruit, secondFruit] = fruits
console.log(firstFruit, secondFruit);
/////////////////////////////////////////////////



//Тернарный оператор

let numberS = 20
numberS === 2 ? console.log("Условие истенно") : console.log("Условие ложное");
//////////////////////////////////////////////////


//Конструктор класса
class Peron {
    constructor(name, gop) {
        this.name = name
        this.gop = gop
    }

    sayHello() {
        console.log(`Привет меня зовут ${this.name}, и моя професия ${this.gop} `);

    }
}

const user1 = new Peron("Xazrat", "DevOps")
const litakk = new Peron("Feruz", "Frontend")

user1.sayHello()
litakk.sayHello()

//////////
class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {
        console.log(`${this.name} говорит мяу`);
    }
}
let cat = new Animal("Fedya")
cat.makeSound()

///////////////////////////////////////////



//Promise
const orderPizza = new Promise((resolve, reject) => {
    let isPizzaReady = false; // Можно поменять на false, чтобы проверить reject

    setTimeout(() => {
        if (isPizzaReady) {
            resolve("Пицца готова! 🍕"); // Успех
        } else {
            reject("Пицца не будет доставлена! ❌"); // Ошибка
        }
    }, 3000);
});

// Используем промис
orderPizza
    .then(result => console.log(result)) // Если успех
    .catch(error => console.log(error))  // Если ошибка
    .finally(() => console.log("Спасибо за заказ!")); // Выполняется в любом случае
//////////////////////////////////////////////////////////




//async and await
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Ожидаем ответ
        let data = await response.json(); // Ожидаем преобразования в JSON
        console.log("Данные:", data); // Выводим результат
    } catch (error) {
        console.error("Ошибка:", error); // Обрабатываем ошибку
    }
}
fetchData();
//////////////////////////////////////////



//Promise async and await
const timerPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000)
    })

const asynFn = async () => {
    console.log("Timer start");
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
console.log("Timer end", endTime - startTime);
}
asynFn()
//////////////////////////////////////////




