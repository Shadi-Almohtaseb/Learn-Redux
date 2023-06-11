import React from "react";

const UserCard = (props) => {
  const { userData } = props;
  return (
    <div>
      <h1>Your name is {userData.userName}</h1>
      <h1>Your email is {userData.userEmail}</h1>
      <h1>Your age is {userData.userAge}</h1>
    </div>
  );
};

export default UserCard;
