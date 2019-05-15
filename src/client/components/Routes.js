import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from "./App/App";
import Home from "./Home/Home";
import StackedBarChart from "./StackedBarChart/StackedBarChart";
import MyLineChart from "./MyLineChart/MyLineChart";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home}/>
          <Route path="/hello" component={App}/>
          <Route path="/stackedbarchart" component={StackedBarChart}/>
          <Route path="/linechart" component={MyLineChart}/>
        </div>
      </BrowserRouter>
    );
  }
}
