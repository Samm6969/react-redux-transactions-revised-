import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from "../reducer";

const initialState = {
  allTransactions:[],
  currentTransaction:[],
  filter: {
    account: [],
    transactionType: []
  },
  pagination: {
    currentPage: 1,
    totalPages: null,
    pageLimit: 10,
    totalRecords: null
  }
};

const middleware = [thunk];
const store = createStore(reducer,
    initialState,
    compose(
    applyMiddleware(...middleware),
    )
);
export default store;
