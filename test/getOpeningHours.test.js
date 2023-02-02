const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Deve retornar a mensagem de erro para duas strings passadas no parametro', () => {
    expect(() => getOpeningHours('Monday', '7PM')).toThrow('The hour should represent a number');
  });

  it('Deve retornar todos os horarios quando nao passado parametros ', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Deve retornar a mensagem de erro para um parametro que nao é dia valido', () => {
    expect(() => getOpeningHours('Monda', 7)).toThrow('The day must be valid. Example: Monday');
  });

  it('Deve retornar se o zologico esta aberto ou nao', () => {
    expect(getOpeningHours('Monday', '11:40-AM')).toBe('The zoo is closed');
  });

  it('Deve retornar se o zologico esta fechado ou nao', () => {
    expect(getOpeningHours('Monday', '0:40-PM')).toBe('The zoo is closed');
  });

  it('Deve retornar se o zologico esta aberto ou nao', () => {
    expect(getOpeningHours('Tuesday', '12:40-PM')).toBe('The zoo is open');
  });

  it('Deve retornar a mensagem de erro para uma abreviação errada', () => {
    expect(() => getOpeningHours('Tuesday', '12:40-BM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Deve retornar a mensagem de erro para uma hora que nao esteja entre 0 e 12', () => {
    expect(() => getOpeningHours('Tuesday', '13:40-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('Deve retornar a mensagem de erro para os minutos que nao estejam entre 0 e 59', () => {
    expect(() => getOpeningHours('Tuesday', '12:60-PM')).toThrow('The minutes must be between 0 and 59');
  });
});
