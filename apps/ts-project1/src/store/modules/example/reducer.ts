import produce from 'immer';
import IActionReturns from '../../../interfaces/IActionReturns';
import { IPayloadExampleSum } from './action';

export default function example(
  state: Array<number> = [],
  action: IActionReturns<IPayloadExampleSum>
) {
  switch (action.type) {
    case '@example/sum':
      return produce(state, draft => {
        const { a, b } = action.values!;
        draft.push(a + b);
      });

    default:
      return state;
  }
}
