import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import './RightSideNav.css'


const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error =>console.error(error))

    }

    return (
        <div className=' google-login text-center'>
            <ButtonGroup vertical className=''>
                <Button onClick={handleGoogleSignIn} className='' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
            </div>
        </div>
    );
};

export default RightSideNav;