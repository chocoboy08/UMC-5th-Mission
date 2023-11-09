import React, { useState } from "react";
import { styled } from "styled-components";

const AdBtn = styled.button({});
function Ad(props) {
  return (
    <AdBtn onClick={props.onClick}>
      {props.showAd ? "광고 안보기" : "광고 보기"}
    </AdBtn>
  );
}

export default Ad;
