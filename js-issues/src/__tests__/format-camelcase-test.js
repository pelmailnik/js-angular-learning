import { camelCaseToLowerCase, camelCaseToLowerCaseReg } from '../js-tasks/format-camelcase';
import { ERR_MESSAGE } from '../js-tasks/utills';

let str;

it('should return lowerCase string with spaces', () => {
  str = 'thisIsCamelCase';
  expect(camelCaseToLowerCase(str)).toBe('this is camel case');
  str = 'ItIsTheLongStringConsistingOfManyWordsWithoutMeaning';
  expect(camelCaseToLowerCase(str)).toBe(
    ' it is the long string consisting of many words without meaning'
  );
});

it('should return lowerCase string with spaces (regular)', () => {
  str = 'thisIsCamelCase';
  expect(camelCaseToLowerCaseReg(str)).toBe('this is camel case');
  str = 'ItIsTheLongStringConsistingOfManyWordsWithoutMeaning';
  expect(camelCaseToLowerCaseReg(str)).toBe(
    'it is the long string consisting of many words without meaning'
  );
});

it('should return message about invalid data', () => {
  str = 'thisIsCamel Case';
  expect(camelCaseToLowerCase(str)).toBe(ERR_MESSAGE);
  str = 'thisIsCamelCase5';
  expect(camelCaseToLowerCase(str)).toBe(ERR_MESSAGE);
  str = 'thisIsCamel Case5';
  expect(camelCaseToLowerCase(str)).toBe(ERR_MESSAGE);
  expect(camelCaseToLowerCase(123)).toBe(ERR_MESSAGE);
  expect(camelCaseToLowerCase({})).toBe(ERR_MESSAGE);
  expect(camelCaseToLowerCase([])).toBe(ERR_MESSAGE);
  expect(camelCaseToLowerCase(null)).toBe(ERR_MESSAGE);
  expect(camelCaseToLowerCase(() => { })).toBe(ERR_MESSAGE);
});

it('should return message about invalid data (regular)', () => {
  str = 'thisIsCamel Case';
  expect(camelCaseToLowerCaseReg(str)).toBe(ERR_MESSAGE);
  str = 'thisIsCamelCase5';
  expect(camelCaseToLowerCaseReg(str)).toBe(ERR_MESSAGE);
  str = 'thisIsCamel Case5';
  expect(camelCaseToLowerCaseReg(str)).toBe(ERR_MESSAGE);
  expect(camelCaseToLowerCaseReg(123)).toBe(ERR_MESSAGE);
  expect(camelCaseToLowerCaseReg({})).toBe(ERR_MESSAGE);
  expect(camelCaseToLowerCaseReg([])).toBe(ERR_MESSAGE);
  expect(camelCaseToLowerCaseReg(null)).toBe(ERR_MESSAGE);
  expect(camelCaseToLowerCaseReg(() => { })).toBe(ERR_MESSAGE);
});
