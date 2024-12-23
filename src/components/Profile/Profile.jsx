import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
const Profile = () => {
  const userData = useSelector(userSelector);
  console.log("userData", userData);
  return <div>Profile - {userData.user.username}</div>;
};

export default Profile;
