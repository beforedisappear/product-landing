export const getDict = () =>
  import("./dict.json").then((module) => module.default);
