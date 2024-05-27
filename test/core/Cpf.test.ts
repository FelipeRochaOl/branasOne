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
  it('Deve criar um CPF com valor inválido', () => {
    const consoleSpy = jest.spyOn(console, 'error')
    const cpfValidator = new Cpf('533788470').validate()
    expect(consoleSpy).toHaveBeenCalledWith('Erro: CPF deve conter 11 dígitos')
    expect(cpfValidator).toBeFalsy()
  })
})
