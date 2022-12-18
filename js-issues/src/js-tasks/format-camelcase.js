/*
  Написать функцию принимающую на вход строчку записанную camelCase,
  и возвращающую отформатированную строку.
  Пример: "thisIsCamelCase" => "this is camel case"
*/

const LOWER_A = 97;
const LOWER_Z = 122;
const UPPER_A = 65;
const UPPER_Z = 90;

import { ERR_MESSAGE, validateInputType } from '../js-tasks/utills';

function isInCharacterRange(char, from, to) {
  return (char.charCodeAt() >= from) && (char.charCodeAt() <= to);
}

function isLowerCase(char) {
  return isInCharacterRange(char, LOWER_A, LOWER_Z);
}

function isUpperCase(char) {
  return isInCharacterRange(char, UPPER_A, UPPER_Z);
}

function camelCaseToLowerCase(str) {
  let result = '';

  if (!validateInputType(str, 'string')) {
    return ERR_MESSAGE;
  }

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (isLowerCase(element)) {
      result += element;
    } else if (isUpperCase(element)) {
      result += ' ' + element;
    } else {
      return ERR_MESSAGE;
    }
  }

  return result.toLowerCase();
}

// ---------------------------------------------

function isValidCamelCase(str) {
  return !Boolean(str.match(/[^a-zA-Z]/));
}

function camelCaseToLowerCaseReg(str) {
  if (!(validateInputType(str, 'string') && isValidCamelCase(str))) {
    return ERR_MESSAGE;
  }

  const result = str.match(/[A-Z]?[a-z]+/g);

  return result.join(' ').toLowerCase();
}

export { camelCaseToLowerCase, camelCaseToLowerCaseReg };
