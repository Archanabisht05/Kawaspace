import axios from "axios";
import React, { useState, useEffect } from "react";
import Data from "./Data";

const Home = () => {
  const [userdata, setUserData] = useState({});
  const [selIndex, setselIndex] = useState(null);
  useEffect(() => {
    const response = async () => {
      let res = await axios.get(
        "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results="
      );
      console.log(res);
      let usr_name = `${res.data.results[0].name.title}. ${res.data.results[0].name.first} ${res.data.results[0].name.last}`;
      let usr_location = `${res.data.results[0].location.street.number} ${res.data.results[0].location.street.name} ${res.data.results[0].location.city} ${res.data.results[0].location.country} ${res.data.results[0].location.postcode} ${res.data.results[0].location.timezone.offset} ${res.data.results[0].location.timezone.description}`;
      let email = res.data.results[0].email;
      let profile = res.data.results[0].picture.large;
      setUserData({
        username: usr_name,
        userlocation: usr_location,
        gender: `${res.data.results[0].gender}`,
        usr_email: email,
        usr_profile: profile,
      });
    };
    response();
  }, []);
  return (
    <div className="home">
      <div className="product_main">
        <div className="product_main1">
          <span className="profile">
            <img src={userdata.usr_profile} alt="Img"/>
          </span>
          <span className="user_data">
            <div className="usr_name">{userdata.username}</div>
            <div className="usr_add">
              {userdata.userlocation}
              <div className="usr_gender">
                {userdata.gender}
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="container">
        {Data.map((cval, index) => {
          return (
            <div
              className="items"
              onClick={() => {
                setUserData({
                  username: cval.username,
                  userlocation: cval.userlocation,
                  gender: cval.gender,
                  usr_email: cval.gender,
                  usr_profile: cval.profile,
                });
                setselIndex(index);
              }}
            >
              {index === selIndex ? (
                <div style={{ backgroundColor: "#A259FF", color: "white",borderRadius:"6px" }}>
                  <div className="gender_selected">{cval.gender} - NL </div>
                  <div className="username_selected">{cval.username} </div>
                  <div className="email_selected">{cval.email} </div>
                </div>
              ) : (
                <>
                  <div className="gender">{cval.gender} - NL </div>
                  <div className="username">{cval.username} </div>
                  <div className="email">{cval.email} </div>
                </>
              )}
            </div>
          );
        })}
        {/* <div className="items">
          <div className="gender">{userdata.gender} - NL </div>
          <div className="username">{userdata.username} </div>
          <div className="email">{userdata.usr_email} </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
