export default {
  esm: "rollup",
  cjs: "rollup",
  umd: {
    name: "foo",
    minFile: true,
    globals: {
      react: "React",
    },
  },
};
