import React, { useEffect } from "react";

export default function Canvas(props) {
  useEffect(() => {
    const canvas = document.getElementById("certificate-canvas");
    canvas.width = props.styleProps.width;
    canvas.height = props.styleProps.height;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = (event) => {
      URL.revokeObjectURL(event.target.src);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Once it loaded the resource, then you can free it at the beginning.
    };
    img.src =
      props.styleProps.backGroundImage &&
      URL.createObjectURL(props.styleProps.backGroundImage);
  }, [props.styleProps]);

  return (
    <div style={{ border: "black" }}>
      <canvas id="certificate-canvas" />
    </div>
  );
}
