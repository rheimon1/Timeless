import React from "react";
import Header from "../../components/Header";

import { User } from "../Profile/styles";

function Following() {
  return (
    <div>
      <Header />
      <main>
        <div className="main-title">
          <h1>Following</h1>
        </div>
        <div className="following">
          <div className="list-item">
            <User />
            <div className="personal-info">
              <h4>Name</h4>
              <h5>@username</h5>
            </div>
            <div className="following-actions">
              <div className="following-actions-row">
                <div className="following-actions-icon-rows">
                  <ul>
                    <li>
                      <a href="#" aria-labelledby="follow-label">
                        <i className="fas fa-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-labelledby="comment-label">
                        <i
                          className="fas fa-comment-alt"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="following-actions-titles-row">
                  <p id="follow-label">Unfollow</p>
                  <p id="comment-label">Message</p>
                </div>
              </div>
            </div>
            <div className="following-redirect">
              <a>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="list-item">
            <User />
            <div className="personal-info">
              <h4>Name</h4>
              <h5>@username</h5>
            </div>
            <div className="following-actions">
              <div className="following-actions-row">
                <div className="following-actions-icon-rows">
                  <ul>
                    <li>
                      <a href="#" aria-labelledby="follow-label">
                        <i className="fas fa-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-labelledby="comment-label">
                        <i
                          className="fas fa-comment-alt"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="following-actions-titles-row">
                  <p id="follow-label">Unfollow</p>
                  <p id="comment-label">Message</p>
                </div>
              </div>
            </div>
            <div className="following-redirect">
              <a>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="list-item">
            <User />
            <div className="personal-info">
              <h4>Name</h4>
              <h5>@username</h5>
            </div>
            <div className="following-actions">
              <div className="following-actions-row">
                <div className="following-actions-icon-rows">
                  <ul>
                    <li>
                      <a href="#" aria-labelledby="follow-label">
                        <i className="fas fa-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-labelledby="comment-label">
                        <i
                          className="fas fa-comment-alt"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="following-actions-titles-row">
                  <p id="follow-label">Unfollow</p>
                  <p id="comment-label">Message</p>
                </div>
              </div>
            </div>
            <div className="following-redirect">
              <a>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
          <div className="list-item">
            <User />
            <div className="personal-info">
              <h4>Name</h4>
              <h5>@username</h5>
            </div>
            <div className="following-actions">
              <div className="following-actions-row">
                <div className="following-actions-icon-rows">
                  <ul>
                    <li>
                      <a href="#" aria-labelledby="follow-label">
                        <i className="fas fa-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-labelledby="comment-label">
                        <i
                          className="fas fa-comment-alt"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="following-actions-titles-row">
                  <p id="follow-label">Unfollow</p>
                  <p id="comment-label">Message</p>
                </div>
              </div>
            </div>
            <div className="following-redirect">
              <a>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Following;
