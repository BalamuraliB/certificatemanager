import { Button, FormGroup } from "@mui/material";
import React, { useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";

export default function CanvasSelector(props) {
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

  return (
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
          onChange={({ target: { files } }) => props.uploadFile(files)}
        />
      </Button>
      {props.fileName}
      <Button variant="contained" endIcon={<AddIcon />}>
        Add Name
      </Button>
      <Button variant="contained" endIcon={<AddIcon />}>
        Add Address
      </Button>
      <Button variant="contained" endIcon={<AddIcon />}>
        Add Date
      </Button>
    </FormGroup>
  );
}
