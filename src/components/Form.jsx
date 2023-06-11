import React, { useState } from "react";
import UserCard from "./UserCard";
const Form = () => {
  const [users, setUsers] = useState([]);
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");

  const funSetName = (event) => {
    setName(event.target.value);
  };
  const funSetAge = (event) => {
    setAge(event.target.value);
  };
  const funSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const fun = () => {
    if (!Name || !Email || !Age) {
      alert("error!");
    } else {
      let user = {
        userName: Name,
        userAge: Age,
        userEmail: Email,
      };
      setUsers([...users, user]);
    }
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Your Name"
        onChange={funSetName}
      />
      <br />
      <input
        type="number"
        name=""
        id=""
        placeholder="Enter Your Age"
        onChange={funSetAge}
      />
      <br />
      <input
        type="email"
        name=""
        id=""
        placeholder="Enter Your Email"
        onChange={funSetEmail}
      />
      <br />
      <input type="button" value="Submit" onClick={fun} />
      {users.map((user, index) => (
        <UserCard userData={user} key={index} />
      ))}
    </div>
  );
};
export default Form;
