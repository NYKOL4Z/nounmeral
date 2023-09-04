import nounmeral from '../lib/index.js';

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

test('Can count semi-regular nouns', () => {
  expect(nounmeral(-1, 'fox/es')).toBe('-1 foxes');
  expect(nounmeral(0, 'fox/es')).toBe('0 foxes');
  expect(nounmeral(1, 'fox/es')).toBe('1 fox');
  expect(nounmeral(2, 'fox/es')).toBe('2 foxes');
});
