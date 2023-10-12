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
  //   useEffect(() => {
  //     async function GetMovies() {
  //       const res = await axios.get(
  //         "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=0ba952f81b9c1ca38f908b0236233a89&targetDt=20231011&itemPerPage=8"
  //       );
  //       const movieList = res.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm;

  //     }
  //     GetMovies().then(() => {
  //       console.log(movies);
  //     });
  //   }, []);
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
