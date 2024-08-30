import HomePostView from './components/HomePostView';
import { useEffect, useState } from 'react';
import Header from './components/Header';

function Home() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    fetch('http://localhost:8000/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setPosts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false);
      });

  }, [])

  return (
    <div className="App">
      <Header prompt={"create"}/>
      <div className='post-list-container'>
        {
          loading ? <h2 className='loading'>Loading...</h2> :
            posts.map(post => (
              <HomePostView 
                key={post._id} 
                id={post._id}
                title={post.title} 
                description={post.description}
                datePosted={post.datePosted}
                tag={post.tags}
              />
            ))
        }
      </div>
    </div>
  );
}

export default Home;
