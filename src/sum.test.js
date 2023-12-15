// app.test.js
const somar = require('./sum')

test('Deve somar dois números corretamente', () => {
  expect(somar(2, 3)).toBe(5)
})

test('Deve somar números negativos corretamente', () => {
  expect(somar(-2, -3)).toBe(-5)
})

test('Deve somar números mistos corretamente', () => {
  expect(somar(2, -3)).toBe(-1)
})

test('Deve somar números mistos corretamente', () => {
  expect(somar(2, -4)).toBe(-2)
})
