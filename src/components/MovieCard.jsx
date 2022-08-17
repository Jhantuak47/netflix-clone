import React, { useEffect, useState } from "react";
import { prepareImgUrl } from "../services/moviesUtilService";
import requests from "../Request";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";

function MovieCard({ movie = [] }) {
  const [configuration, setConfiguration] = useState([]);
  const [like, seLlike] = useState(false);

  useEffect(() => {
    axios.get(requests.requestConfiguration).then((res) => {
      setConfiguration(res.data);
    });
  }, []);

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer  relative p-2">
        <img
          src={prepareImgUrl(configuration, "original", movie)}
          alt={movie?.title}
        />
        <div className="absolute w-full h-full top-0 left-0 text-white p-2 opacity-0 hover:opacity-100 hover:bg-black/80">
          <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {movie?.title}
          </p>
          <p>
            {like ? (
              <FaHeart className="absolute top-4 left-4 text-gray-300" />
            ) : (
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
