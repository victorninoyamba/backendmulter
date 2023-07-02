import React, { Component, useEffect, useState } from "react";
import { useRef } from "react";
// import AdminHome from "./adminHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/images/loginbg.jpg";

export default function Inquiries({ allInquiries }) {
  //setting state
  const [data, setData] = useState([]);
  // const [limit, setLimit] = useState(5);
  // const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    getAllInquiries();
    // getPaginatedUsers();
  }, []);

  //fetching all inquiries
  const getAllInquiries = () => {
    fetch("http://localhost:5000/getAllInquiries", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "allInquiries");
        setData(data.data);
      });
  };

  //deleting a inquiries

  const deleteInquiry = (id, name) => {
    if (
      window.confirm(
        `Are you sure you want to delete Mr./Mrs. ${name}'s inquiry?`
      )
    ) {
      fetch("http://localhost:5000/deleteInquiry", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          inquiryid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllInquiries();
        });
    } else {
    }
  };

  return (
    <>
      {/* <AdminHome /> */}
      <div
        className="h-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="flex">
          <div className="justify-center shadow-md sm:rounded-lg">
            <table className="text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact no.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    email address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Occupation
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Message
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((data) => (
                  // <li key={item.id}>{item.name}</li>
                  <tr
                    key={data._id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.fname} {data.mname} {data.lname}
                    </th>
                    <td className="px-6 py-4">{data.contact}</td>
                    <td className="px-6 py-4">{data.email}</td>
                    <td className="px-6 py-4">{data.address}</td>
                    <td className="px-6 py-4">{data.occupation}</td>
                    <td className="px-2 py-2aoom overflow-auto">
                      {data.message}
                    </td>
                    <td className="px-6 py-4 overflow-auto">{data.status}</td>
                    <td className="px-6 py-4 overflow-auto text-center">
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => deleteInquiry(data._id, data.fname)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
