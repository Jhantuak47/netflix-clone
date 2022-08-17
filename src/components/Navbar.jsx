import React from "react";

function Navbar() {
  return (
    <div className="
        flex 
        justify-between 
        p-4
        absolute
        z-[100]
        w-full">
      <h1
        className="
        text-red-600 
        text-4xl 
        font-bold 
        cursor-pointer"
      >
        NETFLIX
      </h1>
      <div>
        <button
          className="
            text-white mr-2 
            px-6 
            py-2
            rounded"
        >
          Sign In
        </button>
        <button
          className="
            bg-red-600 px-6 py-2 
            text-white
            rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
