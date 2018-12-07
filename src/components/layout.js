import React from "react";

export default ({ children }) => (
  <div style={{ margin: "10 auto", maxWidth: 650, padding: "0 15%" }}>
    <h3>My Profile</h3>
    {children}
  </div>
);
