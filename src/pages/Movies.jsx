import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Movie from "../movie/Movie";
import { movies } from "../movie/movieList";

const Background = styled.div({
  width: "100%",
});
const MovieContainer = styled.div({
  display: "grid",
  gridTemplateRows: "repeat(2,1fr)",
  gridTemplateColumns: " repeat(8,1fr)",
  justifyContent: "center",
  alignItems: "center",
});

function Movies() {
  const MOVIES = movies.results;
  return (
    <Background>
      <MovieContainer>
        {MOVIES.map((item) => {
          return (
            <Movie
              title={item.title}
              img={item.poster_path}
              rate={item.vote_average}
              detail={item.overview}
              key={`Movies-item-${item.title}`}
            />
          );
        })}
      </MovieContainer>
    </Background>
  );
}

export default Movies;
