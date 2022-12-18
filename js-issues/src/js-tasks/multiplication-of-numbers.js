/*
   Задача:
   Написать функцию, которая принимает на вход число и превращает его в одно число
   по следующему алгоритму
   Цифры перемножаются между собой пока не получится число из одной цифры:
   input => 1234, algo => 1*2*3*4 = 24 => 2*4 =8 output => 8
*/

import { ERR_MESSAGE, validateInputType } from '../js-tasks/utills';

// function multiplicateNumbersString(number) {
//   let strNumber = String(number);
//   let result;

//   do {
//     result = strNumber[0];
//     for (let i = 1; i < strNumber.length; i++) {
//       const element = strNumber[i];
//       result *= element;
//     }
//     strNumber = String(result);
//   }
//   while (strNumber.length > 1);

//   return result;
// }

function getOneIterationOfMultiplication(number) {
  return (number < 10) ?
    number :
    (number % 10) * getOneIterationOfMultiplication((number - (number % 10)) / 10);
}

function multiplicateNumbers(number) {
  let internalNumber = number;

  while (internalNumber >= 10) {
    internalNumber = getOneIterationOfMultiplication(internalNumber);
  }

  return internalNumber;
}

function getMultiplicationOfNumbers(number) {
  return validateInputType(number, 'number') ? multiplicateNumbers(number) : ERR_MESSAGE;
}

export default getMultiplicationOfNumbers;
