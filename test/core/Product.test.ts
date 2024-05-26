import { Product } from '@core/Product/Product'
import { describe, expect, it } from '@jest/globals'

describe('Teste Product', () => {
  it('Deve criar um produto com descrição, preço e quantidade', () => {
    const product = new Product({
      description: 'Product 1',
      price: 100,
      quantity: 1,
      id: '1'
    })
    expect(product.getDescription()).toBe('Product 1')
    expect(product.getPrice()).toBe(100)
    expect(product.getQuantity()).toBe(1)
    expect(product.getId()).toBe('1')
  })
  it('Deve criar um produto com descrição, preço, quantidade e desconto', () => {
    const product = new Product({
      description: 'Product 1',
      price: 100,
      quantity: 1,
      id: '1'
    })
    product.setDiscount(10)
    expect(product.getPrice()).toBe(90)
  })
})
