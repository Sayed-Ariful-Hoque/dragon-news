import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const [accepted, SetAccepted] = useState(false);
    const { createUser } = useContext(AuthContext)


    const handleSubmit = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const photoURL = from.photoURL.value;
        const email = from.email.value;
        const password = from.password.value;

        console.log(name, photoURL, email, password)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                from.reset()
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleAccepted = event =>{
        SetAccepted(event.target.checked)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder=" Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>photoURL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>Terms and conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger ms-2">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;