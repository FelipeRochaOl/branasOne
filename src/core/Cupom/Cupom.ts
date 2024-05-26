import { type ICupomParams } from './ICupomParams'

export class Cupom {
  private code!: string
  private percentDiscount!: number
  private description!: string

  constructor({ description, code, percentDiscount }: ICupomParams) {
    this.setCode(code)
    this.setPercentDiscount(percentDiscount)
    this.setDescription(description)
  }

  public getCode(): string {
    return this.code
  }

  public getPercentDiscount(): number {
    return this.percentDiscount
  }

  public getDescription(): string {
    return this.description
  }

  public setCode(code: string): void {
    this.code = code
  }

  public setPercentDiscount(percentDiscount: number): void {
    this.percentDiscount = percentDiscount / 100
  }

  public setDescription(description: string): void {
    this.description = description
  }
}
