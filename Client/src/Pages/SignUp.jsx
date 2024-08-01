import React, { useState } from "react";
import Warning from "../components/Random/Warning";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [pswdborder, setPswdborder] = useState("border-gray-300");

  const pswdcolor = `bg-slate-900 w-full rounded-lg border ${pswdborder} px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800`;

  const addUser = () => {
    axios
      .post("http://localhost:3000/rh/v1/user/signup", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("authorization", `Bearer ${response.data.token}`);
        alert(response.data.message);
        navigate("/dashboard");
      });
  };
  return (
    <div className=" bg-slate-900 flex text-gray-400 justify-center h-screen items-center">
      <div className="w-100 rounded-2xl ">
        <div className="flex flex-col gap-5 p-8">
          <p className="text-center text-3xl text-gray-300 mb-4">Sign-Up</p>
          <div className="flex gap-5">
            <input
              className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="First-Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="Last-Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <input
            className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            className={pswdcolor}
            placeholder="Confirm password"
            onChange={(e) => {
              if (password != e.target.value) {
                console.log(e.target.value);
                setPswdborder("border-red-500");
              } else {
                setPswdborder("border-gray-300");
              }
            }}
          />
          <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
            Accept terms of use
            <div className="relative inline-block">
              <input
                className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                type="checkbox"
                onChange={(e) => {
                  setTerms(e.target.checked);
                }}
              />
              <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
            </div>
          </label>
          <button
            onClick={addUser}
            className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95"
          >
            Sign-Up
          </button>
          <Warning
            warning={"Already Have an Account?"}
            onclickfn={() => {
              navigate("/signin");
            }}
            navi={"SignIn"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
