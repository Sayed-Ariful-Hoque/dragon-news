import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNave.css'

const LeftSideNav = () => {
    const [categories, setCategories] = useState ([]);

    useEffect (() =>{
        fetch('https://online-learning-platform-server-xi.vercel.app/news-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    })
    return (
        <div>
            <h4>All category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p className='category' key={category.id}>
                        <Link style={{color:"black",fontWeight:"700", textDecoration: 'none'}}  to={`/category/${category.id}`}>{category.name}</Link>

                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;