import { Cpf } from '@core/Cpf/Cpf'
import { Cupom } from '@core/Cupom/Cupom'
import { Order } from '@core/Order/Order'
import { Product } from '@core/Product/Product'
import { describe, expect, it } from '@jest/globals'

describe('Teste MAIN', () => {
  it('Deve criar um pedido com 3 produtos (com descrição, preço e quantidade) e calcular o valor total', () => {
    const order = new Order({ id: 1, cpf: new Cpf('79520556079') })
    const product1 = new Product({
      description: 'Product 1',
      price: 100,
      quantity: 1,
      id: '1'
    })
    const product2 = new Product({
      description: 'Product 2',
      price: 100,
      quantity: 1,
      id: '2'
    })
    const product3 = new Product({
      description: 'Product 3',
      price: 100,
      quantity: 1,
      id: '3'
    })
    order.addProduct(product1)
    order.addProduct(product2)
    order.addProduct(product3)
    const total = order.getCalculate().getTotal()
    for (const product of order.getProducts()) {
      expect(product.getDescription()).not.toBeUndefined()
      expect(product.getPrice()).not.toBeUndefined()
      expect(product.getQuantity()).not.toBeUndefined()
    }
    expect(order.getProducts().size).toBe(3)
    expect(total).toBe(300)
  })
  it(`Deve criar um pedido com 3 produtos, associar um cupom de desconto e calcular o total (percentual sobre 
    o total do pedido)`, () => {
    const order = new Order({ id: 1, cpf: new Cpf('79520556079') })
    const product1 = new Product({
      description: 'Product 1',
      price: 100,
      quantity: 1,
      id: '1'
    })
    const product2 = new Product({
      description: 'Product 2',
      price: 100,
      quantity: 1,
      id: '2'
    })
    const product3 = new Product({
      description: 'Product 3',
      price: 100,
      quantity: 1,
      id: '3'
    })
    order.addProduct(product1)
    order.addProduct(product2)
    order.addProduct(product3)
    const cupom = new Cupom({
      code: 'DESC10',
      percentDiscount: 10,
      description: 'Desconto de 10%'
    })
    order.setCupom(cupom)
    const total = order.getCalculate().getCalculateCupom().getTotal()
    expect(total).toBe(270)
  })
  it('Não deve criar um pedido com cpf inválido (lançar algum tipo de erro)', () => {
    expect(() => new Order({ id: 1, cpf: new Cpf('12345678900') })).toThrow(
      'CPF inválido'
    )
  })
})
