import React, {Component} from 'react';
import {Route, Router} from 'react-router-dom';
import App from "./App/App";
import StackedBarChart from "./StackedBarChart/StackedBarChart";
import MyLineChart from "./MyLineChart/MyLineChart";
import BaseLayout from "./BaseLayout/BaseLayout";
import {createBrowserHistory} from 'history'
import './main.css'

export default class Routes extends Component {
  render() {
    const history = createBrowserHistory();

    return (
      <Router history={history}>
        <div style={{width: '1600px'}}>
          <Route path="/" component={BaseLayout}/>
          <Route path="/hello" component={App}/>
          <Route path="/stackedbarchart" component={StackedBarChart}/>
          <Route path="/linechart" component={MyLineChart}/>
        </div>
      </Router>
    );
  }
}
