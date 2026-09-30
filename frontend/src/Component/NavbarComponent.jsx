import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Store } from "../ContextProvider/AppProvider";
const Landingpage = () => {
  const [active, setActive] = useState("");
  // const [search, setSearch] = useState("");
  const { setList, search, setSearch } = useContext(Store);
  const navigate = useNavigate();

  async function fetchs(category) {
    const res = await fetch(
      `http://localhost:3000/product/productlist?category=${category}`,
    );
    const json = await res.json();
    setList(json);
    // localStorage.setItem(
    //   "product",
    //   JSON.stringify(Array.isArray(json) ? json : []),
    // );
    // window.dispatchEvent(new Event("productUpdated"));
  }
  async function fetchAllProducts() {
    let data = await fetch("http://localhost:3000/product/productlist");

    let res = await data.json();
    setList(res);
    // localStorage.setItem("product", JSON.stringify(res));

    // window.dispatchEvent(new Event("productUpdated"));
  }
  useEffect(() => {
    let timer;
    if (search) {
      timer = setTimeout(() => {
        fetchs(search);
      }, 3000);
    } else {
      // Search cleared → fetch complete data
      fetchAllProducts();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div className="sticky top-0 z-40 shadow-md flex justify-between main_container_div items-center  mx-auto text-2xl item-center bg-[#F5F5DC] text-black p-2">
      <div
        className="flex ml-5 font-bold cursor-pointer transition-transform duration-200 hover:scale-110 hover:text-blue-600"
        onClick={() => {
          navigate("/");
        }}
      >
        LOGO
      </div>

      <div>
        <ul className="flex gap-5 list-none">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-all duration-200 hover:text-blue-600 hover:border-blue-600 ${
                  isActive
                    ? "text-blue-600 border-blue-600"
                    : "border-transparent"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-all duration-200 hover:text-blue-600 hover:border-blue-600 ${
                  isActive
                    ? "text-blue-600 border-blue-600"
                    : "border-transparent"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-all duration-200 hover:text-blue-600 hover:border-blue-600 ${
                  isActive
                    ? "text-blue-600 border-blue-600"
                    : "border-transparent"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="service"
              className={({ isActive }) =>
                `pb-1 border-b-2 transition-all duration-200 hover:text-blue-600 hover:border-blue-600 ${
                  isActive
                    ? "text-blue-600 border-blue-600"
                    : "border-transparent"
                }`
              }
            >
              Service
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="text-black ">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="ml-2 w-48 focus:w-72 px-4 py-1 text-base text-black bg-white border-2 border-gray-300 rounded-full outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <div className="flex ">
        <button
          className="mr-4 px-5 py-1 text-center rounded-full font-semibold border border-blue-600 text-blue-600 bg-white cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white hover:shadow-lg active:scale-95"
          onClick={() => {
            setActive("login");
          }}
        >
          {" "}
          Login
        </button>
        {/* <button className="p-2 mr-4 border-none rounded-lg text-white" onClick={()=>{setActive("signup")}}>Signup</button> */}
      </div>
      {active && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 "
          onClick={() => {
            setActive("");
          }}
        >
          {active === "login" && (
            <div
              className=" w-[400px] h-[250px] border p-8 border-2px  bg-white text-black text-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="!text-2xl !font-bold  !text-black ">Login Form</h2>
              <div className="flex items-center ">
                <label className="w-[100px]" htmlFor="">
                  Email:
                </label>{" "}
                <input
                  type="text"
                  className="border"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex items-center mb-3">
                <label className="w-[100px]" htmlFor="">
                  Password:
                </label>{" "}
                <input
                  type="text"
                  className="border"
                  placeholder="Enter password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => {
                  localStorage.setItem("role", "user");
                }}
              >
                Login to user
              </button>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => {
                  localStorage.setItem("role", "admin");
                }}
              >
                Login to admin
              </button>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={() => {
                  localStorage.setItem("role", "retailer");
                }}
              >
                Login to retailer
              </button>
              <br />
              <span>Don't have account :</span>
              <span
                onClick={() => {
                  setActive("signup");
                }}
              >
                Click here
              </span>
            </div>
          )}

          {active === "signup" && (
            <div
              className=" w-[400px] h-[150px] border p-8 border-2px  bg-white text-black text-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="!text-2xl !font-bold  !mb-6 !text-black ">
                Signup Form
              </h2>
              <span>Already have account : </span>
              <span
                onClick={() => {
                  setActive("login");
                }}
                className="border p-2"
              >
                Click here
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Landingpage;
