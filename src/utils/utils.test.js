import { generateStringDate } from './utils';

describe('generateStringDate', () => {
  it('should return a correctly formatted date', () => {
    const fecha = '2022-12-09T06:34:25.607Z';
    const resultado = generateStringDate(fecha);
    expect(resultado).toBe('9 de diciembre de 2022');
  });
});