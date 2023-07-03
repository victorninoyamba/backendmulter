import AdminHome from "./adminHome";
import React, { useState } from "react";
import bg from "../assets/images/loginbg.jpg";
import { FileInput, Label } from "flowbite-react";

export default function AddProperties() {
  const [propertytype, setPropertytype] = useState("Ready For Occupancy");
  const [sellingprice, setSellingprice] = useState("");
  const [description, setDescription] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [carparks, setCarparks] = useState("");
  const [floorarea, setFloorarea] = useState("");
  const [homefeatures, setHomefeatures] = useState("");
  const [neighborhoodfeatures, setNeighborhoodfeatures] = useState("");
  const [foodhubs, setFoodhubs] = useState("");
  const [grocery, setGrocery] = useState("");
  const [gym, setGym] = useState("");
  const [school, setSchool] = useState("");
  const [store, setStore] = useState("");
  const [hospital, setHospital] = useState("");
  const [neighborhoodvicinity, setNeighborhoodvicinity] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      propertytype &&
      sellingprice &&
      description &&
      bedrooms &&
      bathrooms &&
      carparks &&
      floorarea &&
      homefeatures &&
      neighborhoodfeatures &&
      foodhubs &&
      grocery &&
      gym &&
      school &&
      store &&
      hospital &&
      neighborhoodvicinity
    ) {
      console.log(
        propertytype,
        sellingprice,
        description,
        bedrooms,
        bathrooms,
        carparks,
        floorarea,
        homefeatures,
        neighborhoodfeatures,
        foodhubs,
        grocery,
        gym,
        school,
        store,
        hospital,
        neighborhoodvicinity
      );
      fetch("http://localhost:5000/api/property/addproperty", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          propertytype,
          sellingprice,
          description,
          bedrooms,
          bathrooms,
          carparks,
          floorarea,
          homefeatures,
          neighborhoodfeatures,
          foodhubs,
          grocery,
          school,
          gym,
          store,
          hospital,
          neighborhoodvicinity,
          images: [images],
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "propertyAdded");
          if (data.status == "ok") {
            alert("Property Added!");
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
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="pt-5 pb-5 w-full">
          <div className="w-full  p-6 bg-white border border-gold rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-lg">Property Information</h1>
            <form
              onSubmit={handleSubmit}
              enctype="multipart/form-data"
              className="w-full"
            >
              <div className="grid gap-6 mb-6 md:grid-cols-2"></div>

              <label
                htmlFor="PropertyType"
                className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Property Type
              </label>
              <select
                defaultValue="Ready For Occupancy"
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                onChange={(e) => setPropertytype(e.target.value)}
                <option disabled>Choose Type</option>
                {/* <option value="PS">Preselling</option> */}
                <option value="RFO">Ready For Occupancy</option>
              </select>

              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Selling Price
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setSellingprice(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bedrooms
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setBedrooms(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bathrooms
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setBathrooms(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Car Parks
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setCarparks(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Floor Area
                </label>
                <input
                  type="text"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setFloorarea(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Home Features
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Please separate each features using a comma"
                  onChange={(e) => setHomefeatures(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Neighborhood Features
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Please separate each features using a comma"
                  onChange={(e) => setNeighborhoodfeatures(e.target.value)}
                ></textarea>
              </div>
              <h2 className="flex pt-3 text-sm ">Nearby Establishments</h2>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Food Hubs
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Please separate each features using a comma"
                  onChange={(e) => setFoodhubs(e.target.value)}
                ></textarea>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Grocery
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Please separate each features using a comma"
                  onChange={(e) => setGrocery(e.target.value)}
                ></textarea>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gym
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Please separate each features using a comma"
                  onChange={(e) => setGym(e.target.value)}
                ></textarea>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  School
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Please separate each features using a comma"
                  onChange={(e) => setSchool(e.target.value)}
                ></textarea>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mall/Store
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Please separate each features using a comma"
                  onChange={(e) => setStore(e.target.value)}
                ></textarea>

                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Hospital
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Please separate each features using a comma"
                  onChange={(e) => setHospital(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block pt-3 mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Neighborhood Vicinity
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=" Please separate each features using a comma"
                  onChange={(e) => setNeighborhoodvicinity(e.target.value)}
                ></textarea>
              </div>

              <div className="max-w-md" id="fileUpload">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload files" />
                </div>
                <FileInput
                  onChange={(e) => setImages(e.target.value)}
                  helperText="Please choose image 1"
                  id="file"
                />
                <div className="mb-2 block"></div>
                <FileInput
                  onChange={(e) => setImages(e.target.value)}
                  helperText="Please choose image 2"
                  id="file"
                />
                <div className="mb-2 block"></div>
                <FileInput
                  onChange={(e) => setImages(e.target.value)}
                  helperText="Please choose image 3"
                  id="file"
                />
                <div className="mb-2 block"></div>
                <FileInput
                  onChange={(e) => setImages(e.target.value)}
                  helperText="Please choose image 4"
                  id="file"
                />
                <div className="mb-2 block"></div>
                <FileInput
                  onChange={(e) => setImages(e.target.value)}
                  helperText="Please choose image 5"
                  id="file"
                />
                <div className="mb-2 block"></div>
                <FileInput
                  onChange={(e) => setImages(e.target.value)}
                  helperText="Please choose image 6"
                  id="file"
                />
              </div>
              {/* <div className="pt-4 pb-3 flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">You can upload up to 5 images.</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
              </label>
          </div>  */}

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import axios from "axios";

// function AddProperties() {
//   const [Properties, setNewProperties] = useState({
//     propertytype: "",
//     sellingprice: "",
//     description: "",
//     bedrooms: "",
//     bathrooms: "",
//     carparks: "",
//     floorarea: "",
//     homefeatures: "",
//     neighborhoodfeatures: "",
//     foodhubs: "",
//     grocery: "",
//     gym: "",
//     school: "",
//     store: "",
//     hospital: "",
//     neighborhoodvicinity: "",
//     img1: "",
//     img2: "",
//     img3: "",
//     img4: "",
//     img5: "",
//     img6: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("propertytype", Properties.propertytype);
//     formData.append("sellingprice", Properties.sellingprice);
//     formData.append("description", Properties.description);
//     formData.append("bedrooms", Properties.bedrooms);
//     formData.append("bathrooms", Properties.bathrooms);
//     formData.append("carparks", Properties.carparks);
//     formData.append("floorarea", Properties.floorarea);
//     formData.append("homefeatures", Properties.homefeatures);
//     formData.append("neighborhoodfeatures", Properties.neighborhoodfeatures);
//     formData.append("foodhubs", Properties.foodhubs);
//     formData.append("grocery", Properties.grocery);
//     formData.append("gym", Properties.gym);
//     formData.append("school", Properties.school);
//     formData.append("store", Properties.store);
//     formData.append("hospital", Properties.hospital);
//     formData.append("neighborhoodvicinity", Properties.neighborhoodvicinity);
//     formData.append("img1", Properties.img1);
//     formData.append("img2", Properties.img2);
//     formData.append("img3", Properties.img3);
//     formData.append("img4", Properties.img4);
//     formData.append("img5", Properties.img5);
//     formData.append("img6", Properties.img6);

//     axios
//       .post("http://localhost:5000/addproperty", formData)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleChange = (e) => {
//     setNewProperties({
//       ...Properties,
//       [e.target.propertytype]: e.target.value,
//     });
//     setNewProperties({
//       ...Properties,
//       [e.target.sellingprice]: e.target.value,
//     });
//     setNewProperties({ ...Properties, [e.target.description]: e.target.value });
//     setNewProperties({ ...Properties, [e.target.bedrooms]: e.target.value });
//     setNewProperties({ ...Properties, [e.target.bathrooms]: e.target.value });
//     setNewProperties({ ...Properties, [e.target.carparks]: e.target.value });
//     setNewProperties({ ...Properties, [e.target.floorarea]: e.target.value });
//     setNewProperties({
//       ...Properties,
//       [e.target.homefeatures]: e.target.value,
//     });
//     setNewProperties({
//       ...Properties,
//       [e.target.neighborhoodfeatures]: e.target.value,
//     });
//     setNewProperties({ ...Properties, [e.target.foodhubs]: e.target.value });
//     setNewProperties({ ...Properties, [e.target.grocery]: e.target.value });
//     setNewProperties({ ...Properties, [e.target.gym]: e.target.value });
//     setNewProperties({ ...Properties, [e.target.school]: e.target.value });
//     setNewProperties({ ...Properties, [e.target.store]: e.target.value });
//     setNewProperties({ ...Properties, [e.target.hospital]: e.target.value });
//     setNewProperties({
//       ...Properties,
//       [e.target.neighborhoodvicinity]: e.target.value,
//     });
//   };

//   const handleImage = (e) => {
//     setNewProperties({ ...Properties, img1: e.target.files[0] });
//     setNewProperties({ ...Properties, img2: e.target.files[0] });
//     setNewProperties({ ...Properties, img3: e.target.files[0] });
//     setNewProperties({ ...Properties, img4: e.target.files[0] });
//     setNewProperties({ ...Properties, img5: e.target.files[0] });
//     setNewProperties({ ...Properties, img6: e.target.files[0] });
//   };

//   return (
//     <>
//       <AdminHome />
//       <div
//         style={{
//           backgroundImage: `url(${bg})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundImage: `url(${bg})`,
//         }}
//       >
//         <div className=" flex justify-center pt-5 pb-5">
//           <div className="w-1/2  p-6 bg-white border border-gold rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <h1 className="flex justify-center text-lg">
//               Property Information
//             </h1>
//             <form
//               onSubmit={handleSubmit}
//               encType="multipart/form-data"
//               className="flex-wrap w-full"
//             >
//               <div className="grid gap-6 mb-6 md:grid-cols-2"></div>

//               <label
//                 htmlFor="PropertyType"
//                 className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Property Type
//               </label>
//               <select
//                 defaultValue={"Ready For Occupancy".Properties.propertytype}
//                 name="propertytype"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 onChange={handleChange}
//                 <option disabled>Choose Type</option>
//                 {/* <option value="PS">Preselling</option> */}
//                 <option value="RFO">Ready For Occupancy</option>
//               </select>

//               <div>
//                 <label
//                   htmlFor="first_name"
//                   className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Selling Price
//                 </label>
//                 <input
//                   type="text"
//                   id="first_name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   onChange={handleChange}
//                   value={Properties.sellingprice}
//                   name="sellingprice"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="last_name"
//                   className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Description
//                 </label>
//                 <input
//                   type="text"
//                   id="last_name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   onChange={handleChange}
//                   value={Properties.description}
//                   name="description"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="last_name"
//                   className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Bedrooms
//                 </label>
//                 <input
//                   type="text"
//                   id="last_name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   onChange={handleChange}
//                   value={Properties.bedrooms}
//                   name="bedrooms"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="last_name"
//                   className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Bathrooms
//                 </label>
//                 <input
//                   type="text"
//                   id="last_name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   onChange={handleChange}
//                   value={Properties.bathrooms}
//                   name="bathrooms"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="company"
//                   className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Car Parks
//                 </label>
//                 <input
//                   type="text"
//                   id="company"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   onChange={handleChange}
//                   value={Properties.carparks}
//                   name="carparks"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="company"
//                   className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Floor Area
//                 </label>
//                 <input
//                   type="text"
//                   id="company"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   onChange={handleChange}
//                   value={Properties.floorarea}
//                   name="floorarea"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Home Features
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder=" Please separate each features using a comma"
//                   onChange={handleChange}
//                   value={Properties.homefeatures}
//                   name="homefeatures"
//                 ></textarea>
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Neighborhood Features
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder=" Please separate each features using a comma"
//                   onChange={handleChange}
//                   value={Properties.neighborhoodfeatures}
//                   name="neighborhoodfeatures"
//                 ></textarea>
//               </div>
//               <h2 className="flex pt-3 text-sm ">Nearby Establishments</h2>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Food Hubs
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder=" Please separate each features using a comma"
//                   onChange={handleChange}
//                   value={Properties.foodhubs}
//                   name="foodhubs"
//                 ></textarea>
//                 <label
//                   htmlFor="message"
//                   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Grocery
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder=" Please separate each features using a comma"
//                   onChange={handleChange}
//                   value={Properties.grocery}
//                   name="grocery"
//                 ></textarea>
//                 <label
//                   htmlFor="message"
//                   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Gym
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder=" Please separate each features using a comma"
//                   onChange={handleChange}
//                   value={Properties.gym}
//                   name="gym"
//                 ></textarea>
//                 <label
//                   htmlFor="message"
//                   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   School
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder=" Please separate each features using a comma"
//                   onChange={handleChange}
//                   value={Properties.school}
//                   name="school"
//                 ></textarea>
//                 <label
//                   htmlFor="message"
//                   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Mall/Store
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder=" Please separate each features using a comma"
//                   onChange={handleChange}
//                   value={Properties.store}
//                   name="store"
//                 ></textarea>

//                 <label
//                   htmlFor="message"
//                   className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Hospital
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder=" Please separate each features using a comma"
//                   onChange={handleChange}
//                   value={Properties.hospital}
//                   name="hospital"
//                 ></textarea>
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block pt-3 mb-1 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Neighborhood Vicinity
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder=" Please separate each features using a comma"
//                   onChange={handleChange}
//                   value={Properties.neighborhoodvicinity}
//                   name="neighborhoodvicinity"
//                 ></textarea>
//               </div>

//               <div className="max-w-md" id="fileUpload">
//                 <div className="mb-2 block">
//                   <Label htmlFor="file" value="Upload files" />
//                 </div>
//                 <FileInput
//                   onChange={handleImage.Properties.img1}
//                   helperText="Please choose image 1"
//                   type="file"
//                   accept=".png, .jpg, .jpeg"
//                   name="img1"
//                 />
//                 <div className="mb-2 block"></div>
//                 <FileInput
//                   onChange={handleImage.Properties.img2}
//                   helperText="Please choose image 2"
//                   type="file"
//                   accept=".png, .jpg, .jpeg"
//                   name="img2"
//                 />
//                 <div className="mb-2 block"></div>
//                 <FileInput
//                   onChange={handleImage.Properties.img3}
//                   helperText="Please choose image 3"
//                   type="file"
//                   accept=".png, .jpg, .jpeg"
//                   name="img3"
//                 />
//                 <div className="mb-2 block"></div>
//                 <FileInput
//                   onChange={handleImage.Properties.img4}
//                   helperText="Please choose image 4"
//                   type="file"
//                   accept=".png, .jpg, .jpeg"
//                   name="img4"
//                 />
//                 <div className="mb-2 block"></div>
//                 <FileInput
//                   onChange={handleImage.Properties.img5}
//                   helperText="Please choose image 5"
//                   type="file"
//                   accept=".png, .jpg, .jpeg"
//                   name="img5"
//                 />
//                 <div className="mb-2 block"></div>
//                 <FileInput
//                   onChange={handleImage.Properties.img6}
//                   helperText="Please choose image 6"
//                   type="file"
//                   accept=".png, .jpg, .jpeg"
//                   name="img6"
//                 />
//               </div>
//               {/* <div className="pt-4 pb-3 flex items-center justify-center w-full">
//               <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
//               <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                   <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
//                   <p className="mb-1 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">You can upload up to 5 images.</p>
//               </div>
//               <input id="dropzone-file" type="file" className="hidden" />
//               </label>
//           </div>  */}

//               <button
//                 type="submit"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Upload
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddProperties;
