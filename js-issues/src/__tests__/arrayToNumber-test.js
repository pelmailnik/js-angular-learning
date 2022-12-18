import { ERR_MESSAGE, ERR_EMPTY } from '../js-tasks/utills';
import {
  ERR_WRONG_ELEMENT,
  MESSAGE_WRONG_SIZE,
  arrayToNumber,
} from '../js-tasks/arrayToNumber';

let array;

describe('array-to-number', () => {
  it('should return phone number', () => {
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    expect(arrayToNumber(array)).toBe('(123) 456-7890');
    array = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe('(098) 765-4321');
    array = [0, 9, 8, 7, 6, '  5 ', 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe('(098) 765-4321');
  });
});

describe('array-to-number-invalid', () => {
  it('should return message about wrong element', () => {
    array = [0, 9, 8, 7, 6, '5f', 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe(ERR_WRONG_ELEMENT);
    array = [0, 9, 8, 7, 6, '55', 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe(ERR_WRONG_ELEMENT);
    array = [0, 9, 8, 7, 6, '', 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe(ERR_WRONG_ELEMENT);
    array = [0, 9, 8, 7, 6, 55, 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe(ERR_WRONG_ELEMENT);
    array = [0, 9, 8, 7, 6, -5, 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe(ERR_WRONG_ELEMENT);
    array = [0, 9, 8, 7, 6, [5, 5], 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe(ERR_WRONG_ELEMENT);
    array = [0, 9, 8, 7, 6, {}, 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe(ERR_WRONG_ELEMENT);
    array = [0, 9, 8, 7, 6, null, 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe(ERR_WRONG_ELEMENT);
    array = [0, 9, 8, 7, 6, () => {}, 4, 3, 2, 1];
    expect(arrayToNumber(array)).toBe(ERR_WRONG_ELEMENT);
  });
  it('should return message about wrong type', () => {
    expect(arrayToNumber(123)).toBe(ERR_MESSAGE);
    expect(arrayToNumber('string')).toBe(ERR_MESSAGE);
    expect(arrayToNumber({})).toBe(ERR_MESSAGE);
    expect(arrayToNumber(null)).toBe(ERR_MESSAGE);
    expect(arrayToNumber(() => { })).toBe(ERR_MESSAGE);
  });
  it('should return message about empty array', () => {
    expect(arrayToNumber([])).toBe(ERR_EMPTY);
  });
  it('should return message about wrong size', () => {
    array = [1];
    expect(arrayToNumber(array)).toBe(MESSAGE_WRONG_SIZE);
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(arrayToNumber(array)).toBe(MESSAGE_WRONG_SIZE);
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(arrayToNumber(array)).toBe(MESSAGE_WRONG_SIZE);
  });
});
