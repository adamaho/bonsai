import { style } from "@vanilla-extract/css";

export const app = style({
  alignItems: "center",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  height: "100vh",
  justifyContent: "center",
});

export const button = style({
  alignItems: "center",
  backgroundColor: "#FFF",
  border: "none",
  borderRadius: "8px",
  display: "flex",
  gap: "8px",
  height: "42px",
  justifyContent: "center",
  padding: "0 24px",
  position: "relative",
  selectors: {
    "&[data-state-loading='true']": {
      backgroundColor: "red",
    },
  },
});

export const buttonIcon = style({
  width: "20px",
  selectors: {
    [`${button}[data-state-loading='true'] &`]: {
      display: "none",
    },
  },
});

export const buttonText = style({
  fontSize: "16px",
  selectors: {
    [`${button}[data-state-loading='true'] &`]: {
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
