import { useState } from 'react';
import Blogs from './components/Blogs'

const Home =  () => {
  const [blogs, setBlogs] = useState([
    { title: "My first blog", body: "Body of first blog", author: "Noman", id: 1},
    { title: "My second blog", body: "Body of second blog", author: "Noman", id: 2},
    { title: "My third blog", body: "Body of third blog", author: "No one", id: 3}
  ]);

  return(
    <div className="home">
      <Blogs blogs={blogs} />
    </div>
  );
}

export default Home;