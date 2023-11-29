let num1 = parseInt(prompt("Введите первое число"));
let num2 = parseInt(prompt("Введите второе число"));
function amount(num1, num2) {
    alert(`Результат сложения ${num1} и ${num2} равен ${num1 + num2}`);
}
function subtraction(num1, num2) {
    alert(`Результат вычитания ${num2} от ${num1} равен ${num1 - num2}`);
}
function multiplication(num1, num2) {
    alert(`Результат умножения ${num1} и ${num2} равен ${num1 * num2}`);
}
function splitting(num1, num2) {
    alert(`Результат деления ${num1} на ${num2} равен ${num1 / num2}`);
}
amount(num1, num2);
subtraction(num1, num2);
multiplication(num1, num2);
splitting(num1, num2);