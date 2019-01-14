module.exports = {
  preset: "ts-jest",
  roots: ["./src"],
  testMatch: null,
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*)\\.test\\.(tsx?)$",
  moduleFileExtensions: ["ts", "js", "json", "node"]
};
