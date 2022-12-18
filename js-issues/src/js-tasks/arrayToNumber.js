/*
  Написать функцию, которая принимает на вход массив из 10 чисел, а возвращает номер телефона
  Пример: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]  => "(123) 456-7890"
*/

import { ERR_MESSAGE,
  ERR_EMPTY,
  isArray,
  isEmptyArray,
  isValidArrayData,
} from '../js-tasks/utills';

const ERR_WRONG_ELEMENT = 'ERROR Wrong element!';
const MESSAGE_WRONG_SIZE = 'Wrong size.';

function isRightSize(array) {
  return array.length === 10;
}

function isArrayOfNumbers(array) {
  return array.every(number => number >= 0 && number < 10);
}

function arrayToNumber(array) {
  if (!isArray(array)) {
    return ERR_MESSAGE;
  }
  if (isEmptyArray(array)) {
    return ERR_EMPTY;
  }
  if (!isRightSize(array)) {
    return MESSAGE_WRONG_SIZE;
  }
  if (!(isValidArrayData(array) && isArrayOfNumbers(array))) {
    return ERR_WRONG_ELEMENT;
  }

  const internalArray = array.map(element => Number(element));

  return `(${internalArray.slice(0, 3).join('')}) ` +
    `${internalArray.slice(3, 6).join('')}-${internalArray.slice(6, 10).join('')}`;
}

export { ERR_EMPTY, ERR_WRONG_ELEMENT, MESSAGE_WRONG_SIZE, arrayToNumber };
