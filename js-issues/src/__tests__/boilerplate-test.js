import boilerPlateFunc from '../js-tasks/boilerplate';

describe('boilerplate', () => {
  it('should return input parameter', () => {
    const newVal = boilerPlateFunc(5);
    expect(newVal).toBe(5);
  });
});
