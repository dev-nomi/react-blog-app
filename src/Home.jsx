import { useState } from 'react';
import Blogs from './components/Blogs'

const Home =  () => {
  const [blogs, setBlogs] = useState([]);
  
  //Delete Blog
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  return(
    <div className="home">
      <Blogs 
        blogs={blogs} 
        title="All Blogs!" 
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Home;