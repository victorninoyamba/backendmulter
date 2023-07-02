import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
// import PieComponent from "./PieComponent";
import CardComponent from "./CardComponent";
// import ProjectOverviewComponent from "./ProjectOverviewComponent";

// const data = [
//   { name: "Jan", 2023: 10, pv: 200, amt: 200 },
//   { name: "Feb", 2023: 23, pv: 200, amt: 200 },
//   { name: "Mar", 2023: 19, pv: 200, amt: 200 },
//   { name: "Apr", 2023: 37, pv: 200, amt: 200 },
//   { name: "May", 2023: 24, pv: 200, amt: 200 },
//   { name: "Jun", 2023: 26, pv: 200, amt: 200 },
//   { name: "Jul", 2023: 34, pv: 200, amt: 200 },
//   { name: "Aug", 2023: 27, pv: 200, amt: 200 },
//   { name: "Sept", 2023: 43, pv: 200, amt: 200 },
//   { name: "Oct", 2023: 23, pv: 200, amt: 200 },
//   { name: "Nov", 2023: 33, pv: 200, amt: 200 },
//   { name: "Dec", 2023: 34, pv: 200, amt: 200 },
// ];

const data = [
  {
    name: "JANUARY",
    Inquiries: 43,
    SoldProperties: 21,
    amt: 2400,
  },
  {
    name: "FEBUARY",
    Inquiries: 50,
    SoldProperties: 27,
    amt: 2210,
  },
  {
    name: "MARCH",
    Inquiries: 45,
    SoldProperties: 20,
    amt: 2290,
  },
  {
    name: "APRIL",
    Inquiries: 54,
    SoldProperties: 15,
    amt: 2000,
  },
  {
    name: "JUNE",
    Inquiries: 60,
    SoldProperties: 20,
    amt: 2181,
  },
  {
    name: "JULY",
    Inquiries: 56,
    SoldProperties: 21,
    amt: 2500,
  },
  {
    name: "AUGUST",
    Inquiries: 54,
    SoldProperties: 19,
    amt: 2100,
  },
  {
    name: "SEPTEMBER",
    Inquiries: 55,
    SoldProperties: 18,
    amt: 2100,
  },
  {
    name: "OCTOBER",
    Inquiries: 67,
    SoldProperties: 25,
    amt: 2100,
  },
  {
    name: "NOVEMBER",
    Inquiries: 60,
    SoldProperties: 30,
    amt: 2100,
  },
  {
    name: "DECEMBER",
    Inquiries: 57,
    SoldProperties: 23,
    amt: 2100,
  },
];

const Main = () => {
  return (
    /* Dashboard and generate Report Section */
    <div className="pt-6 px-6 bg-gray-100">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-600 text-lg leading-9 font-normal cursor-pointer">
          Hello! Admin
        </h1>
        <button className="bg-blue-600 h-8 rounded text-white flex items-center justify-center px-4 cursor-pointer">
          Generate Report
        </button>
      </div>

      <CardComponent />

      {/* For the  Bar Chart */}

      <div className="flex mt-6 w-full gap-8">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-md">
          <div className="bg-gray-100 flex items-center justify-between py-4 px-5 border-b border-gray-300 mb-5">
            <h2>Inquiries and Sold Reports</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          {/* <BarChart width={1700} height={550} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
            <Legend
              width={100}
              wrapperStyle={{
                top: 40,
                right: 20,
                backgroundColor: "#f5f5f5",
                border: "1px solid #d5d5d5",
                borderRadius: 3,
                lineHeight: "40px",
              }}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="2023" fill="#8884d8" barSize={30} />
          </BarChart> */}

          <LineChart
            width={1700}
            height={550}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Inquiries" stroke="#8884d8" />
            <Line type="monotone" dataKey="SoldProperties" stroke="#82ca9d" />
          </LineChart>
        </div>
        {/* End of Bar Chart */}

        {/* Start of Pie Chart */}
        {/* <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-md">
          <div className="bg-gray-100 flex items-center justify-between py-4 px-5 border-b border-gray-300 mb-5">
            <h2>Population by Courses</h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-7">
            <PieComponent />
          </div>
        </div> */}
      </div>

      {/* End of Pie Chart */}

      {/* <ProjectOverviewComponent /> */}
    </div>
  );
};

export default Main;
