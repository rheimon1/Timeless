import React from "react";

import Header from "../../components/Header";
import Post from "../../components/Post";

function DetailedPost() {
  return (
    <div className="main-container">
      <Header />
      <main className="detailed-post">
        <div className="image-section-container">
          <div className="image-container">
            <img
              className="screen-reader-only"
              src={`${process.env.PUBLIC_URL}/photo.jpg`}
              alt="woman and child walking on cobblestone"
            />
          </div>
        </div>
        <div className="headings-container">
          <h1>
            Skye Gillen
            <span className="post-year">2020</span>
          </h1>
          <h2>@skyegillen</h2>
        </div>
        <Post />
        <div className="exit-button">x</div>
      </main>
    </div>
  );
}

export default DetailedPost;
