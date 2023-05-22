import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import http from "../http";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
    });
  };

  const deleteUser = (id) => {
    http.delete(`/users/${id}`).then((res) => {
      fetchAllUsers();
    });
  };
  return (
    <div>
      <h1>Users Listing...</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{++index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-info me-2"
                    to={{ pathname: "/edit/" + user.id }}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-primary me-2"
                    to={{ pathname: "/view/" + user.id }}
                  >
                    View
                  </Link>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
