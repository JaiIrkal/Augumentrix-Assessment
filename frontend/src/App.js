import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePostForm from './CreatePostForm';
import Home from './Home';
import Post from './Post';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addpost' element={<CreatePostForm/>}/>
        <Route path='/post/:id' element={<Post/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
