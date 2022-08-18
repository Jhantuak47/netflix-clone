import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {

    try {
      await logOut();
      navigate("/register")
    } catch (error) {
      console.log(error)
    }
    
  }

  let conditionNav = (
    <div>
      <Link
        className="
             text-white mr-2 
            px-6 
            py-2
            rounded"
        to="/login"
      >
        Sign In
      </Link>
      <Link
        className="
            bg-red-600 px-6 py-2 
            text-white
            rounded"
        to="/register"
      >
        Sign Up
      </Link>
    </div>
  );

  if (user) {
    conditionNav = (
      <div>
        <Link
        className="
             text-white mr-2 
            px-6 
            py-2
            rounded"
        to="/account"
      >
        Account
      </Link>
        <button
          className="
          bg-red-600 px-6 py-2 
          text-white
            rounded"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-between p-4 absolute z-[100] w-full">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        {" "}
        NETFLIX{" "}
      </h1>
      {conditionNav}
    </div>
  );
}

export default Navbar;
