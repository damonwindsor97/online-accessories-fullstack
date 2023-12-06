import * as styles from './Header.css';
import {BsFillPersonVcardFill} from 'react-icons/Bs'
import {IoLogOut} from 'react-icons/io5'

import { Link } from 'react-router-dom';
import { Container, Navbar, Nav,  } from "react-bootstrap";
import { BsFillCartPlusFill } from 'react-icons/Bs';

import OaButton from '../common/OaButton';
import useAuth from '../../hooks/useAuth';



const Header = () => {
  const { user, logout } = useAuth()


  return (
    <Navbar className={styles.navbar} 
      variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className={styles.brandLink} as={Link} to='/'>
          <div className={styles.logoTextBox}>
            {/* <span className={styles.brand}>OA</span> */}
            <span className={styles.brandSub}>Online Accessories</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* STANDARD NAVLINKS */}
          <Nav className='me-auto'>
            <Nav.Link className={styles.navLink} as={Link} to='/store/products'>Products</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to='/support'>Support</Nav.Link>
          </Nav>
          {/* AUTH NAVLINKS */}
          <Nav>
            {/* Show if user is NOT logged in */}
            {!user && <Nav.Link className={styles.navLink} as={Link} to='/register'>register</Nav.Link>}
            {!user && <Nav.Link className={styles.navLink} as={Link} to='/login'>Login</Nav.Link>}
            {/* Show if user IS logged in */}
            {user && <Nav.Link className={styles.navLink} as={Link} to='/dashboard'>{user.username} <BsFillPersonVcardFill size="2em"/></Nav.Link>}
            {user && <Nav.Link className={styles.navLink} onClick={() => logout()}><IoLogOut size="2em" /></Nav.Link>}
            {user && <Nav.Link className={styles.navLink}><BsFillCartPlusFill  size="2em"/></Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
