import { ERR_MESSAGE } from '../js-tasks/utills';
import getMultiplicationOfNumbers from '../js-tasks/multiplication-of-numbers';

it('should return multiplication of numbers', () => {
  // input => 1234, intermediates => 24 => 8, output => 8
  expect(getMultiplicationOfNumbers(1234)).toBe(8);
  // input => 123456, intermediates => 720 => 0, output => 0
  expect(getMultiplicationOfNumbers(123456)).toBe(0);
  // input => 5975, intermediates => 1575 => 175 => 35 => 15 => 5, output => 5
  expect(getMultiplicationOfNumbers(5975)).toBe(5);
});

it('should process invalid data', () => {
  expect(getMultiplicationOfNumbers('string')).toBe(ERR_MESSAGE);
  expect(getMultiplicationOfNumbers({})).toBe(ERR_MESSAGE);
  expect(getMultiplicationOfNumbers([])).toBe(ERR_MESSAGE);
  expect(getMultiplicationOfNumbers(null)).toBe(ERR_MESSAGE);
  expect(getMultiplicationOfNumbers(() => {})).toBe(ERR_MESSAGE);
});
