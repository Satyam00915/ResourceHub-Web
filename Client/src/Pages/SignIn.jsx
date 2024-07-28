import React from "react";
import Input from "../components/Random/Input";
import Button from "../components/Random/Button";
import Warning from "../components/Random/Warning";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-slate-900 flex justify-center h-screen items-center">
      <div className="w-80 rounded-2xl ">
        <div className="flex flex-col gap-5 p-8">
          <p className="text-center text-3xl text-gray-300 mb-4">Register</p>
          <input
            className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Email"
          />
          <input
            className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Password"
          />
          <input
            className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Confirm password"
          />
          <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
            Accept terms of use
            <div className="relative inline-block">
              <input
                className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                type="checkbox"
              />
              <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
            </div>
          </label>
          <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
            Register
          </button>
          <Warning
            warning={"Don't Have an Account?"}
            onclickfn={() => {
              navigate("/signup");
            }}
            navi={"Sign-Up"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
