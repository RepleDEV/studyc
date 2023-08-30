module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: 
    // Okay look, WHAT THE FUCK? WHY ARE THERE SO MANY ESM MODULES? I HAVE TO UNFILTER EVERYTHING HERE?
    // I know it takes a million years to do jest but im LAZY to manually fill all this crap
    [`node_modules/(?!(gatsby|gatsby-script|gatsby-link|react-markdown|vfile|vfile-message|(unist.*)|unist-util-is|unified|bail|is-plain-obj|trough|(remark.*)|(mdast.*)|(micromark.*)|decode-named-character-reference|trim-lines|property-information|(hast.*)|space-separated-tokens|comma-separated-tokens|longest-streak|(rehype.*)|web-namespaces)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
}