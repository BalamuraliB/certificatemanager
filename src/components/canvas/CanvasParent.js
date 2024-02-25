import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import CanvasSelector from "./CanvasSelector";
import Canvas from "./Canvas";

export default function CanvasParent() {
  const [canvasProps, setCanvasProps] = useState({
    width: 500,
    height: 500,
    fileName: "",
    backGroundImage: null,
  });
  const uploadFile = (files) => {
    if (files[0]) {
      setCanvasProps({
        ...canvasProps,
        fileName: files[0].name,
        backGroundImage: files[0],
      });
    }
  };
  return (
    <Container>
      'Balamurali'
      <Grid container spacing={2}>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <CanvasSelector
            uploadFile={uploadFile}
            fileName={canvasProps.fileName}
          />
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Canvas styleProps={canvasProps} />
        </Grid>
      </Grid>
    </Container>
  );
}
