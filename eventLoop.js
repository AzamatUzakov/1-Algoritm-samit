console.log("Начало");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("Конец");

/* Что такое Event Loop?
Event Loop – это механизм в JavaScript, который позволяет выполнять код асинхронно и неблокирующе. Он управляет очередью задач и распределяет выполнение между основным потоком (main thread) и callback'ами.

💡 Краткий ответ для собеса:
"Event Loop – это механизм, который обрабатывает синхронные и асинхронные задачи в JavaScript, извлекая их из очереди и выполняя в основном потоке."

Как работает Event Loop?
Выполняется основной код (синхронный).
Асинхронные задачи (setTimeout, fetch, промисы и др.) отправляются в очередь (callback queue / microtask queue).
Когда стек вызовов (Call Stack) пуст, Event Loop берет задачу из очереди и выполняет. */
