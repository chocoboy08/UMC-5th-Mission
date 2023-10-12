import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Movie from "./Movie";
import axios from "axios";
import { movies } from "./movies";

const Background = styled.div({
  width: "100%",
  backgroundColor: "darkblue",
});
const MovieContainer = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(2,1fr)",
  gridTemplateColumns: " repeat(8,1fr)",
  justifyContent: "center",
  alignItems: "center",
});

function MovieList() {
  return (
    <Background>
      <MovieContainer>
        {movies.results.map((item) => {
          return (
            <Movie
              title={item.title}
              img={item.poster_path}
              rate={item.vote_average}
              detail={item.overview}
            />
          );
        })}
      </MovieContainer>
    </Background>
  );
}

export default MovieList;
