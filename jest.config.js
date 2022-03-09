module.exports ={
    moduleDirectories: [
        'node_modules',
      // add the directory with the test-utils.js file, for example:
       '__test__' // a utility folder
      ],
    setupFilesAfterEnv:["./jest-setup.ts"],
    testEnvironment: 'jest-environment-jsdom',
    
    moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/components$1"
      }
}