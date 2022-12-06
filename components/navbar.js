/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Abril_Fatface } from '@next/font/google'
import { Poppins } from '@next/font/google'
import { useState } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const abril_fatface = Abril_Fatface({ weight: ['400'], subsets: ['latin'] })
const poppins = Poppins({ weight: ['400'], subsets: ['latin'] })



export const Navbar = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
      <>
        <nav className={`flex items-center flex-wrap ${styles.navbar}`}>
          <Link style={{color: 'inherit', textDecoration: 'inherit'}} href='/' className='inline-flex items-center p-2 mr-4 '>
              <span className={`${abril_fatface.className} ${styles.logo}`}>
                ROMA INVICTA
              </span>
          </Link>

          <Link style={{color: 'inherit', textDecoration: 'inherit'}} href='/' className={`${poppins.className} ${styles.commentButton}`}>
              Make Comment &nbsp;
          </Link>

        <Dropdown cssModule={styles} color="primary" isOpen={dropdownOpen} toggle={toggle} direction={direction} className={`${poppins.className} ${styles.forumDropdown}`}>
            <DropdownToggle color="yellow" caret>Dropdown</DropdownToggle>
            <DropdownMenu {...args}>
                <DropdownItem>Chatroom</DropdownItem>
                <DropdownItem>Announcements</DropdownItem>
                <DropdownItem>Volunteer Board</DropdownItem>
                <DropdownItem>Activities Board</DropdownItem>
            </DropdownMenu>
        </Dropdown>

          

          <Button style={{color: 'inherit', textDecoration: 'inherit'}} href='/' className={`${poppins.className} ${styles.signOutButton}`}>
              Sign Out
          </Button>
        </nav>      
      </>
    );
  };
