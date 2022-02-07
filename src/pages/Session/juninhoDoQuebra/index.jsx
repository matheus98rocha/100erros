import React from "react";
import Header from "../../../components/Header";
import ImageSlider from "../../../components/ImagerSlider/ImageSlider";
import { JuninhoDoQuebra } from "../../../data/session/juninhoDoQuebra";

function index() {
  return (
    <div
      className="juninhoDoQuebra"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Header />
      <ImageSlider slides={JuninhoDoQuebra} data={JuninhoDoQuebra} />
    </div>
  );
}

export default index;
