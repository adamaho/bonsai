module.exports = {
  extends: ["prettier"],
  settings: {
    next: {
      rootDir: ["packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};
