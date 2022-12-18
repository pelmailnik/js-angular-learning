import { ERR_MESSAGE, ERR_EMPTY } from '../js-tasks/utills';
import {
  getResultOfPartArraysSum,
  MESSAGE_NOTFOUND,
  MESSAGE_LITTLEDATA,
} from '../js-tasks/get-part-of-array-sum';

let arr;

it('should return special string', () => {
  arr = [3, 4, 5, 12, 15, -1, 0, 3, -5];
  expect(getResultOfPartArraysSum(arr)).toBe('index = 3, element = 12');
  arr = [5, 0, 1, 1, 1, 1, 1];
  expect(getResultOfPartArraysSum(arr)).toBe('index = 1, element = 0');
  arr = [1, 1, 1, 1, '1', 0, 5];
  expect(getResultOfPartArraysSum(arr)).toBe('index = 5, element = 0');
  arr = ['1', 1, 1, 1, 1, 0, 5];
  expect(getResultOfPartArraysSum(arr)).toBe('index = 5, element = 0');
  arr = [1, 1, 1, 1, '  1   ', 0, 5];
  expect(getResultOfPartArraysSum(arr)).toBe('index = 5, element = 0');
  arr = [1, 1, 1, 0, 1, 1, 1];
  expect(getResultOfPartArraysSum(arr)).toBe('index = 3, element = 0');
});

it('should return message about little data', () => {
  arr = [1];
  expect(getResultOfPartArraysSum(arr)).toBe(MESSAGE_LITTLEDATA);
  arr = [1, 2];
  expect(getResultOfPartArraysSum(arr)).toBe(MESSAGE_LITTLEDATA);
});

it('should return message about the absence', () => {
  arr = [3, 4, 5, 12, 17, -1, 0, 3, -5];
  expect(getResultOfPartArraysSum(arr)).toBe(MESSAGE_NOTFOUND);
  arr = [1, 2, 3, 0, 1, 1];
  expect(getResultOfPartArraysSum(arr)).toBe(MESSAGE_NOTFOUND);
});

it('should process invalid data', () => {
  expect(getResultOfPartArraysSum(123)).toBe(ERR_MESSAGE);
  expect(getResultOfPartArraysSum('string')).toBe(ERR_MESSAGE);
  expect(getResultOfPartArraysSum({})).toBe(ERR_MESSAGE);
  expect(getResultOfPartArraysSum(null)).toBe(ERR_MESSAGE);
  expect(getResultOfPartArraysSum(() => { })).toBe(ERR_MESSAGE);
  arr = [1, 1, 1, 1, '  1d   ', 0, 5];
  expect(getResultOfPartArraysSum(arr)).toBe(ERR_MESSAGE);
  arr = [1, 1, 1, 1, '1, 0', 0, 5];
  expect(getResultOfPartArraysSum(arr)).toBe(ERR_MESSAGE);
  arr = [1, 1, 1, 1, null, 0, 5];
  expect(getResultOfPartArraysSum(arr)).toBe(ERR_MESSAGE);
  arr = [1, 1, 1, 1, '', 0, 5];
  expect(getResultOfPartArraysSum(arr)).toBe(ERR_MESSAGE);
});

it('should process empty array', () => {
  expect(getResultOfPartArraysSum([])).toBe(ERR_EMPTY);
});
