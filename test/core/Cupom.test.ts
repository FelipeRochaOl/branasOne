import { Cupom } from '@core/Cupom/Cupom'
import { describe, expect, it } from '@jest/globals'

describe('Teste Cupom', () => {
  it('Deve criar um cupom com 10% de desconto e código CUPOM10', () => {
    const cupom = new Cupom({
      code: 'CUPOM10',
      percentDiscount: 10,
      description: 'Cupom de 10%'
    })
    expect(cupom.getCode()).toBe('CUPOM10')
    expect(cupom.getPercentDiscount()).toBe(0.1)
    expect(cupom.getDescription()).toBe('Cupom de 10%')
  })
})
