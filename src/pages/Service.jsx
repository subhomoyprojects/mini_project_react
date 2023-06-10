import React from "react";
import { Container } from "@mui/material";
import ServiceContent from "./ServiceContent";
import DummyData from "../assets/DummyData";
import Grid from "@mui/material/Unstable_Grid2";

function Service(props) {
  return (
    <>
      <div className="card-holder">
        <Container>
          <Grid container spacing={2}>
            {DummyData.serviceData.map((item, index) => {
              return <ServiceContent key={item.id} imgSrc={item.img} content={item.content} url={item.link} />;
            })}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Service;
