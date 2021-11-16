import "./Posts.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function Posts() {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [id]);

  return (
    <div className="container">
      {posts.length > 0 && (
        <ol className=" mt-2">
          {posts.map((post) => (
            <li className="mb-3 bg-secondary p-2" key={post.id}>
              <Link className="link-light" to="/">
                <h3 className="h3">{post.title}</h3>
              </Link>
              <p>{post.body}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Posts;
