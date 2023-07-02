import React, { Component, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/api/user/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./adminhome";
        }
      });
  }

  return (
    //   <div className="auth-wrapper bg-image">
    //     <div className="auth-inner">
    //       <form onSubmit={handleSubmit}>
    //         <h3>Sign In</h3>

    //         <div className="mb-3">
    //           <label>Email address</label>
    //           <input
    //             type="email"
    //             className="form-control"
    //             placeholder="Enter email"
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label>Password</label>
    //           <input
    //             type="password"
    //             className="form-control"
    //             placeholder="Enter password"
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>

    //         {/* <div className="mb-3">
    //           <div className="custom-control custom-checkbox">
    //             <input
    //               type="checkbox"
    //               className="custom-control-input"
    //               id="customCheck1"
    //             />
    //             <label className="custom-control-label" htmlFor="customCheck1">
    //               Remember me
    //             </label>
    //           </div>
    //         </div> */}

    //         <div className="d-grid">
    //           <button type="submit" className="btn btn-primary">
    //             Login
    //           </button>
    //         </div>
    //         <p className="forgot-password text-right">
    //           <a href="/sign-up">Add Agents</a>
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // );
    <>
      <div className="flex mt-10 justify-center">
        <form onSubmit={handleSubmit} className="w-1/2">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Admin email account"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
          {/* <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                defaultValue=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required=""
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div> */}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <div className="mt-2 text-right">
            <p className="forgot-password">
              Add <a href="/sign-up">Admin Account?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
