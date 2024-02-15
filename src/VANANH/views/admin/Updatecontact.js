import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Updatecontact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:3002/update/" + id, {
        name,
        email,
        phone,
        title,
        text,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Update Contact</h2>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name={name.name}
                placeholder="Enter Name"
                className="form-control"
                // onChange={handleInput}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name={email.email}
                placeholder="Enter Email"
                className="form-control"
                // onChange={handleInput}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mb-2">
              <label htmlFor="">Phone</label>
              <input
                type="phone"
                name={phone.phone}
                placeholder="Enter Phone"
                className="form-control"
                // onChange={handleInput}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
            <div className="mb-2">
              <label htmlFor="">Title</label>
              <input
                type="text"
                name={title.title}
                placeholder="Enter Title"
                className="form-control"
                // onChange={handleInput}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="mb-2">
              <label htmlFor="">Title</label>

              <textarea
                className="form-control"
                name={text.text}
                rows="5"
                cols="20"
                id="ctl00_mainContent_ctl01_ctl32e5dfcbd3de4bc597172154825c2a38_txt32e5dfcbd3de4bc597172154825c2a38"
                placeholder="Nội dung"
                // onChange={handleInput}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <button
              className="btn btn-success"
              id="craete"
              type="submit"
              // onClick={handleSubmit}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Updatecontact;
