const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('Verifica se nao for passado parametro é retornado undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Verifica se handlerElephants é uma função', () => {
    expect(handlerElephants(!String)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Verifica se o numero de elefantes residentes é 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica se retorna um array com o nome dos elefantes residentes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Verifica se retorna a media de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Verifica se retorna null para outros parametros', () => {
    expect(handlerElephants('Age')).toBe(null);
  });

  it('Verifica se retorna a popularidade correta', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
