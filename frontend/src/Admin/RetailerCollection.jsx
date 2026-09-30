import React from "react";
import { Outlet } from "react-router";
const Retailer = () => {
  return (
    <div>
      <h1>Retailer</h1>

      <ul>
        <li>user1</li>
        <li>user2</li>
        <li>user3</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Retailer;
