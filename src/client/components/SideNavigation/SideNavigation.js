import React from 'react';
import {Dropdown, Icon, Nav, Sidenav, Toggle} from 'rsuite';
import './SideNavigation.css';
import './rsuite-icon-font.css';

export default class SideNavigation extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: 'hello',
      barWidth: 250
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleToggle() {
    this.setState({
      expanded: !this.state.expanded,
      barWidth: this.state.expanded ? 50 : 250
    });
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
    console.log("Navigating to page => ", eventKey);
    this.props.history.push(eventKey);
  }

  render() {
    const {expanded} = this.state;

    return (
      <div style={{width: this.state.barWidth, float: 'left'}}>
        <Toggle onChange={this.handleToggle} checked={expanded}/>
        <hr/>
        <Sidenav appearance="inverse" expanded={expanded} defaultOpenKeys={['3', '4']} activeKey={this.state.activeKey}
                 onSelect={this.handleSelect}>
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="hello" icon={<Icon icon="dashboard"/>}>Dashboard</Nav.Item>
              <Nav.Item eventKey="2" icon={<Icon icon="group"/>}>User Group</Nav.Item>
              <Dropdown placement="rightTop" eventKey="3" title="Chart" icon={<Icon icon="magic"/>}>
                <Dropdown.Item eventKey="linechart">Line Chart</Dropdown.Item>
                <Dropdown.Item eventKey="stackedbarchart">Stacked Bar Chart</Dropdown.Item>
                <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
              </Dropdown>
              <Dropdown placement="rightTop" eventKey="4" title="Settings" icon={<Icon icon="gear-circle"/>}>
                <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                <Dropdown.Menu eventKey="4-5" title="Custom Action">
                  <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );
  }
}
