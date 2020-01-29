import { sum } from '../actions'
import { ExamplesTypes } from '../types';

describe('Example action suite test', () => {
  test('sum should be defined', () => {
    expect(sum).toBeDefined();
  })

  test('sum returns', () => {
    const sumResult = sum(1, 2);

    expect(sumResult).toEqual({
      type: ExamplesTypes.SUM_REQUEST,
      payload: {
        a: 1,
        b: 2
      }
    })
  })
})
