import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

function ServiceContent(props) {
  return (
    <Grid xs={4}>
      <Card>
        <CardMedia sx={{ height: 250 }} image={props.imgSrc} title="green iguana" />
        <CardContent>
          <p>{props.content}</p>
        </CardContent>
        <CardActions>
          <Button className="button" target="_blank" href={props.url}>
            Share
          </Button>
          <Button className="button">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ServiceContent;
