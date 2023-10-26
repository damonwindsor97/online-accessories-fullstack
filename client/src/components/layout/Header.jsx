import * as styles from './Header.css';
import logoImg from '../../assets/images/oa-logo.png'

import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { BsFillCartPlusFill } from 'react-icons/bs';

import OaButton from '../common/OaButton';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth()
  return (
    <Navbar className={styles.navbar} variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className={styles.brandLink} as={Link} to='/'>
          <img className={styles.logo} src={logoImg} alt="timbertop united logo" />
          <div className={styles.logoTextBox}>
            <span className={styles.brand}>Online Accessories</span>
            <span className={styles.brandSub}>Soft and Hardware</span>
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
            {user && <Nav.Link className={styles.navLink} as={Link} to='/dashboard'>Dashboard</Nav.Link>}
            {user && <Button variant="danger" onClick={() => logout()}>Logout</Button>}
            {user && <Button variant="info"><BsFillCartPlusFill/></Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
