/* eslint-disable @typescript-eslint/ban-ts-comment */
import rootReducer, { rootSaga } from './rootReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });

  // @ts-ignore
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  // @ts-ignore
  store.close = () => store.dispatch(END);

  return store;
};

export default createStore;