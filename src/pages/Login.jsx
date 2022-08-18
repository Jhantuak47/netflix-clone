import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext"

function Login() {
  const [formElement, setformElement] = useState({});
  const [error, setError] = useState("");

  const { logIn }  = UserAuth();
  const navigate = useNavigate();

  function updateFormData(event) {
    const target = event.target;
    setformElement({
      ...formElement,
      [target.name]: target.value,
    });
  }

  const saveFormData = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(formElement.email, formElement.password);
      navigate('/');
    } catch (err) {
      setError(err.message)
      console.log(err)
    }
  }

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/327506e9-f0a6-4ae6-8115-97ea4c94268d/IN-en-20220808-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgimg"
        />
        <div className="bg-black/60 h-full w-full fixed"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="bg-black/75 max-w-[450px] h-[600px] mx-auto text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className="bg-red-500 p-3 mt-4">{error}</p>: null}
              <form className="flex w-full flex-col py-4" onSubmit={saveFormData}>
                <input
                  className="my-2 p-3 bg-gray-600 rounded"
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={updateFormData}
                />
                <input
                  className="my-2 p-3 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current_password"
                  name="password"
                  onChange={updateFormData}
                />
                <button className="bg-red-600 rounded py-3 my-6 font-bold">
                  Sign In
                </button>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>
                    <input className="mr-1" type="checkbox" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-sm text-gray-600">
                    Not Yet subscribe to netflix?
                  </span>{" "}
                  <Link to="/register">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
