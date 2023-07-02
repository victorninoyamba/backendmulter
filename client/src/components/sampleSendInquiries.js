import React, { Component, useState } from "react";

export default function SampleSendInquiries() {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fname &&
      lname &&
      contact &&
      email &&
      address &&
      occupation &&
      message &&
      status
    ) {
      console.log(
        fname,
        mname,
        lname,
        contact,
        email,
        address,
        occupation,
        message,
        status
      );
      fetch("http://localhost:5000/sendinquiry", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          mname,
          lname,
          contact,
          email,
          address,
          occupation,
          message,
          status,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Inquiry Sent!");
            window.location.reload();
          } else {
            alert("Something went wrong");
          }
        });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    // <>
    //   <div className="auth-wrapper">
    //     <div className="auth-inner">
    //       <form onSubmit={handleSubmit}>
    //         <h3>Send Inquiries</h3>

    //         <div className="mb-3">
    //           <label>First name</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="First name"
    //             onChange={(e) => setFname(e.target.value)}
    //           />
    //         </div>
    //         <div className="mb-3">
    //           <label>Middle name</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Middle name"
    //             onChange={(e) => setMname(e.target.value)}
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label>Last name</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Last name"
    //             onChange={(e) => setLname(e.target.value)}
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label>Contact No.</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Enter Contack No."
    //             onChange={(e) => setContact(e.target.value)}
    //           />
    //         </div>

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
    //           <label>Address</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Enter your address"
    //             onChange={(e) => setAddress(e.target.value)}
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <label>Occupation</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Enter Occupation"
    //             onChange={(e) => setOccupation(e.target.value)}
    //           />
    //         </div>
    //         <div className="mb-3">
    //           <label>Message</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Enter Message"
    //             onChange={(e) => setMessage(e.target.value)}
    //           />
    //         </div>
    //         <div className="mb-3">
    //           <label>Status</label>
    //           <div className="form-check">
    //             <input
    //               type="radio"
    //               className="form-check-input"
    //               name="status"
    //               value="pending"
    //               checked={status === "pending"}
    //               onChange={(e) => setStatus(e.target.value)}
    //             />
    //             <label className="form-check-label">Pending</label>
    //           </div>
    //         </div>

    //         <div className="d-grid">
    //           <button type="submit" className="btn btn-primary">
    //             Send Inquiries
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="flex justify-center mt-10 w-full bg-white pb-4 pt-4">
        <form onSubmit={handleSubmit} className="w-1/2">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={(e) => setFname(e.target.value)}
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={(e) => setMname(e.target.value)}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Middle name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={(e) => setLname(e.target.value)}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={(e) => setContact(e.target.value)}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contact Number
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Present Address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={(e) => setOccupation(e.target.value)}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Occupation
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6"></div>

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            rows="4"
            class="mb-6 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your message here..."
          ></textarea>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
