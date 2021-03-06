module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$":
      "<rootDir>/src/__mocks__/file.ts",
    "\\.(css)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.tsx"],
  testPathIgnorePatterns: [".cache", "node_modules", "dist"],
  globals: {
    __PATH_PREFIX__: "",
    "ts-jest": {
      tsconfig: "tsconfig.json",
      babelConfig: true,
    },
  },
  testURL: "http://localhost/",
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest.preprocess.js",
  },
};
