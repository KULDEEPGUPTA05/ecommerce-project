import NavbarComponent from "./Component/NavbarComponent";
import ProductComponent from "./Component/ProductComponent";
import { Route, Routes } from "react-router-dom";

import About from "./Component/About";
import Pagenotfound from "./Component/Pagenotfound";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Detailproductpage from "./Component/Detailproductpage";
import Protected from "./protectedroutes/protected";
import { useState } from "react";
import Retailer from "./Retailer/Retailer";
import { useEffect } from "react";
import Admin from "./Admin/Admin";
import User from "./User/User";
import UserCollection from "./Admin/UserCollection";
import RetailerCollection from "./Admin/RetailerCollection";
const App = () => {
  let data = localStorage.getItem("role");
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ProductComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Detailproductpage/:id" element={<Detailproductpage />} />

        <Route
          path="/retailer"
          element={
            <Protected userRole={data} access={["retailer", "admin"]}>
              <Retailer />
            </Protected>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <Protected userRole={data} access={["admin"]}>
              <Admin />
            </Protected>
          }
        >
          <Route path="usercollection" element={<UserCollection />} />
          <Route path="retailcollection" element={<RetailerCollection />} />
          
        </Route>
        <Route
          path="/user"
          element={
            <Protected userRole={data} access={["user", "admin"]}>
              <User />
            </Protected>
          }
        ></Route>
      </Routes>
    </div>
  );
};
export default App;
