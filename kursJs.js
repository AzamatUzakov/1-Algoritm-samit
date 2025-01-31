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

