// // Задание 1
// // Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// // 0 – это ноль
// // 1 – нечетное число
// // 2 – четное число
// // 3 – нечетное число
// // …
// // 10 – четное число

function proverka(number) {
  if (number === 0) {
    console.log(`${number} Это ноль`);
  } else if (number % 2 === 0) {
    console.log(`${number} число четное`);
  } else {
    console.log(`${number} число нечетное`);
  }
}
for (let i = 0; i < 11; i++) {
  proverka(i);
}

// // Задание 2
// // Дан массив [1, 2, 3, 4, 5, 6, 7]
// // Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array2 = [1, 2, 3, 4, 5, 6, 7];
array2.splice(3, 2);
console.log(array2);

// // Задание 3
// // Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// // 1. Рассчитать сумму элементов этого массива
// // 2. Найти минимальное число
// // 3. Найти есть ли в этом массиве число 3

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const array3 = [];
let sum = 0;
let min = 10;
for (let i = 0; i < 5; i++) {
  array3[i] = getRandomArbitrary(0, 9);
  if (array3[i] === 3) {
    console.log(`Число 3 лежит под индексом ${i}`);
  }
  if (array3[i] < min) {
    min = array3[i];
  }
  sum += array3[i];
}
console.log(array3);
console.log(`Сумма всех элементоа : ${sum}`);
console.log(`Минимальный элемент : ${min}`);

// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
for (let i = 1; i <= 20; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "x";
  }
  console.log(str);
}
