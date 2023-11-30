import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Content from "./components/Content";
import { movies } from "../assets/movieList";

const Background = styled.div({
  width: "100%",
});
const ContentsContainer = styled.div({
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
      <ContentsContainer>
        {MOVIES.map((item) => {
          return (
            <Content
              title={item.title}
              img={item.poster_path}
              rate={item.vote_average}
              detail={item.overview}
              key={`Movies-item-${item.title}`}
            />
          );
        })}
      </ContentsContainer>
    </Background>
  );
}

export default Movies;
