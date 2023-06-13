import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

function ServiceContent(props) {
  const [viewMoreAndLess, setViewMoreAndLess] = useState(false);
  return (
    <Grid xs={4}>
      <Card className="card-control">
        <CardMedia sx={{ height: 250 }} image={props.imgSrc} title="green iguana" />
        <div className="card-content-holder">
          <CardContent>
            <p className={viewMoreAndLess ? "view-full" : null}>{props.content}</p>
          </CardContent>
          <CardActions>
            <Button className="button" target="_blank" href={props.url}>
              Share
            </Button>
            <Button
              className="button"
              onClick={() => {
                setViewMoreAndLess((current) => !current);
              }}
            >
              Learn More
            </Button>
          </CardActions>
        </div>
      </Card>
    </Grid>
  );
}

export default ServiceContent;
