import { Cpf } from '@core/Cpf/Cpf'
import { Cupom } from '@core/Cupom/Cupom'
import { Order } from '@core/Order/Order'
import { Product } from '@core/Product/Product'

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

const order = new Order({ id: 1, cpf: new Cpf('52149650010') })
const cupom = new Cupom({
  code: 'VALE20',
  percentDiscount: 20,
  description: 'Cupom de desconto de 20%'
})
order.addProduct(product1)
order.addProduct(product2)
order.addProduct(product3)
order.setCupom(cupom)
const total = order.getCalculate().getCalculateCupom().getTotal()
console.log(`Total de R$ ${total}`)
