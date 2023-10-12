import React, { useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div({ width: "10rem", position: "relative" });
const Detail = styled.div({
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0,0.5)",
  height: "100%",
  color: "white",
  //   padding: "20px 10px",
});
const Info = styled.div({
  overflow: "scroll",
  height: "40%",
  margin: "0 10px",
});
const Poster = styled.img({
  width: "100%",
  height: 240,
});
const Title = styled.div({});
const Rate = styled.div({});
const Group = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 8px",
  backgroundColor: "whitesmoke",
  height: "2.5rem",
});
function Movie({ title, img, rate, detail, ishover }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseHover = (e) => {
    if (e.type == "mouseenter") setIsHovering(true);
    else if (e.type == "mouseleave") setIsHovering(false);
    console.log(e);
  };
  return (
    <Wrapper onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
      {isHovering && (
        <Detail>
          <Title style={{ padding: "20px 10px" }}>{title}</Title>
          <Info>{detail}</Info>
        </Detail>
      )}
      <Poster src={"https://image.tmdb.org/t/p/w1280/" + img} />
      <Group>
        <Title>{title}</Title>
        <Rate>{rate}</Rate>
      </Group>
    </Wrapper>
  );
}

export default Movie;
