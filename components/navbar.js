/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Abril_Fatface } from '@next/font/google'
import { Poppins } from '@next/font/google'
import { useState } from 'react';
import { Button, Dropdown } from 'reactstrap';
import { DropdownToggle, DropdownMenu, DropdownItem, Navbar as BootstrapNavbar, Nav, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const abril_fatface = Abril_Fatface({ weight: ['400'], subsets: ['latin'] })
const poppins = Poppins({ weight: ['400'], subsets: ['latin'] })

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <BootstrapNavbar className={`flex items-center flex-wrap ${styles.navbar}`}>
      <Link style={{color: 'inherit', textDecoration: 'inherit'}} href='/' className='inline-flex items-center p-2 mr-4 '>
          <span className={`${abril_fatface.className} ${styles.logo}`}>
            ROMA INVICTA
          </span>
      </Link>
      <Nav style={{ gap: '40px', justifyContent: 'center', alignItems: 'center' }}>

        <NavItem>
          <Link style={{color: 'inherit', textDecoration: 'inherit'}} href='/' className={`${poppins.className} ${styles.commentButton}`}>
              Make Comment &nbsp;
          </Link>
        </NavItem>

        <NavItem>
          <Dropdown isOpen={dropdownOpen} toggle={toggle} direction='down'>
            <DropdownToggle className={`${poppins.className} ${styles.forumDropdownToggle}`} 
              tag='div'
              caret
            >Forum</DropdownToggle>
            <DropdownMenu>
              <DropdownItem >Chatroom</DropdownItem>
              <DropdownItem >Announcements</DropdownItem>
              <DropdownItem >Volunteer Board</DropdownItem>
              <DropdownItem >Activities Board</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>

        <NavItem>
          <Button href='/' className={`${poppins.className} ${styles.signOutButton}`}>
              Sign Out
          </Button>
        </NavItem>
      </Nav>
    </BootstrapNavbar>      
  );
};
