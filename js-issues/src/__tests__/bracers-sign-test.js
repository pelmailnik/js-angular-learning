import { ERR_MESSAGE } from '../js-tasks/utills';
import replaceCharsWithBracers from '../js-tasks/bracers-sign';

describe('replace-chars-with-bracers', () => {
  it('should return string of bracers', () => {
    expect(replaceCharsWithBracers('din')).toBe('{{{');
    expect(replaceCharsWithBracers('recede')).toBe('{}{}{}');
    expect(replaceCharsWithBracers('Success')).toBe('}{}}{}}');
    expect(replaceCharsWithBracers('(( @')).toBe('}}{{');
  });
});

describe('replace-chars-with-bracers-custom', () => {
  it('should return string of bracers', () => {
    expect(replaceCharsWithBracers('параллелограмм')).toBe('{}}}}}{}{{}}}}');
    expect(replaceCharsWithBracers('{255 px}')).toBe('{{}}{{{{');
    expect(replaceCharsWithBracers('ConcaTenation')).toBe('}}}}}}{}}}{}}');
    expect(replaceCharsWithBracers(`123
      345`)).toBe('{{}{}}}}}}}{{');
  });
});

describe('replace-chars-with-bracers-invalid', () => {
  it('should return message about invalid data', () => {
    expect(replaceCharsWithBracers(123)).toBe(ERR_MESSAGE);
    expect(replaceCharsWithBracers({})).toBe(ERR_MESSAGE);
    expect(replaceCharsWithBracers([])).toBe(ERR_MESSAGE);
    expect(replaceCharsWithBracers(null)).toBe(ERR_MESSAGE);
    expect(replaceCharsWithBracers(() => {})).toBe(ERR_MESSAGE);
  });
});
