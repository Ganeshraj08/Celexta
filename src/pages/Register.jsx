import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, SetData] = useState({
    UserName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div className="bg-background">
      <div className="flex gap-2 justify-center  ">
        <h6 className="text-pink text-xl font-bold mt-9">Sign up</h6>
        <h6 className="text-white text-xl font-bold mt-9">
          {" "}
          to start your learning journey with us!
        </h6>
      </div>
      <div className="h-[75vh] flex flex-col items-center justify-center">
        <div
          style={{
            borderTopLeftRadius: "50px",
            borderBottomRightRadius: "50px",
            padding: "50px",
          }}
          className="bg-doublegradient py-9 px-14"
        >
          <form>
            <label
              htmlFor="UserName"
              className="text-white text-sm font-bold mb-2 mt-2"
            >
              Enter Name
            </label>
            <input
              className="block w-full mb-2 py-0.5 px-5 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer"
              type="text"
              name="UserName"
              value={data.UserName}
              onChange={handleChange}
            />
            <label
              htmlFor="Email"
              className="text-sm mb-2 font-bold mt-2 text-white"
            >
              Enter Email
            </label>
            <input
              className="block w-full mb-2 py-0.5 px-5 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer"
              type="email"
              name="Email"
              value={data.Email}
              onChange={handleChange}
            />
            <label
              htmlFor="Password"
              className="text-sm mb-2 font-bold mt-2 text-white"
            >
              Create Password
            </label>
            <input
              className="block w-full mb-2 py-0.5 px-5 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer"
              type="password"
              name="Password"
              value={data.Password}
              onChange={handleChange}
            />
            <label
              htmlFor="Password"
              className="text-sm mb-2 font-bold mt-2 text-white"
            >
              Confirm Password
            </label>
            <input
              className="block w-full mb-2 py-0.5 px-5 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer"
              type="password"
              name="ConfirmPassword"
              value={data.ConfirmPassword}
              onChange={handleChange}
            />

            <div className="flex  justify-center">
              <button
                type="submit"
                className="text-white my-2 bg-pink px-2 py-1 rounded-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex gap-1 mt-2 items-center">
          <h6 className="text-white">Already having an account ?</h6>
          <button className="text-primary my-2 bg-white px-2 py-1 rounded-sm">
            <Link to="/login"> Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
