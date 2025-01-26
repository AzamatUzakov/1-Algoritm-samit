///
///let numbers = [10, 15, 20, 25, 30, 35];
///let newNums = numbers.filter(num => num % 2 === 0);
///console.log(newNums);


const students = [
    { name: "Алексей", age: 17, grades: [60, 70, 80] },
    { name: "Мария", age: 19, grades: [85, 90, 95] },
    { name: "Иван", age: 21, grades: [50, 60, 55] },
    { name: "Ольга", age: 20, grades: [78, 82, 80] },
    { name: "Сергей", age: 18, grades: [70, 75, 80] },
];

// Фильтруем студентов старше 18 лет
let AgeStudent = students.filter(student => student.age >= 18);

// Функция для расчета среднего балла
function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
}

// Фильтруем студентов, у которых средний балл больше 75
let topStudents = AgeStudent.filter(student => calculateAverage(student.grades) > 75);

// Извлекаем имена студентов
let names = topStudents.map(student => student.name);

console.log(names); // ["Мария", "Ольга"]
