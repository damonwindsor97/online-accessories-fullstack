import * as styles from './Header.css';
import logoImg from '../../assets/images/oa-logo.png'

import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from "react-bootstrap";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { RiLoginCircleFill } from 'react-icons/ri';
import { BsPersonFillAdd } from 'react-icons/bs';

import OaButton from '../common/OaButton';

const Header = () => {
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
            <Nav.Link className={styles.navLink} as={Link} to='/about'>About</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to='/support'>Support</Nav.Link>
          </Nav>
          {/* AUTH NAVLINKS */}
          <Nav>
            <OaButton content="Login" linkTo="/login" icon={<RiLoginCircleFill/>}/>
            <OaButton content="Sign-up" linkTo="/signup" icon={<BsPersonFillAdd/>}/>
            <OaButton content="Cart" linkTo="/cart" icon={<BsFillCartPlusFill/>}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
