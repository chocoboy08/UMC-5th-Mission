import React, { useState } from "react";
import Ad from "./Ad";
import AdImg from "../../assets/Ad.svg";
import { styled } from "styled-components";

const Img = styled.img({
  width: "100%",
});
function AdPage() {
  const [showAd, setShowAd] = useState(false);
  const handleAdClick = () => {
    setShowAd(!showAd);
  };
  return (
    <div>
      {showAd ? <Img src={AdImg} /> : undefined}
      <Ad showAd={showAd} onClick={handleAdClick} />
    </div>
  );
}

export default AdPage;
