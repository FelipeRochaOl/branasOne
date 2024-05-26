import { Cpf } from '@core/Cpf/Cpf'
import { describe, expect, it, jest } from '@jest/globals'

describe('Teste CPF', () => {
  it('Deve criar um CPF com valor válido', () => {
    const cpfValidator = new Cpf('07956426600').validate()
    expect(cpfValidator).toBeTruthy()
    const cpfValidator2 = new Cpf('079.564.266-00').validate()
    expect(cpfValidator2).toBeTruthy()
    const cpfValidator4 = new Cpf('01227908636').validate()
    expect(cpfValidator4).toBeTruthy()
  })
  it('Deve criar um CPF com valor inválido', () => {
    const consoleSpy = jest.spyOn(console, 'error')
    const cpfValidator = new Cpf('079564266').validate()
    expect(consoleSpy).toHaveBeenCalledWith('Erro: CPF deve conter 11 dígitos')
    expect(cpfValidator).toBeFalsy()
  })
  it('Não deve receber um CPF com valor inválido', () => {
    const consoleSpy = jest.spyOn(console, 'error')
    expect(() => new Cpf('07956426601').getCpf()).toThrowError('CPF inválido')
    expect(consoleSpy).toHaveBeenCalledWith('Erro: CPF inválido')
  })
})
