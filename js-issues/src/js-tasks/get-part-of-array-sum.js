/*
 Задача:
    Напиши функцию которая принимает на вход числовой массив.
    Результатом выполнения данной функции будет индекс элемента массива
    и сам элемент для которого сумма всех элементов до него равна, сумме все элементов после него.
    Пример: [3,4,5,12, 15,-1,0,3,-5] => “index = 3, element = 12”
*/

import { ERR_MESSAGE,
  ERR_EMPTY,
  isArray,
  isEmptyArray,
  isValidArrayData,
} from '../js-tasks/utills';

const MESSAGE_NOTFOUND = 'Element is not found.';
const MESSAGE_LITTLEDATA = 'Little data.';

function isLittleData(array) {
  return (array.length > 0 && array.length < 3);
}

function getRightSum(array) {
  let sum = 0;

  for (let i = 1; i < array.length; i++) {
    sum += Number(array[i]);
  }

  return sum;
}

function findTotalSum(array) {
  let sumLeft = 0;
  let sumRight = getRightSum(array);

  for (let i = 1; i < array.length; i++) {
    sumLeft += Number(array[i - 1]);
    sumRight -= Number(array[i]);
    if (sumLeft === sumRight) {
      return `index = ${i}, element = ${array[i]}`;
    }
  }

  return MESSAGE_NOTFOUND;
}

function getResultOfPartArraysSum(array) {
  if (!(isArray(array) && isValidArrayData(array))) {
    return ERR_MESSAGE;
  }
  if (isEmptyArray(array)) {
    return ERR_EMPTY;
  }
  if (isLittleData(array)) {
    return MESSAGE_LITTLEDATA;
  }

  return findTotalSum(array);
}

export { getResultOfPartArraysSum, MESSAGE_NOTFOUND, MESSAGE_LITTLEDATA };
