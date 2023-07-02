import "./App.css";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import AdminHome from "./components/adminHome";
import AddProperties from "./components/addProperties";
import Inquiries from "./components/inquiries";
import Users from "./components/user";
import SendInquiries from "./components/sampleSendInquiries";
import { UpdateProperty } from "./components/updateProperty";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// import ImageUpload from "./components/imageUpload.";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    return isLoggedIn === "true";
  };

  // Function to handle unauthorized access
  const handleUnauthorizedAccess = () => {
    return <Navigate to="/sign-in" />;
  };

  return (
    <Router>
      <div className="App bg-white">
        <Routes>
          <Route
            exact
            path="/"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] border">
                    <div>
                      <UserDetails />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />

          <Route
            path="/adminhome"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] border">
                    <div>
                      <Main />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />
          <Route
            path="/inquiries"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] border">
                    <div>
                      <Inquiries />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />
          <Route
            path="/users"
            element={isAuthenticated() ? <Users /> : handleUnauthorizedAccess()}
          />
          <Route
            path="/sendinquiry"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] border">
                    <div>
                      <SendInquiries />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />
          <Route
            path="/addproperty"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[25%] border sticky top-0 left-0">
                    <Sidebar />
                  </div>
                  <div className="basis-[75%] w-full justify-center border right-0">
                    <div>
                      <AddProperties />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />
          <Route
            path="/updateproperty"
            element={
              isAuthenticated() ? (
                <div className="flex">
                  <div className="basis-[12%] h-[100vh] border">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] w-full h-full border">
                    <div>
                      <UpdateProperty />
                    </div>
                  </div>
                </div>
              ) : (
                handleUnauthorizedAccess()
              )
            }
          />
        </Routes>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/sign-in"
            element={
              isAuthenticated(false) ? handleUnauthorizedAccess() : <Login />
            }
          />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
