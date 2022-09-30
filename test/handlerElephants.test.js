const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Checks number of elephantes at zoo', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  test('Checks if exist an elephant called by some name', () => {
    expect(handlerElephants('names')).toContain('Orval');
  });

  test('Checks whats elephantes avarage age', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  test('If havent arguments return undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  test('Checks if you set a non existent argument and should return null', () => {
    expect(handlerElephants('Yoga')).toBe(null);
  });
  test('Check if the argument was a string', () => {
    expect(handlerElephants(312)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Check if handlerElephants ia a function', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  test('Check where is elephants cage', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('Check elephants popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('Check which days of the week you can visit elephants', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
