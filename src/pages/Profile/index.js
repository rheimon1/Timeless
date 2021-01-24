import React from "react";
import Header from "../../components/Header";

import { PostButton, ProfileDetails, User } from "./styles";

function Profile() {
  return (
    <div className="main-container main-profile">
      <Header />
      <main>
        <div className="profile-container">
          <div className="profile-container-grid">
            <div className="profile-container-grid-item">
              <h1>00</h1>
              <h3>Following</h3>
            </div>
            <div className="profile-container-grid-item">
              <User />
              <div className="profile-item-info">
                <h4>Name</h4>
                <h5>Name</h5>
              </div>
            </div>
            <div className="profile-container-grid-item">
              <h1>00</h1>
              <h3>Followers</h3>
            </div>
          </div>
        </div>
      </main>
      <div className="profile-your-post">
        <h2>Your posts</h2>
        <div className="profile-your-post-years">
          <div className="profile-your-post-year">
            <h2>
              <span className="post-year">2020</span>
            </h2>
            <p style={{ paddingLeft: "7%" }}>VIEW POST</p>
            <PostButton type="active" />
          </div>
          <div className="profile-your-post-year">
            <h2>
              <span className="post-year">2021</span>
            </h2>
            <p>POST NOW</p>
            <PostButton type="active" />
          </div>
          <div className="profile-your-post-year">
            <h2>
              <span className="post-year">2022</span>
            </h2>
            <p>POST NOW</p>
            <PostButton />
          </div>
          <div className="profile-your-post-year">
            <h2>
              <span className="post-year">2023</span>
            </h2>
            <p>POST NOW</p>
            <PostButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
