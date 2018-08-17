import {
  GET_ALL_TRANSACTION,
  FILTER_TRANSACTION,
  SELECT_TRANSACTION,
  GOTO_PAGE
} from "./types";
import data from "../data.json";
import store from "../store";

export const fetchTransaction = () => {
  store.dispatch({
    type: GET_ALL_TRANSACTION,
    payload: data.transactions
  });
};

export const filterTransaction = param => dispatch => {
  dispatch({
    type: FILTER_TRANSACTION,
    payload: param
  });
};

export const gotoPage = param => {
  store.dispatch({
    type: GOTO_PAGE,
    payload: param
  });
};

export const selectTransaction = param => dispatch => {
  store.dispatch({
    type: SELECT_TRANSACTION,
    payload: param
  });
};
