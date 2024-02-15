import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Createcontact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3002/create", { name, email, phone, title, text })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   title: "",
  //   text: "",
  // });
  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  //   console.log(data);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(data);
  // };
  // const navigate = useNavigate();

  // function handleSubmit(event) {
  //   let contactCopy = [...contact];
  //   contactCopy.push({
  //     name: name,
  //     email: email,
  //     phone: phone,
  //     title: title,
  //     text: text,
  //   });

  //   setContact(contactCopy);
  // }
  // const addNewContact = () => {
  //   var abc = new FormData();
  //   abc.append("name", name);
  //   abc.append("email", email);
  //   abc.append("phone", phone);
  //   abc.append("title", title);
  //   abc.append("text", text);

  //   var option = {
  //     method: "POST",
  //     body: addNewContact,
  //   };
  //   fetch("http://localhost:3002/info_contact", option)
  //     .then((res) => res.json())
  //     .then((req) => console.log(req));

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Add Contact</h2>
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Createcontact;
