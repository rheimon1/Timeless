import React from "react";

const ActionBar = () => (
  <div className="action-bar">
    <div className="action-bar-icons-row">
      <ul>
        <li>
          <a href="#" aria-labelledby="follow-label">
            <i className="fas fa-plus" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#" aria-labelledby="comment-label">
            <i className="fas fa-comment-alt" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#" aria-labelledby="like-label">
            <i className="fas fa-heart" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="action-bar-titles-row">
      <p id="follow-label">Follow</p>
      <p id="comment-label">Comment</p>
      <p id="like-label">Like</p>
    </div>
  </div>
);

export default ActionBar;
