import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { ExamplesState } from './ducks/example/types'
import { RepositoriesState } from './ducks/repositories/types'
import rootReducer from './ducks/rootReducer';

import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  examples: ExamplesState
  repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
