import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {
    let slider = document.getElementById("slides_" + title);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slides_" + title);
    slider.scrollLeft += 500;
  };

  return (
    <>
      <h2 className="text-white p-4 font-bold md:text-xl">{title}</h2>
      <div className="relative flex items-center group">
        <MdArrowLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full opacity-50 z-10 hover:opacity-80 absolute left-0 cursor-pointer hidden group-hover:block"
        />
        <div
          id={"slides_" + title}
          className="h-full w-full scroll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie) => (
            <MovieCard key={title} movie={movie} />
          ))}
        </div>
        <MdArrowRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full opacity-50 z-10 hover:opacity-80 absolute right-0 cursor-pointer hidden group-hover:block"
        />
      </div>
    </>
  );
}

export default Row;
