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




