import { Cpf } from '@core/Cpf/Cpf'
import { Order } from '@core/Order/Order'
import { Product } from '@core/Product/Product'
import { describe, expect, it } from '@jest/globals'

describe('Teste Order', () => {
  it('Deve criar um pedido com 1 produto e CPF válido', () => {
    const order = new Order({ id: 1, cpf: new Cpf('52149650010') })
    const product = new Product({
      description: 'Product 1',
      price: 100,
      quantity: 1,
      id: '1'
    })
    order.addProduct(product)
    expect(order.getId()).toBe(1)
    expect(order.getCpf()).toBe('52149650010')
  })
  it('Não deve criar um pedido com 1 produto e CPF inválido', () => {
    expect(
      () => new Order({ id: 1, cpf: new Cpf('52149650011') })
    ).toThrowError('CPF inválido')
  })
  it('Deve criar um pedido com 3 produto e remover um produto', () => {
    const order = new Order({ id: 1, cpf: new Cpf('52149650010') })
    const product = new Product({
      description: 'Product 1',
      price: 100,
      quantity: 1,
      id: '1'
    })
    const product2 = new Product({
      description: 'Product 1',
      price: 100,
      quantity: 1,
      id: '1'
    })
    const product3 = new Product({
      description: 'Product 1',
      price: 100,
      quantity: 1,
      id: '1'
    })
    order.addProduct(product)
    order.addProduct(product2)
    order.addProduct(product3)
    expect(order.getProducts().size).toBe(3)
    order.removeProduct(product)
    expect(order.getProducts().size).toBe(2)
  })
})
