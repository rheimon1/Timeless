import React from "react";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import Header from "../../components/Header";
import Post from "../../components/Post";

function Feed() {
  return (
    <div className="main-container">
      <Header />
      <main className="feed">
        <Slide>
          <div className="feed">
            <div className="image-section-container">
              <div className="image-container">
                <img
                  className="screen-reader-only"
                  src={`${process.env.PUBLIC_URL}/photo.jpg`}
                  alt="woman and child walking on cobblestone"
                />
              </div>
              <div className="feed-user">
                <h2>@skygillen</h2>
              </div>
            </div>
          </div>
          <div className="feed">
            <div className="image-section-container">
              <div className="image-container">
                <img
                  className="screen-reader-only"
                  src={`${process.env.PUBLIC_URL}/photo.jpg`}
                  alt="woman and child walking on cobblestone"
                />
              </div>
              <div className="feed-user">
                <h2>@skygillen</h2>
              </div>
            </div>
          </div>
        </Slide>
      </main>
    </div>
  );
}

export default Feed;
