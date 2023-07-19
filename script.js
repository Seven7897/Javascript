// // Задание 1
// // Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// // Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

const num1 = +prompt("Введите первое число");
const num2 = +prompt("Введите второе число");
if (num1 <= 1) {
  console.log("переменная num1 равна или меньше 1");
} else {
  console.log("переменная num1 больше 1");
}
if (num2 >= 3) {
  console.log("переменная num2 больше или равна 3");
} else {
  console.log("переменная num2 меньше 3");
}

// // Задание 2

let test = true;
test === true ? console.log("+++") : console.log("---");

// // Задание 3
// // В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

while (true) {
  const day = +prompt("Введите число месяца");
  if (day > 0 && day <= 31) {
    if (day <= 10) {
      console.log("Первая декада");
      break;
    } else if (day > 10 && day <= 20) {
      console.log("Вторая декада");
      break;
    } else {
      console.log("Третья декада");
      break;
    }
  }
  alert("Данного числа нет в месяце");
}

// Задание 4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

let userNumber = +prompt("Введите число");
function modul(num) {
  return (num = num % 10);
}

number = userNumber;
const units = modul(number);
number /= 10;
const tenths = Math.floor(modul(number));
number /= 10;
const hundredths = Math.floor(modul(number));

console.log(
  `В числе ${userNumber} сотых ${hundredths} десятых ${tenths} единиц ${units} `
);
