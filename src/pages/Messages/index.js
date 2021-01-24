import React from "react";
import Header from "../../components/Header";

import { User } from "../Profile/styles";

function Messages() {
  return (
    <div>
      <Header />
      <main>
        <div className="main-title">
          <h1>Messages</h1>
        </div>
        <div className="message">
          <div className="message-item">
            <a style={{ cursor: "pointer" }}>
              <div className="list-item">
                <i className="fas fa-plus"></i>
                <h2>Write a new message</h2>
              </div>
            </a>
          </div>
          <div className="message-item">
            <a style={{ cursor: "pointer" }}>
              <div className="list-item">
                <User />
                <div className="personal-info">
                  <h4>Name</h4>
                  <h5>@username</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Messages;
