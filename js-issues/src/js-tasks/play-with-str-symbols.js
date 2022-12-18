/*
Implement functions: getArrayUnicSymbols, getArrayNonUnicSymbols, getArraySortAlphabetical
returing unique symbols, non unique (repeative) symbols and symbols in alphabetical order
*/

import { ERR_MESSAGE, validateInputType } from '../js-tasks/utills';

function deleteSpaces(str) {
  return str.split(' ').join('');
}

function getConditionUnicSymbols(str, element) {
  return str.indexOf(element) === str.lastIndexOf(element);
}

function getConditionNonUnicSymbols(str, element, result) {
  return (str.indexOf(element) !== str.lastIndexOf(element)) && result.indexOf(element) < 0;
}

function iterateStringByCondition(str, getCondition) {
  const interiorStr = deleteSpaces(str);
  let result = '';

  for (let i = 0; i < interiorStr.length; i++) {
    const element = interiorStr[i];
    if (getCondition(interiorStr, element, result)) {
      result += element;
    }
  }

  return result;
}

function getArrayUnicSymbols(str) {
  return (validateInputType(str, 'string')) ?
    iterateStringByCondition(str, getConditionUnicSymbols) :
    ERR_MESSAGE;
}

function getArrayNonUnicSymbols(str) {
  return (validateInputType(str, 'string')) ?
    iterateStringByCondition(str, getConditionNonUnicSymbols) :
    ERR_MESSAGE;
}

function getArraySortAlphabetical(str) {
  return (validateInputType(str, 'string')) ?
    deleteSpaces(str).split('').sort().join('') :
    ERR_MESSAGE;
}

export { getArrayUnicSymbols, getArrayNonUnicSymbols, getArraySortAlphabetical };
