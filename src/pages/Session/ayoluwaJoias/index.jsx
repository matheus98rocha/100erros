import React from "react";
import Header from "../../../components/Header";
import ImageSlider from "../../../components/ImagerSlider/ImageSlider";
import { AyoluwasJoias } from "../../../data/session/AyoluwasJoias";

function index() {
  return (
    <div
      className="b1b2"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <ImageSlider slides={AyoluwasJoias} data={AyoluwasJoias} />
    </div>
  );
}

export default index;
