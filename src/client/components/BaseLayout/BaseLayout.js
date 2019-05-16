import React, {Component} from 'react';
import SideNavigation from "../SideNavigation/SideNavigation";

export default class BaseLayout extends Component {

  render() {
    return (
      <SideNavigation history={this.props.history}/>
    );
  }
}
