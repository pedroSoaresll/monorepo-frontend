import reducer from '../reducer';
import { sum } from '../action';

describe('Reducer Suite Tests', () => {
  test('@example/sum return own state', () => {
    const reduce = reducer([], {});
    expect(reduce).toEqual([]);
  });

  test('@example/sum return own state with same values', () => {
    const reduce = reducer([1, 2, 3], {});
    expect(reduce).toEqual([1, 2, 3]);
  });

  test('@example/sum modify state', () => {
    const newState = reducer([], sum(2, 2));
    expect(newState).toEqual([4]);
  });
});
