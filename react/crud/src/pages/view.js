import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

function View(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  // alert(JSON.stringify(id));

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    http.get(`/users/${id}/edit`).then((res) => {
      setInputs({ name: res.data.name, email: res.data.email });
    });
  };

  return (
    <div>
      <h2>View User</h2>
      <div className="row">
        <div className="col-sm-8 justify-content-center">
          <div className="card p-4">
            <h2>Name: {inputs.name}</h2>
            <h2>Email: {inputs.email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
