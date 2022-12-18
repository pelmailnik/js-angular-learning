import { ERR_MESSAGE } from '../js-tasks/utills';
import {
  getArrayNonUnicSymbols,
  getArrayUnicSymbols,
  getArraySortAlphabetical,
} from '../js-tasks/play-with-str-symbols';

describe('play-with-array-symbols', () => {
  it('should return unic symbols', () => {
    const str = 'laqwerla';
    expect(getArrayUnicSymbols(str)).toBe('qwer');
  });
  it('should return non-unic symbols', () => {
    const str = 'laqwerla';
    expect(getArrayNonUnicSymbols(str)).toBe('la');
  });
  it('should return symbols in alphabetical order', () => {
    const str = 'laqwerla';
    expect(getArraySortAlphabetical(str)).toBe('aaellqrw');
  });
});

describe('play-with-array-symbols-custom', () => {
  it('should return unic symbols', () => {
    expect(getArrayUnicSymbols('laplandia')).toBe('pndi');
    expect(getArrayUnicSymbols('эйяфьядлайёкюдль')).toBe('эфаёкю');
    expect(getArrayUnicSymbols('1f 2б33')).toBe('1f2б');
    expect(getArrayUnicSymbols('')).toBe('');
    expect(getArrayUnicSymbols(' ')).toBe('');
  });
  it('should return non-unic symbols', () => {
    expect(getArrayNonUnicSymbols('laplandia')).toBe('la');
    expect(getArrayNonUnicSymbols('эйяфьядлайёкюдль')).toBe('йяьдл');
    expect(getArrayNonUnicSymbols('1f 2ф33')).toBe('3');
    expect(getArrayNonUnicSymbols('')).toBe('');
    expect(getArrayNonUnicSymbols(' ')).toBe('');
  });
  it('should return symbols in alphabetical order', () => {
    expect(getArraySortAlphabetical('laplandia')).toBe('aaadillnp');
    expect(getArraySortAlphabetical('эйяфьядлайёкюдль')).toBe('аддййкллфььэюяяё');
    expect(getArraySortAlphabetical('1f 2ф33')).toBe('1233fф');
    expect(getArraySortAlphabetical('')).toBe('');
    expect(getArraySortAlphabetical(' ')).toBe('');
  });
});

describe('play-with-array-symbols-invalid', () => {
  it('should`t return unic symbols', () => {
    expect(getArrayUnicSymbols([])).toBe(ERR_MESSAGE);
    expect(getArrayUnicSymbols(null)).toBe(ERR_MESSAGE);
  });
  it('shouldn`t return non-unic symbols', () => {
    expect(getArrayNonUnicSymbols({})).toBe(ERR_MESSAGE);
    expect(getArrayNonUnicSymbols(true)).toBe(ERR_MESSAGE);
  });
  it('shouldn`t return symbols in alphabetical order', () => {
    expect(getArraySortAlphabetical(undefined)).toBe(ERR_MESSAGE);
    expect(getArraySortAlphabetical(() => {})).toBe(ERR_MESSAGE);
  });
});
