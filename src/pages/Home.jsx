import React from "react";
import Container from "@mui/material/Container";
import Common from "./Common";
import DummyData from "../assets/DummyData";

function Home(props) {
  return (
    <div className="main-holder">
      <Container maxWidth="lg">
        <Common
          ImgUrl={DummyData.img1}
          content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          praesentium ullam nesciunt dignissimos illo ad quaerat, eaque sint
          sapiente facilis nisi expedita dolore rem ut, quos distinctio ipsum
          alias deleniti.`}
          title={"I am Home page"}
        />
      </Container>
    </div>
  );
}

export default Home;
