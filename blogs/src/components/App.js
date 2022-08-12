
import {Routes,Route} from 'react-router-dom';
import NavBar from './NavBar';
import PostDetail from './PostDetail';
import Home from './Home';
import CreatePost from './CreatePost';
function App() {
  return (
    <div className="container">
      App
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:postId' element={<PostDetail/>} />
        <Route path='/create-post' element={<CreatePost/>} />
      </Routes>
    </div>
  );
}

export default App;
