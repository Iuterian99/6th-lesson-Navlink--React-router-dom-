import "./home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      {users.length > 0 && (
        <ol className=" mt-2">
          {users.map((user) => (
            <li className="mb-3 bg-dark text-center p-2" key={user.id}>
              {" "}
              <Link className="link-light text-bold" to={`/posts/${user.id}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Home;
