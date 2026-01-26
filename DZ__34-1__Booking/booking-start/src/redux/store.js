import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import rootSaga from './rootSaga';
import hotelsReducer from './hotels/slice';


export const sagaMiddleware = createSagaMiddleware();

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

export const store = configureStore({
  reducer: {
    router: routerReducer,
    hotels: hotelsReducer,
    
  },
  middleware: (getDefaultMiddleware) => [
    //...getDefaultMiddleware({ thunk: false }),
    ...getDefaultMiddleware(),
    sagaMiddleware,
    routerMiddleware,
  ],
});

export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);
