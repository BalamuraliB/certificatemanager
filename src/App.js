/*global event*/
/* eslint no-restricted-globals: ["error", { name: "event", message: "Use local parameter instead." }] */

import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import { Button, Container, FormGroup, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function App() {
  const [fileName, setFileName] = useState("");
  const uploadFile = (files) => {
    if (files[0]) {
      setFileName(files[0].name);
      console.log(`files:::${JSON.stringify(files[0])}`);
      const canvas = document.getElementById("test");

      canvas.width = 720;
      canvas.height = 500;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = (event) => {
        // URL.revokeObjectURL(event.target.src);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Once it loaded the resource, then you can free it at the beginning.
      };
      img.src = URL.createObjectURL(files[0]);
    }
  };
  return (
    <Container>
      'Balamurali'
      <Grid container spacing={2}>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <FormGroup>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                onChange={({ target: { files } }) => uploadFile(files)}
              />
            </Button>
            {fileName}
            <Button variant="contained" endIcon={<AddIcon />}>
              Add Text
            </Button>
          </FormGroup>
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <canvas id="test" style={{}} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
