const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Return object if dont set a argument', () => {
    const object = {
      tuesday: { open: 8, close: 6 },
      wednesday: { open: 8, close: 6 },
      thursday: { open: 10, close: 8 },
      friday: { open: 10, close: 8 },
      saturday: { open: 8, close: 10 },
      sunday: { open: 8, close: 8 },
      monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(object);
  });
  test('Argument Monday, 09:00-AM should return a string', () => {
    const string = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(string);
  });
  test('Argument Tuesday, 09:00-AM should return a string', () => {
    const string = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(string);
  });
  test('Argument Wednesday, 09:00-PM should return a string', () => {
    const string = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(string);
  });
  test('If argument isnt valid day should return a string', () => {
    const string = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Sexta', '09:00-AM')).toThrowError(new Error(string));
  });
  test('If argument isnt valid abbreviation should return a string', () => {
    const string = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '09:00-LM')).toThrowError(new Error(string));
  });
  test('If hour isnt valid should return a string', () => {
    const string = 'The hour should represent a number';
    expect(() => getOpeningHours('Saturday', 'O9:00-AM')).toThrowError(new Error(string));
  });
  test('If minutes isnt valid should return a string', () => {
    const string = 'The minutes should represent a number';
    expect(() => getOpeningHours('Sunday', '09:OO-AM')).toThrowError(new Error(string));
  });
  test('If argument isnt valid should return a string', () => {
    const string = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError(new Error(string));
  });
  test('If argument isnt valid should return a string', () => {
    const string = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError(new Error(string));
  });
});
