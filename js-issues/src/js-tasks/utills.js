const ERR_MESSAGE = 'ERROR Invalid data!';
const ERR_EMPTY = 'ERROR Array is empty!';

function validateInputType(str, type) {
  return typeof(str) === type;
}

function isArray(array) {
  return Array.isArray(array);
}

function isEmptyArray(array) {
  return array.length === 0;
}

function isValidArrayData(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (isNaN(element) || element === null || element === '') {
      return false;
    }
  }

  return true;
}

export { ERR_MESSAGE, ERR_EMPTY, validateInputType, isArray, isEmptyArray, isValidArrayData };
