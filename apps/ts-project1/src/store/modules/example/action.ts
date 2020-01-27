import IActionReturns from '@interfaces/IActionReturns'

export interface IPayloadExampleSum {
  a: number,
  b: number
}

export function sum(a: number, b: number): IActionReturns<IPayloadExampleSum> {
  return {
    type: '@example/sum',
    values: {
      a,
      b
    }
  }
}
