import { ERR_MESSAGE, ERR_EMPTY } from '../js-tasks/utills';
import {
  ERR_WRONG_ELEMENT,
  arrayToMaxSubSumOfElements,
} from '../js-tasks/sub-sum-array';

describe('sub-sum-array', () => {
  it('should return max sub sum of elements', () => {
    expect(arrayToMaxSubSumOfElements([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(arrayToMaxSubSumOfElements(
      [1, 2, 3, -3, 8, 15, -25, 20, 10, -5, -8, 15, 21, -35, 20]
    )).toBe(54);
    expect(arrayToMaxSubSumOfElements([5, 9, -12, 6, 2, -9, 0, 1, 3, -10])).toBe(14);
    expect(arrayToMaxSubSumOfElements([5, 1, -12, 6, 2, -3, 0, 1, 3, 5])).toBe(14);
    expect(arrayToMaxSubSumOfElements([5, 1, -12, 6, 2, ' -3  ', 0, 1, 3, 5])).toBe(14);
  });
});

describe('sub-sum-array-invalid', () => {
  it('should return message about wrong element', () => {
    expect(arrayToMaxSubSumOfElements(
      [-2, 1, -3, 4, -1, '2f', 1, -5, 4])).toBe(ERR_WRONG_ELEMENT);
    expect(arrayToMaxSubSumOfElements(
      [-2, 1, -3, 4, -1, [2, 2], 1, -5, 4])).toBe(ERR_WRONG_ELEMENT);
    expect(arrayToMaxSubSumOfElements(
      [-2, 1, -3, 4, -1, {}, 1, -5, 4])).toBe(ERR_WRONG_ELEMENT);
    expect(arrayToMaxSubSumOfElements(
      [-2, 1, -3, 4, -1, null, 1, -5, 4])).toBe(ERR_WRONG_ELEMENT);
    expect(arrayToMaxSubSumOfElements(
      [-2, 1, -3, 4, -1, '', 1, -5, 4])).toBe(ERR_WRONG_ELEMENT);
    expect(arrayToMaxSubSumOfElements(
      [-2, 1, -3, 4, -1, () => {}, 1, -5, 4])).toBe(ERR_WRONG_ELEMENT);
  });
  it('should return message about wrong type', () => {
    expect(arrayToMaxSubSumOfElements(123)).toBe(ERR_MESSAGE);
    expect(arrayToMaxSubSumOfElements('string')).toBe(ERR_MESSAGE);
    expect(arrayToMaxSubSumOfElements({})).toBe(ERR_MESSAGE);
    expect(arrayToMaxSubSumOfElements(null)).toBe(ERR_MESSAGE);
    expect(arrayToMaxSubSumOfElements(() => { })).toBe(ERR_MESSAGE);
  });
  it('should return message about empty array', () => {
    expect(arrayToMaxSubSumOfElements([])).toBe(ERR_EMPTY);
  });
});
