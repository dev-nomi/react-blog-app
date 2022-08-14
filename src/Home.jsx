import { useState } from 'react';

const Home =  () => {
  const [blogs, setBlogs] = useState([
    { title: "My first blog", body: "Body of first blog", author: "Noman", id: 1},
    { title: "My second blog", body: "Body of second blog", author: "Noman", id: 2},
    { title: "My third blog", body: "Body of third blog", author: "No one", id: 3}
  ]);

  return(
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>written by { blog.author }</p>
        </div>
      ))}    
    </div>
  );
}

export default Home;