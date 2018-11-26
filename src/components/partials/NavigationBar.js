import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="#">Tasks</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default NavigationBar;
