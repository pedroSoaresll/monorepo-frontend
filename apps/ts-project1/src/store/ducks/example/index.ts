import produce from 'immer';
import { Reducer } from 'redux';
import { ExamplesState, ExamplesTypes } from './types';

const INITIAL_STATE: ExamplesState = {
  data: []
}

const reducer: Reducer<ExamplesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExamplesTypes.SUM_REQUEST:
      return produce(state, draft => {
        const { a, b } = action.payload;
        draft.data.push(a + b);
      });

    default:
      return state;
  }
}

export default reducer;
