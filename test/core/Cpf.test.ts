import { Cpf } from '@core/Cpf/Cpf'
import { describe, expect, it, jest } from '@jest/globals'

describe('Teste CPF', () => {
  it('Deve criar um CPF com valor válido', () => {
    const cpfValidator = new Cpf('79520556079').validate()
    expect(cpfValidator).toBeTruthy()
    const cpfValidator2 = new Cpf('795.205.560-79').validate()
    expect(cpfValidator2).toBeTruthy()
    const cpfValidator3 = new Cpf('52149650010').validate()
    expect(cpfValidator3).toBeTruthy()
  })
  it('Não deve criar um CPF com valor inválido', () => {
    const consoleSpy = jest.spyOn(console, 'error')
    const cpfValidator = new Cpf('533788470').validate()
    expect(consoleSpy).toHaveBeenCalledWith('Erro: CPF deve conter 11 dígitos')
    expect(cpfValidator).toBeFalsy()
  })
  it.each([
    '111.111.111-11',
    '222.222.222-22',
    '333.333.333-33',
    '444.444.444-44',
    '555.555.555-55',
    '666.666.666-66',
    '777.777.777-77',
    '888.888.888-88',
    '999.999.999-99'
  ])('Não deve criar um CPF com valores repetidos %s', (cpf) => {
    const cpfValidator = new Cpf(cpf).validate()
    expect(cpfValidator).toBeFalsy()
  })
})
