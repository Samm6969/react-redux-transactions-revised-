import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import "./index.css";
import FilterableTransactionTable from "./components/FilterableTransactionTable";
import registerServiceWorker from "./registerServiceWorker";
import TransactionDetail from './components/TransactionDetail';
import store from "./store";
import { Provider } from 'react-redux';


let render = () =>ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true}>
      <FilterableTransactionTable  /> 
      </Route>
     <Route path="/:id" component={TransactionDetail}/> 
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("container")
);
render();
registerServiceWorker();
