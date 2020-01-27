import { sum } from '../action'

describe('Example action suite test', () => {
  test('sum should be defined', () => {
    expect(sum).toBeDefined();
  })

  test('sum returns', () => {
    const sumResult = sum(1, 2);
    expect(sumResult).toEqual({
      type: '@example/sum',
      values: {
        a: 1,
        b: 2
      }
    })
  })
})
