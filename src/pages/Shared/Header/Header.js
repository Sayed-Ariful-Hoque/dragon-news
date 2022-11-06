import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Header.css'
import ToggleButton from './ToggleButton/ToggleButton';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><Link to='/' style={{}} className='never-nav '>
                    <span className='  text-3xl font-[Poppins] cursor-pointer '><img className='online-img' src='https://th.bing.com/th/id/OIP.I_aqpjC0DTJcPFvWDs1jbAAAAA?pid=ImgDet&rs=1' /></span>
                    Online learning Platform</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto online-m">
                        
                            <li><Link style={{textDecoration: 'none'}} to='/' className='me-4 fs-3'>Courses</Link></li>
                            <li><Link style={{textDecoration: 'none'}} to='/blog' className='me-4 fs-3'>Blog</Link></li>
                            <li><Link style={{textDecoration: 'none'}} to='/questions' className='me-4 fs-3'>Questions</Link></li>
                            <li><Link style={{textDecoration: 'none'}} to='/loginWithGoogle' className='me-4 fs-3'>Sign In</Link></li>
                            <li><ToggleButton></ToggleButton></li>

                            
        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span className='me-4 fs-3'> {user?.displayName}</span>
                                        <Button onClick={handleLogOut} className='me-4 fs-3'>Log out</Button>
                                    </>
                                    :
                                    <>
                                        
                                        <Link style={{textDecoration: 'none'}} to='/login' className='me-4 fs-3'>Login</Link>
                                        <Link style={{textDecoration: 'none'}} to='/register' className='me-4 fs-3'>Register</Link>
                                    </>
                            }

                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">

                            {user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL} ></Image>
                                : <FaUser className='me-4 fs-3'></FaUser>}


                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;