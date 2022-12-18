import { ERR_MESSAGE, ERR_EMPTY } from '../js-tasks/utills';
import {
  TABLE_HEADER,
  arrayToListOfWinners,
  arrayToListOfWinnersMap,
} from '../js-tasks/array-to-list-of-winners';

let arr;
let str;

describe('array-to-list-of-winners', () => {
  it('should return list of winners', () => {
    arr = [
      { name: 'Pasha', score: '100' }, { name: 'Petya', score: '1050' },
      { name: 'Masha', score: '507' }, { name: 'Pasha', score: '1890' },
      { name: 'Masha', score: '700' }, { name: 'Petya', score: '990' },
      { name: 'Vasya', score: '990' },
    ];
    str = TABLE_HEADER +
    'Pasha     1890      2\n' +
    'Petya     1050      2\n' +
    'Vasya     990       1\n' +
    'Masha     700       2\n';
    expect(arrayToListOfWinners(arr)).toBe(str);
    expect(arrayToListOfWinnersMap(arr)).toBe(str);
    arr = [
      { name: 'Pasha', score: '100' }, { name: 'Petya', score: '' },
      { name: '', score: '507' }, { name: 'Pasha', score: '1890' },
      { name: '', score: '700' }, { name: 'Petya', score: '990' },
      { name: 'Vasya', score: '990' }, { name: 'Pasha', score: '100' },
      { name: 'Pasha', score: '100' }, { name: 'Pasha', score: '100' },
    ];
    str = TABLE_HEADER +
    'Pasha     1890      5\n' +
    'Petya     990       2\n' +
    'Vasya     990       1\n';
    expect(arrayToListOfWinners(arr)).toBe(str);
    expect(arrayToListOfWinnersMap(arr)).toBe(str);
    arr = [
      { name: 'Pasha', score: '100' }, { name: 'Petya', score: '1050' },
      { name: 'Masha', score: '507' }, { name: 'Pasha', score: '1890' },
      { name: 'Masha', score: '700' }, { name: 'Petya', score: '990' },
      { },
    ];
    str = TABLE_HEADER +
    'Pasha     1890      2\n' +
    'Petya     1050      2\n' +
    'Masha     700       2\n';
    expect(arrayToListOfWinners(arr)).toBe(str);
    expect(arrayToListOfWinnersMap(arr)).toBe(str);
  });
  it('should process long name', () => {
    arr = [
      { name: 'Pasha', score: '100' }, { name: 'Petya123456789', score: '1050' },
      { name: 'Masha', score: '507' }, { name: 'Pasha6789', score: '1890' },
      { name: 'Masha', score: '700' }, { name: 'Petya', score: '990' },
      { name: 'Vasya', score: '990' },
    ];
    str = TABLE_HEADER +
    'Pasha6789 1890      1\n' +
    'Petya1234 1050      1\n' +
    'Petya     990       1\n' +
    'Vasya     990       1\n' +
    'Masha     700       2\n' +
    'Pasha     100       1\n';
    expect(arrayToListOfWinners(arr)).toBe(str);
    expect(arrayToListOfWinnersMap(arr)).toBe(str);
  });
});

describe('array-to-list-of-winners-invalid', () => {
  it('should return message about wrong type', () => {
    expect(arrayToListOfWinners(123)).toBe(ERR_MESSAGE);
    expect(arrayToListOfWinnersMap(123)).toBe(ERR_MESSAGE);
    expect(arrayToListOfWinners('string')).toBe(ERR_MESSAGE);
    expect(arrayToListOfWinnersMap('string')).toBe(ERR_MESSAGE);
    expect(arrayToListOfWinners({})).toBe(ERR_MESSAGE);
    expect(arrayToListOfWinnersMap({})).toBe(ERR_MESSAGE);
    expect(arrayToListOfWinners(null)).toBe(ERR_MESSAGE);
    expect(arrayToListOfWinnersMap(null)).toBe(ERR_MESSAGE);
    expect(arrayToListOfWinners(() => { })).toBe(ERR_MESSAGE);
    expect(arrayToListOfWinnersMap(() => { })).toBe(ERR_MESSAGE);
  });
  it('should return message about empty array', () => {
    expect(arrayToListOfWinners([])).toBe(ERR_EMPTY);
    expect(arrayToListOfWinnersMap([])).toBe(ERR_EMPTY);
  });
});
