import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import requests from "../Request";

function Main() {
  const [movies, setMovies] = useState([]);
  const [configuration, setConfiguration] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });

    axios.get(requests.requestConfiguration).then((res) => {
      setConfiguration(res.data);
    });
  }, []);
  
  const prepareImgUrl = (originalSize) => {
    const backdropSize = ["w200", "w780", "w1280", "original"];
    let size = configuration.images?.backdrop_sizes.find(
      (size) => size === originalSize
    )
      ? originalSize
      : backdropSize[backdropSize.length - 1];
    let baseUrl = configuration.images?.base_url;

    return `${baseUrl}/${size}/${movie?.backdrop_path}`;
  };

  const truncateString = (str, num) => {

     if (str?.length > num) {
      return str.slice(0,num) + '...';
     }

     return str;
  }

  return (
    <>
      <div className="text-white w-full h-[550px]">
        <div className="w-full h-full">
          <div
            className="
              absolute w-full h-[550px] 
              bg-gradient-to-r
              from-black
              "
          ></div>
          <img
            className="w-full h-full object-cover"
            src={prepareImgUrl("original")}
            alt={movie?.title}
          />

          <div className="buttons
           absolute 
           top-[20%] 
           p-4
           md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold">{movie?.title}</h1>
            <div>
              <button
                className="
                  border
                  px-5 py-2
                  bg-gray-300
                  border-gray-300
                  text-black
                  "
              >
                Play
              </button>
              <button
                className="
                  border
                  px-5 py-2
                  border-gray-300
                  text-white
                  ml-4
                  "
              >
                Watch Later
              </button>
              <p className="mt-1 text-gray-400">Release:{movie?.release_date}</p>
              <p
                className="w-full
                  md:max-w-[70%]
                  lg:max-w-[50%]
                  xl:max-w-[35%]
                  text-gray-200
                "
              
              >{truncateString(movie?.overview, 150)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
