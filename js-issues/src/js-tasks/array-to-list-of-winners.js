/*
  Написать функцию, которая принимает на вход массив объектов,
  и возвращает многострочную строку с именами счетом и попытками.
*/

import { ERR_MESSAGE,
  ERR_EMPTY,
  isArray,
  isEmptyArray,
} from '../js-tasks/utills';

const TABLE_HEADER = '\nName    | Score   | Attempts\n----------------------------\n';

function sortTable(first, second) {
  return second.score - first.score;
}

function formatValue(value) {
  const AMOUNT_CHARACTERS = 10;
  let result = String(value);

  if (result.length < AMOUNT_CHARACTERS) {
    for (let i = result.length; i < AMOUNT_CHARACTERS; i++) {
      result += ' ';
    }
  } else {
    result = result.slice(0, AMOUNT_CHARACTERS - 1) + ' ';
  }

  return result;
}

function getResultArray(array) {
  const hash = array.map(item => item.name);
  const winnersArr = [];
  const resultArr = [];

  hash.forEach(item => {
    if (!item) {
      return;
    }
    if (!winnersArr[item]) {
      winnersArr[item] = { name: item, score: 0, attempts: 1 };
      array.forEach(internalItem => {
        if (item === internalItem.name) {
          winnersArr[item].score = Math.max(winnersArr[item].score, Number(internalItem.score));
        }
      });
    } else {
      winnersArr[item].attempts++;
    }
  });

  Object.keys(winnersArr).forEach(item => resultArr.push(winnersArr[item]));

  return resultArr.sort(sortTable);
}

function getResultString(array) {
  let resultStr = TABLE_HEADER;

  array.forEach(item => {
    if (item.name !== undefined) {
      resultStr += formatValue(item.name) + formatValue(item.score) + item.attempts + '\n';
    }
  });

  return resultStr;
}

function arrayToListOfWinners(array) {
  if (!isArray(array)) {
    return ERR_MESSAGE;
  }
  if (isEmptyArray(array)) {
    return ERR_EMPTY;
  }

  const resultArr = getResultArray(array);

  return getResultString(resultArr);
}

// ----------------------------------------------------------------------------

function getResultMap(array) {
  const particMap = new Map();

  array.forEach(item => {
    if (!item.name) {
      return;
    }
    if (!particMap.has(item.name)) {
      particMap.set(item.name, { score: Number(item.score), attempts: 1 });
    } else {
      const mapItem = particMap.get(item.name);
      mapItem.score = Math.max(mapItem.score, item.score);
      mapItem.attempts++;
    }
  });

  return new Map([...particMap.entries()].sort((a, b) => b[1].score - a[1].score));
}

function getResultStringMap(map) {
  let resultStr = TABLE_HEADER;

  map.forEach((value, key) => {
    if (key !== undefined) {
      resultStr += formatValue(key) + formatValue(value.score) + value.attempts + '\n';
    }
  });

  return resultStr;
}

function arrayToListOfWinnersMap(array) {
  if (!isArray(array)) {
    return ERR_MESSAGE;
  }
  if (isEmptyArray(array)) {
    return ERR_EMPTY;
  }

  const resultMap = getResultMap(array);

  return getResultStringMap(resultMap);
}

export { TABLE_HEADER, arrayToListOfWinners, arrayToListOfWinnersMap };
