import React from 'react';
import { Button, Image } from 'react-bootstrap';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';
import './Pdf.css'
import { Link } from 'react-router-dom';

const Pdf = () => {
    const ref = useRef()
    return (
        <div className='print'>
            <div className='sss'>
                <div ref={ref} className='div-1'>
                    <h1 className='text-center mb-4'>Online learning Platform</h1>
                    <Image className='img-1' src='https://th.bing.com/th/id/R.1047f73033027e30cfedcbcbab3a9815?rik=q52o2uwUq%2bhCaA&pid=ImgRaw&r=0' />
                    <div className='duration d-flex justify-content-evenly mt-5 '>
                        <p>duration : 6 Month</p>
                        <p>total student : 1000</p>
                        <p>Rating : 4.5</p>
                    </div>
                    <p className='mt-4'>Learn the fundamentals of the blockchain platform. Create your own private blockchain, and secure a digital asset using blockchain identity. Explore the Ethereum platform, and use Solidity and smart contracts to develop your own decentralized app.</p>
                </div>

            </div>
            <div className='btn-1'>
            <ReactToPrint trigger={()=><Button>PDF Print</Button>} content={()=>ref.current} />
            <Link style={{textDecoration: 'none'}} to='/login' className=' check-out me-4 fs-3'>Check Out</Link>
            </div>
        </div>
    );
};

export default Pdf;