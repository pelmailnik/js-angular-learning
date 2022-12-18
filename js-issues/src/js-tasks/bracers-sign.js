/*
  Написать функцию, которая преобразует строку следующим образом:
  символ встречается 1 раз - заменяем на "{", несколько раз - на "}".
  Пример: "din" => "{{{"
  "recede" => "{}{}{}"
  "Success" => "}{}}{}}"
  "(( @" => "}}{{"
*/

import { ERR_MESSAGE, validateInputType } from '../js-tasks/utills';

const UNIQ = '{';
const NON_UNIQ = '}';


function replaceCharsWithBracers(str) {
  if (!validateInputType(str, 'string')) {
    return ERR_MESSAGE;
  }

  const internalStr = str.toLowerCase();
  let result = '';

  for (let i = 0; i < internalStr.length; i++) {
    const element = internalStr[i];
    if (internalStr.indexOf(element) === internalStr.lastIndexOf(element)) {
      result += UNIQ;
    } else {
      result += NON_UNIQ;
    }
  }

  return result;
}

export default replaceCharsWithBracers;
