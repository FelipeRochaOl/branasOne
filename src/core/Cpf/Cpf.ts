export class Cpf {
  private readonly validatorFirstDigit = 11
  private readonly validatorSecondDigit = 12
  private calculateDigitOne = 0
  private calculateDigitTwo = 0
  private firstDigit = 0
  private secondDigit = 0
  private cpf: string

  constructor(cpf: string) {
    this.cpf = cpf
  }

  public getCpf(): string {
    return this.cpf
  }

  public validate(): boolean {
    try {
      this.cpf = this.cpf.replace(/\D/g, '')
      if (this.cpf.length !== 11) {
        throw new Error('CPF deve conter 11 dígitos')
      }
      if (this.isRepeatDigits()) {
        return false
      }
      this.calculateDigits()
      const lastTwoDigitsCPF = this.cpf.substring(
        this.cpf.length - 2,
        this.cpf.length
      )
      const resultCalcCPF = `${this.firstDigit}${this.secondDigit}`
      return lastTwoDigitsCPF === resultCalcCPF
    } catch (errors) {
      const error = errors as Error
      console.error(`Erro: ${error.message}`)
      return false
    }
  }

  private isRepeatDigits(): boolean {
    return this.cpf.split('').every((digit) => digit === this.cpf[0])
  }

  private calculateDigits(): void {
    this.calculateSumDigits()
    this.calculateDigitByValidator(this.validatorFirstDigit)
    this.calculateDigitByValidator(this.validatorSecondDigit)
  }

  private calculateSumDigits(): void {
    let positionCaracterCPF = 1
    const lengthCpf = this.cpf.length - 1
    while (positionCaracterCPF < lengthCpf) {
      const digit = this.getDigit(positionCaracterCPF)
      this.calculateSumDigitByPosition(
        this.validatorFirstDigit,
        positionCaracterCPF,
        digit
      )
      this.calculateSumDigitByPosition(
        this.validatorSecondDigit,
        positionCaracterCPF,
        digit
      )
      positionCaracterCPF++
    }
  }

  private getDigit(numCaracter: number): number {
    return parseInt(this.cpf.substring(numCaracter - 1, numCaracter))
  }

  private calculateSumDigitByPosition(
    validator: number,
    position: number,
    digit: number
  ): void {
    if (validator === this.validatorSecondDigit) {
      this.calculateDigitTwo += (validator - position) * digit
      return
    }
    this.calculateDigitOne += (validator - position) * digit
  }

  private calculateDigitByValidator(validator: number): void {
    if (validator === this.validatorFirstDigit) {
      const calc = this.calculateDigitOne % validator
      this.firstDigit = calc < 2 ? 0 : validator - calc
      this.calculateDigitTwo += this.firstDigit * 2
      return
    }
    const calc = this.calculateDigitTwo % this.validatorFirstDigit
    this.secondDigit = calc < 2 ? 0 : this.validatorFirstDigit - calc
  }
}
