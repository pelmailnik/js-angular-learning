/*
Написать функцию, которая принимает на вход массив,
и возвращает максимальную подсумму элементов этого массива
Пример: [-2, 1, -3, 4, -1, 2, 1, -5, 4] => 6    ( часть массива [4, -1, 2, 1])
*/

import { ERR_MESSAGE,
  ERR_EMPTY,
  isArray,
  isEmptyArray,
  isValidArrayData,
} from '../js-tasks/utills';

const ERR_WRONG_ELEMENT = 'ERROR Wrong element!';

function convertElementsToNumbers(array) {
  return array.map(number => Number(number));
}

function getMaxSubSum(array) {
  let maxSum = array[0];

  for (let i = 0; i < array.length - 1; i++) {
    let sum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      maxSum = Math.max(sum, maxSum);
    }
  }

  return maxSum;
}

function arrayToMaxSubSumOfElements(array) {
  if (!isArray(array)) {
    return ERR_MESSAGE;
  }
  if (isEmptyArray(array)) {
    return ERR_EMPTY;
  }
  if (!isValidArrayData(array)) {
    return ERR_WRONG_ELEMENT;
  }

  return getMaxSubSum(convertElementsToNumbers(array));
}

export { ERR_WRONG_ELEMENT, arrayToMaxSubSumOfElements };
