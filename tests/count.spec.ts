import nounmeral from '..';

test('Can count regular nouns', () => {
  expect(nounmeral(-1, 'cat')).toBe('-1 cats');
  expect(nounmeral(0, 'cat')).toBe('0 cats');
  expect(nounmeral(1, 'cat')).toBe('1 cat');
  expect(nounmeral(2, 'cat')).toBe('2 cats');
});

test('Can count irregular nouns', () => {
  expect(nounmeral(-1, 'mouse', 'mice')).toBe('-1 mice');
  expect(nounmeral(0, 'mouse', 'mice')).toBe('0 mice');
  expect(nounmeral(1, 'mouse', 'mice')).toBe('1 mouse');
  expect(nounmeral(2, 'mouse', 'mice')).toBe('2 mice');
});
