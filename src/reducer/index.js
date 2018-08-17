import {
  GET_ALL_TRANSACTION,
  FILTER_TRANSACTION,
  SELECT_TRANSACTION,
  GOTO_PAGE
} from "../actions/types";
const initialState = {
  allTransactions:[],
  currentTransaction:[],
  selected_Transaction:{},
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

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTION:
      return {
        ...state,
        filteredTransactions: action.payload,
        allTransactions: action.payload,
        accountName: uniqueAccountNames(action.payload),
        transactionType: uniqueTransactionType(action.payload),
        currentTransactions: action.payload.slice(
          0,
          state.pagination.pageLimit
        ),
        pagination: {
          ...state.pagination,

          totalRecords: action.payload.length,
          totalPages: Math.ceil(
            state.pagination.totalRecords / state.pagination.pageLimit
          )
        }
      };
    case FILTER_TRANSACTION:

      toggleArrayItem(state.filter.account, action.payload);

      return {
        ...state,
        filteredTransactions: filterCountries(state),
        currentTransactions: filterCountries(state).slice(
          0,
          state.pagination.pageLimit
        ),
        pagination: {
          ...state.pagination,
          totalRecords: filterCountries(state).length,
          totalPages: Math.ceil(
            filterCountries(state).length / state.pagination.pageLimit
          ),
          currentPage: 1
        }
      };
    case GOTO_PAGE:
      const offset =
        (state.pagination.currentPage - 1) * state.pagination.pageLimit;
      const currentTransactions = state.filteredTransactions.slice(
        offset,
        offset + state.pagination.pageLimit
      );
      return {
        ...state,
        currentTransactions,
        pagination: {
          ...state.pagination,
          currentPage: Math.max(
            0,
            Math.min(action.payload, state.pagination.totalPages)
          )
        }
      };
    case SELECT_TRANSACTION:
    
      return {
        ...state,
        selected_Transaction: action.payload
      };
    default:
      return state;
  }
};

function uniqueAccountNames(paylods) {
  let isAccountName = [],
    accountName = {};
  paylods.forEach(res => {
    if (!accountName[res.accountName]) {
      accountName[res.accountName] = true;
      isAccountName.push({ name: res.accountName, isChecked: false });
    }
  });
  return isAccountName;
}

function filterCountries(payloads) {

  let transaction = payloads.transactionType.filter(trans => trans.isChecked);
  let accounts = payloads.accountName.filter(account => account.isChecked);
  let items = payloads.allTransactions;
  if (transaction.length) {
    items = items.filter(
      item =>
        transaction.find(trans => trans.name === item.transactionType)
          ? item
          : void 0
    );
  }
  if (accounts.length) {
    items = items.filter(
      item =>
        accounts.find(account => account.name === item.accountName)
          ? item
          : void 0
    );
  }
  return items;
}

function uniqueTransactionType(paylods) {
  let isTransactionType = [];
  let transactionType = {};
  paylods.forEach(res => {
    if (!transactionType[res.transactionType]) {
      transactionType[res.transactionType] = true;
      isTransactionType.push({ name: res.transactionType, isChecked: false });
    }
  });
  return isTransactionType;
}

function filterByTransaction(paylods) {
  let transaction = paylods.transactionType.filter(trans => trans.isChecked);
  let accounts = paylods.accountName.filter(account => account.isChecked);
  let items = paylods.items;
  // debugger;
  if (transaction.length) {
    items = items.filter(
      item =>
        transaction.find(trans => trans.name === item.transactionType)
          ? item
          : void 0
    );
  }
  if (accounts.length) {
    items = items.filter(
      item =>
        accounts.find(account => account.name === item.accountName)
          ? item
          : void 0
    );
  }
  return items;
}

function toggleArrayItem(a, v) {

  var i = a.indexOf(v);
  if (i === -1) a.push(v);
  else a.splice(i, 1);
}
export const selectTransaction=param =>dispatch=>{
  dispatch({
      type:SELECT_TRANSACTION,
      payload: param
  });
}