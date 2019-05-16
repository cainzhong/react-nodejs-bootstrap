import React, {Component} from 'react';
import {LineChart} from 'react-d3-components';

export default class MyLineChart extends Component {

  render() {
    var lineData = [
      {
        name: "series1",
        values: [{x: 0, y: 20}, {x: 5, y: 20}, {x: 24, y: 10}],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },
      {
        name: "series2",
        values:
          [{x: 3, y: 20}, {x: 7, y: 20}, {x: 14, y: 10}, {x: 70, y: 82}, {x: 76, y: 82}
          ]
      }
    ];

    var viewBoxObject = {
      x: 0,
      y: 0,
      width: 500,
      height: 400
    };

    return (
      <div className='main-block'>
        <LineChart
          legend={true}
          data={lineData}
          width={400}
          height={400}
          margin={{top: 10, bottom: 50, left: 50, right: 10}}
          viewBoxObject={viewBoxObject}
          title="Line Chart"
          xAxis={{innerTickSize: 6, label: "x-label"}}
          yAxis={{label: "y-label"}}
          shapeColor={"red"}
          gridHorizontal={true}
        />
      </div>
    );
  }
}
