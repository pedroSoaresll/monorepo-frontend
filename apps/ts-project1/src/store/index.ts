import { createStore } from 'redux';
import { ExamplesState } from './ducks/example/types'
import { RepositoriesState } from './ducks/repositories/types'
import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  examples: ExamplesState
  repositories: RepositoriesState
}

export default createStore(rootReducer);
