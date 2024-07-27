import React, { useContext } from "react";
import Heading from "../components/Landing/Heading";
import Navbar from "../components/Landing/Navbar";
import LoadingSpinner from "../components/Random/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ fontFamily: "Outfit" }}
      className="h-screen bg-gradient-to-t from-violet-950 flex flex-col"
    >
      <Navbar />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-10 justify-center items-center">
          <Heading />
        </div>
        <div className="m-1 flex justify-center items-center relative top-24">
          <button
            onClick={() => {
              navigate("/contact");
            }}
            class="group/button relative inline-flex items-center w-fit justify-center overflow-hidden rounded-md bg-violet-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-violet-600/50 border border-white/20"
          >
            <span class="text-2xl flex items-center">
              About Developer{" "}
              <img className="w-[50px]" src="/public/arrow.svg" alt="" />
            </span>
            <div class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div class="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
