import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="base">
          <header>
            <p>React Router v4 Browser Example</p>
            <nav>
              <ul>
                <li><Link to="/hello">Hello</Link></li>
                <li><Link to="/stackedbarchart">StackedBarChart</Link></li>
                <li><Link to="/linechart">LineChart</Link></li>
              </ul>
            </nav>
          </header>
          <footer>
            React Router v4 Browser Example (c) 2017
          </footer>
        </div>
      </div>
    );
  }
}
