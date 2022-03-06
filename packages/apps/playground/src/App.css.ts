import { style } from "@vanilla-extract/css";

export const app = style({
  alignItems: "center",
  backgroundColor: "black",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
});

export const buttonContent = style({
  backgroundColor: "#FFF",
  border: "1px solid red",
  borderRadius: "8px",
  height: "42px",
  padding: "0 24px",
  position: "relative",
  selectors: {
    "&[data-state-loading='true']": {
      backgroundColor: "red",
    },
  },
});

export const buttonIcon = style({
  selectors: {
    [`${buttonContent}[data-state-loading='true'] &`]: {
      display: "none",
    },
  },
});

export const buttonText = style({
  selectors: {
    [`${buttonContent}[data-state-loading='true'] &`]: {
      display: "none",
    },
  },
});

export const buttonLoadingContent = style({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%",
});
