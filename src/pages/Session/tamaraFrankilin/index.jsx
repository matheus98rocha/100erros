import React from "react";
import Header from "../../../components/Header";
import ImageSlider from "../../../components/ImagerSlider/ImageSlider";
import { TamaraFrankilin } from "../../../data/session/tamara-frankilin";

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
      <ImageSlider slides={TamaraFrankilin} data={TamaraFrankilin} />
    </div>
  );
}

export default index;
