import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Header from './components/Header'
import { useNavigate } from 'react-router-dom';

function UpdatePost() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the existing post data to prefill the form
        fetch(`http://localhost:8000/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            setTitle(data.message.title);
            setDescription(data.message.description);
            setTags(data.message.tags);
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to fetch post data. Please try again.');
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
    
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${day}-${month}-${year}`;
    
        const postData = {
            title,
            description,
            datePosted: formattedDate, // Updated date of the post
            tags,
        };
    
        fetch(`http://localhost:8000/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to update post');
            }
            alert('Post updated successfully!');
            navigate(`/post/${id}`); // Redirect to the updated post page
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to update post. Please try again.');
        });
    };
    

  return (
    <><Header/>
      <div className='outer-container'>
              <div className='create-post-form-continer'>
                  <h1 className='form-title'>Edit Post</h1>
                  <form className='create-form' onSubmit={handleSubmit}>
                      <input
                          placeholder='Title'
                          value={title}
                          onChange={(e) => {
                              setTitle(e.target.value)
                          } } />
                      <textarea
                          placeholder='Description'
                          value={description}
                          onChange={(e) => {
                              setDescription(e.target.value)
                          } } />
                      <input
                          placeholder='tags (seperate by space)'
                          value={tags}
                          onChange={(e) => {
                              setTags(e.target.value)
                          } } />
                      <button type='submit' className='submit-button'>
                          Post
                      </button>
                  </form>
              </div>
          </div></>
  )
}

export default UpdatePost
