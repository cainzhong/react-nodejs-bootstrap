import React, {Component} from 'react';
import {BarChart} from 'react-d3-components';

export default class StackedBarChart extends Component {

  render() {
    let data = [
      {
        label: 'somethingA',
        values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
      },
      {
        label: 'somethingB',
        values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
      },
      {
        label: 'somethingC',
        values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
      }
    ];
    return (
      <BarChart
        data={data}
        width={400}
        height={400}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
    );
  }
}
