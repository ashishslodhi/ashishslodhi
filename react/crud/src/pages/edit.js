import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";

function Edit(props) {
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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    // alert(JSON.stringify(inputs));
    http.put("/users/" + id, inputs).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>Edit User</h2>
      <div className="row">
        <div className="col-sm-8 justify-content-center">
          <div className="card p-4">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              value={inputs.name || ""}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control mb-2"
              value={inputs.email || ""}
              onChange={handleChange}
            />

            <button
              type="button"
              className="btn btn-info mt-2"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
