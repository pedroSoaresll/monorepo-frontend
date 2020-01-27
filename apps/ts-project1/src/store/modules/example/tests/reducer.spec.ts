import reducer from '../reducer';
import { sum } from '../action';

describe('Reducer Suite Tests', () => {
  test('@example/sum return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual([]);
  });

  test('@example/sum return own state', () => {
    const newState = reducer([], {});
    expect(newState).toEqual([]);
  });

  test('@example/sum return own state with same values', () => {
    const newState = reducer([1, 2, 3], {});
    expect(newState).toEqual([1, 2, 3]);
  });

  test('@example/sum modify state', () => {
    const newState = reducer([], sum(2, 2));
    expect(newState).toEqual([4]);
  });
});
