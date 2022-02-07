import React from "react";
import Header from "../../../components/Header";
import ImageSlider from "../../../components/ImagerSlider/ImageSlider";
import { LucasRasta } from "../../../data/session/lucasRasta";

function index() {
  return (
    <div
      className="lucasRasta"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <ImageSlider slides={LucasRasta} data={LucasRasta} />
    </div>
  );
}

export default index;
