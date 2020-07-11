import React from "react";
import Button from "./Button";
import { withKnobs, text } from "@storybook/addon-knobs";

export default { title: "Button", decorators: [withKnobs] };

export const multiSizeButton = () => {
  return (
    <>
      <Button size={text("size", "small")} text={text("text", "Click Me!")} />
    </>
  );
};
