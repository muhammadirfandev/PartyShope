import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const Navbar = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav tabs>
      <NavItem>
        <NavLink href="#" active>
          PartyShope
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Categories
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
            <a href="#" className={styles.link} active>
              <FontAwesomeIcon icon={faAngleRight} className={styles.arrow} /> Birthday Decorations
            </a>
          </DropdownItem>
          <DropdownItem header>
            <a href="#" className={styles.link} active>
              <FontAwesomeIcon icon={faAngleRight} className={styles.arrow} /> Anniversary Decorations
            </a>
          </DropdownItem>
          <DropdownItem header>
            <a href="#" className={styles.link} active>
              <FontAwesomeIcon icon={faAngleRight} className={styles.arrow} /> Special Event
            </a>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
          <a href="#"  header=''>View All</a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href="#">Contact</NavLink>
      </NavItem>
    </Nav>
  );
};


