import React, {useEffect} from 'react';
import "./style.scss"
const Blog = () => {
    useEffect(()=>{
        alert('is in  process')
    },[])
    return (
        <div>
            Blog
        </div>
    );
};

export default Blog;