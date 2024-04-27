import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/UseSignup";
import { server } from "../../utils/constants";
import { useAtom } from "jotai";
import { User } from "../Store";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    gender: "",
    confirmPassword: "",
  });
  // const [user, ] = useAtom(User)
  // console.log(user);
  const { loading, signup } = useSignup();
  const { fullName, username, password, gender, confirmPassword } = inputs;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Sign Up <span className="text-blue-500">ChatApp</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={handleInput}
                name="fullName"
                className="w-full input input-bordered h-10"
              />
            </div>
            <div className="">
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="johndoe"
                className="w-full input input-bordered h-10"
                value={username}
                onChange={handleInput}
                name="username"
              />
            </div>
            <div className="">
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
                value={password}
                onChange={handleInput}
                name="password"
              />
            </div>
            <div className="">
              <label htmlFor="" className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full input input-bordered h-10"
                value={confirmPassword}
                onChange={handleInput}
                name="confirmPassword"
              />
            </div>
            <div className="flex">
              <div className="form-control">
                <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                  <span className="label-text">Male</span>
                  <input
                    type="checkbox"
                    className="checkbox border-slate-900"
                    checked={gender === "male"}
                    onChange={() => setInputs({ ...inputs, gender: "male" })}
                  />
                </label>
              </div>
              <div className="form-control">
                <label htmlFor="" className={`label gap-2 cursor-pointer`}>
                  <span className="label-text">Female</span>
                  <input
                    type="checkbox"
                    className="checkbox border-slate-900"
                    checked={gender === "female"}
                    onChange={() => setInputs({ ...inputs, gender: "female" })}
                  />
                </label>
              </div>
            </div>
            <Link
              to={"/login"}
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Already have an account?
            </Link>
            <div className="">
              <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
