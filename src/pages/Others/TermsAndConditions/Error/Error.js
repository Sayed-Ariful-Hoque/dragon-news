import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <div >
                <h1>404 Error Page</h1>
                <p>Sorry, This Page doesn't Exist</p>
                <Link style={{textDecoration: 'none',color:"white",background: "blue", padding: "10px 20px", borderRadius: "7px"}} to="/">Go Back</Link>
            </div>
        </div>
    );
};

export default Error;