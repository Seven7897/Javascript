// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
const getNumberStepen = (number, stepen) => Math.pow(number, stepen);
console.log(
  getNumberStepen(
    Number(prompt("Введите число :")),
    Number(prompt("Задайте степень :"))
  )
);
// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const nalog = (sum) => sum * 0.87;
let userZp = +prompt("Введите развер заработной платы в цифрах");
function proverka() {
  while (true) {
    if (Number.isFinite(userZp) == true) {
      break;
    }
    userZp = +prompt("Введите развер заработной платы в цифрах");
  }
  return userZp;
}
console.log(
  `Размер заработной платы за вычетом налогов равен ${nalog(proverka())}`
);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const one = Number(prompt("Введите первое число :"));
const two = Number(prompt("Введите второе число :"));
const three = Number(prompt("Введите третье число :"));
const SearchMaxNumber = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log(SearchMaxNumber(one, two, three));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const num1 = +prompt("Введите первое число :");
const num2 = +prompt("Введите второе число :");
const add = (a, b) => a + b;
const subt = (a, b) => Math.max(a, b) - Math.min(a, b);
const div = (a, b) => Math.max(a, b) / Math.min(a, b);
const mult = (a, b) => a * b;

console.log(`
Сложение чисел будет равно : ${add(num1, num2)} 
Вычитание чисел будет равно : ${subt(num1, num2)} 
Деление чисел будет равно : ${div(num1, num2)} 
Умножение чисел будет равно : ${mult(num1, num2)}`);
