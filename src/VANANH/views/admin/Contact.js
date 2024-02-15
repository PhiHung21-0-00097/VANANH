import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
function Contac() {
  const [tintuc, setTintuc] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3002/info_contact")
      .then((res) => setTintuc(res.data))
      .catch((err) => console.log(err));
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3002")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // });
  return (
    <>
      <Home />
      <div className=" d-flex vh-100  justify-content-center align-items-center">
        <div className="w-50 bg-secondary rounded p-3">
          <Link to={"/create"} className="btn btn-success">
            Add +
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Text</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {tintuc.map((data, i) => (
                <tr key={i}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.title}</td>
                  <td>{data.text}</td>
                  <td>
                    <Link className="btn btn-primary" to={`/update/${data.id}`}>
                      Update
                    </Link>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Contac;
