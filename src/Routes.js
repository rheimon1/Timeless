import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import DetailedPost from "./pages/DetailedPost";
import Following from "./pages/Following";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Messages from "./pages/Messages";
import Feed from "./pages/Feed";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Feed} />
    <Route exact path="/following" component={Following} />
    <Route exact path="/messages" component={Messages} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/settings" component={Settings} />
  </BrowserRouter>
);

export default Routes;
