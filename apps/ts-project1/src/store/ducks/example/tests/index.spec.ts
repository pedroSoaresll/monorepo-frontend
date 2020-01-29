import reducer from '..';
import { ExamplesTypes, ExamplesState } from '../types'

describe('Reducer Suite Tests', () => {
  test(`${ExamplesTypes.SUM_REQUEST} return default state`, () => {
    const newState = reducer(undefined, {type: null});

    expect(newState).toEqual({ data: [] });
  });

  test(`${ExamplesTypes.SUM_REQUEST} return own state`, () => {
    const initialState: ExamplesState = { data: [] };
    const action = { type: null }
    const newState = reducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  test(`${ExamplesTypes.SUM_REQUEST} return own state with same values`, () => {
    const initialState: ExamplesState = { data: [1, 2, 3] };
    const action = { type: null }
    const newState = reducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  test(`${ExamplesTypes.SUM_REQUEST} modify state`, () => {
    const initialState: ExamplesState = { data: [] };
    const action = {
      type: ExamplesTypes.SUM_REQUEST,
      values: {
        a: 2,
        b: 2
      }
    }

    const newState = reducer(initialState, action);
    expect(newState).toEqual({
      data: [4]
    });
  });
});
