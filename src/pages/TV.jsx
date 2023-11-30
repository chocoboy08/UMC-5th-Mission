import React from 'react'
import { styled } from 'styled-components';
import { Programs } from '../assets/tvDummy.js';
import Content from './components/Content'
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
function TV() {
  const PROGRAMS = Programs.results;
  return (
    <Background>
      <ContentsContainer>
        {PROGRAMS.map((item) => {
          return (
            <Content
              title={item.name}
              img={item.poster_path}
              rate={item.vote_average}
              detail={item.overview}
              key={`Programs-item-${item.title}`}
            />
          );
        })}
      </ContentsContainer>
    </Background>
  )
}

export default TV