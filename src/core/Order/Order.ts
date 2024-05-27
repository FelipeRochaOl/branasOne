import { type Cpf } from '@core/Cpf/Cpf'
import { type Cupom } from '@core/Cupom/Cupom'
import { type Product } from '@core/Product/Product'
import { type IOrderParams } from './IOrder'

export class Order {
  private id!: number
  private cpf!: string
  private total: number
  private readonly products: Set<Product>
  private cupom?: Cupom

  constructor({ id, cpf }: IOrderParams) {
    this.setId(id)
    this.setCpf(cpf)
    this.total = 0
    this.products = new Set()
  }

  public getId(): number {
    return this.id
  }

  public getCpf(): string {
    return this.cpf
  }

  public getProducts(): Set<Product> {
    return this.products
  }

  public setId(id: number): void {
    this.id = id
  }

  private setCpf(cpf: Cpf): void {
    if (!cpf.validate()) {
      throw new Error('CPF inválido')
    }
    this.cpf = cpf.getCpf()
  }

  public addProduct(product: Product): void {
    this.products.add(product)
  }

  public removeProduct(product: Product): void {
    const exist = this.products.has(product)
    if (exist) {
      this.products.delete(product)
    }
  }

  public setCupom(cupom: Cupom): void {
    this.cupom = cupom
  }

  public getCalculate(): this {
    this.products.forEach((product) => {
      this.total += product.getTotal()
    })
    return this
  }

  public getCalculateCupom(): this {
    if (this.cupom !== undefined) {
      this.total -= this.total * this.cupom.getPercentDiscount()
    }
    return this
  }

  public getTotal(): number {
    return this.total
  }
}
