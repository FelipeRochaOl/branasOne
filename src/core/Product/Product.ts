import { type IProductParams } from './IProduct'

export class Product {
  private id!: string
  private quantity!: number
  private price!: number
  private description!: string

  constructor({ description, id, price, quantity }: IProductParams) {
    this.setId(id)
    this.setQuantity(quantity)
    this.setPrice(price)
    this.setDescription(description)
  }

  public getId(): string {
    return this.id
  }

  public getQuantity(): number {
    return this.quantity
  }

  public getPrice(): number {
    return this.price
  }

  public getDescription(): string {
    return this.description
  }

  public setId(id: string): void {
    this.id = id
  }

  public setQuantity(quantity: number): void {
    this.quantity = quantity
  }

  public setPrice(price: number): void {
    this.price = price
  }

  public setDescription(description: string): void {
    this.description = description
  }

  public setDiscount(discount: number): void {
    this.price = this.price - discount
  }

  public getTotal(): number {
    return this.price * this.quantity
  }
}
