import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './components/Header'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Post() {

    const { id } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8000/${id}`) 
            .then((response) => {
                if (!response.ok) {           
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Fetched data:', data); 
                setPost(data);                      
            })
            .catch((error) => {
                console.log('Fetch error:', error); 
            });
    }, [id]);

    const handleEditPostBtn = () => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = () => {
        fetch(`http://localhost:8000/${id}`,{
            method:'DELETE'
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log("deleted: ", data)
            alert("Post Deleted: ")
            navigate('/')
        })
        .catch((error) => {
            console.error('Delete error:', error);
        });
    }

    if (!post) return <div>Loading...</div>;
    const tags = post.message.tags.split(" ")

    return (
        <>
            <Header />
            <div className='post'>
                <div className='post-header'>
                    <h1 className='post-title'>{post.message.title}</h1>
                    <h3 className='post-date'>Posted on: {post.message.datePosted}</h3>
                </div>
                <div className='content-div'>
                    <h2 className='post-content'>{post.message.description}</h2>
                    <div className='hashtag-container'>
                    {
                        tags.map((tag) => (
                            <h3 className='tag-post' id={tag}>#{tag}</h3>
                        ))
                    }
                    </div>
                </div>
                <div className='btn-group'>
                    <button 
                        className='post-btn'
                        onClick={handleEditPostBtn}
                    >
                        Edit Post
                    </button>
                    <button 
                        className='post-btn delete-btn'
                        onClick={handleDelete}
                    >
                        Delete Post
                    </button>
                </div>
            </div>
        </>
    )
}

export default Post
