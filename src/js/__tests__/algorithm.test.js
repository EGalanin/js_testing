/**
 * @jest-environment jsdom
 */

import Algorithm from '../Algorithmm';

test('Контрольная цифра равна вычисленной цифре', () => {
  const algorithm = new Algorithm();
  const value = '4485504233686119';
  const expected = Number(value[value.length - 1]);
  const result = algorithm.calcCheckNum(value);
  expect(result).toBe(expected);
});
