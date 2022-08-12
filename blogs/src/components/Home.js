import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {db} from '../config/firestore';
function Home(props) {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection('posts').get().then((snapshot)=>{
            const posts=snapshot.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            });
            console.log(posts)
            setPosts(posts);
        });
        
    },[])
    return (
        <div className='home'>
            <h1>Tech Blog</h1>
            <div id="blog-by">Abhishek</div>
            {posts.map((post,index)=>(
                <div className='post' key={`post-${index}`}>
                    <Link to={`/post/${post.id}`}>
                        <h3>{post.title}</h3>
                        <p>{post.subtitle}</p>
                    </Link>

                    <p></p>
                </div>
            ))}
        </div>
    );
}

export default Home;