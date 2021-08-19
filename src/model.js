import image from "./assets/image.jpg";
import {
  TitleBlock,
  TextBlock,
  ImageBlock,
  ColumsBlock,
} from "./classes/blocks";

export const model = [
  new TitleBlock("Hello World from JS45", {
    tag: "h2",
    // styles: ` linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center;padding: 1.5rem`,
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),

  new TextBlock("here we go with some text", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),

  new ColumsBlock(["1111111111", "2222222222", "33333333333", "46584948654"], {
    styles: {
      background: "linear-gradient(to bottom, #8e2de2, #4a00e0",
      padding: "2rem",
      color: "#fff",
      "font-weight": "bold",
    },
  }),

  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
  }),
];
