import React from "react";
import {
  FaTachometerAlt,
  FaRegSun,
  FaChevronRight,
  FaWrench,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaChevronLeft,
  FaBolt,
} from "react-icons/fa";
import AdminHome from "./adminHome";
import AddProperties from "./addProperties";

const logOut = () => {
  window.localStorage.clear();
  window.location.href = "./sign-in";
};

const addPropertiesPage = () => {
  window.location.href = "./addproperty";
};
const updatePropertyPage = () => {
  window.location.href = "./updateproperty";
};
const inquiries = () => {
  window.location.href = "./inquiries";
};
const users = () => {
  window.location.href = "./users";
};
const adminHome = () => {
  window.location.href = "./adminhome";
};

const Sidebar = () => {
  return (
    <div className="bg-blue-600 h-screen px-4">
      <div className="px-4 py-8 flex items-center justify-center border-b border-gray-300/30">
        <h1 className="text-white text-2xl leading-6 font-extrabold cursor-pointer">
          Admin Panel
        </h1>
      </div>

      <div className="flex items-center gap-4 py-5 border-b border-gray-300/30">
        <a onClick={adminHome}>
          <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
            <div className="flex items-center gap-4">
              <FaTachometerAlt className="text-white" />
              <p className="text-base leading-6 font-normal text-white">
                Dashboard
              </p>
            </div>
            {/* <FaChevronRight className="text-white" /> */}
          </div>
        </a>
      </div>

      <div className="pt-4">
        <p className="text-xs font-extrabold leading-4 text-white opacity-40">
          Menu
        </p>
      </div>

      <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
        <a onClick={addPropertiesPage}>
          <div className="flex items-center gap-4">
            <FaRegSun className="text-white" />
            <p className="text-base leading-6 font-normal text-white">
              Add Property
            </p>
          </div>
          {/* <FaChevronRight className="text-white" /> */}
        </a>
      </div>

      <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
        <a onClick={updatePropertyPage}>
          <div className="flex items-center gap-4">
            <FaWrench className="text-white" />
            <p className="text-base leading-6 font-normal text-white">
              Edit Property
            </p>
          </div>
          {/* <FaChevronRight className="text-white" /> */}
        </a>
      </div>

      <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
        <div className="flex items-center gap-4">
          <FaStickyNote className="text-white" />
          <p className="text-base leading-6 font-normal text-white">Users</p>
        </div>
        {/* <FaChevronRight className="text-white" /> */}
      </div>
      <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
        <div className="flex items-center gap-4">
          <FaRegChartBar className="text-white" />
          <p className="text-base leading-6 font-normal text-white">Charts</p>
        </div>
        {/* <FaChevronRight className="text-white" /> */}
      </div>
      <div className="flex items-center justify-between gap-4 py-4 cursor-pointer">
        <a onClick={logOut}>
          <div className="flex items-center gap-4">
            <FaRegChartBar className="text-white" />
            <p className="text-base leading-6 font-normal text-white">
              Log out
            </p>
          </div>
          {/* <FaChevronRight className="text-white" /> */}
        </a>
      </div>

      {/*   */}
    </div>
  );
};

export default Sidebar;
