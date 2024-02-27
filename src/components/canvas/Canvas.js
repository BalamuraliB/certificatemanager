import React, { useEffect } from "react";
import { Button } from "@mui/material";
import html2canvas from "html2canvas";

export default function Canvas(props) {
  function drawText(ctx, text, centerX, centerY, fontsize, fontface) {
    ctx.save();
    ctx.font = fontsize + "px " + fontface;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, centerX, centerY);
    ctx.restore();
  }

  function getSnapShot() {
    html2canvas(document.getElementById("certificate-canvas-div")).then(
      function (canvas) {
        var img = canvas.toDataURL("image/png");
        var newTab = window.open("about:blank", "image from canvas");
        newTab.document.write("<img src='" + img + "' alt='from canvas'/>");
      }
    );
  }

  useEffect(() => {
    const canvas = document.getElementById("certificate-canvas");
    canvas.width = props.styleProps.width;
    canvas.height = props.styleProps.height;
    const canvasDiv = document.getElementById("certificate-canvas-div");
    canvasDiv.style.width = props.styleProps.width;
    canvasDiv.style.height = props.styleProps.height;
    const heading = document.createElement("h1");
    heading.innerHTML = "Bala";
    canvasDiv.appendChild(heading);
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = (event) => {
      URL.revokeObjectURL(event.target.src);
      canvasDiv.style.background = "url('" + img.src + "')";
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Once it loaded the resource, then you can free it at the beginning.

      drawText(ctx, "balamurali", 50, 50, 10, "verdana");
      //var dataURL = canvas.toDataURL("image/png");
    };
    img.src =
      props.styleProps.backGroundImage &&
      URL.createObjectURL(props.styleProps.backGroundImage);
  }, [props.styleProps]);

  return (
    <div id="canvas-parent" style={{ border: "black", display: "flex" }}>
      <canvas id="certificate-canvas"></canvas>
      <div id="certificate-canvas-div" style={{ position: "absolute" }}>
        Test
      </div>
      <Button onClick={getSnapShot}>Downnload</Button>
    </div>
  );
}
