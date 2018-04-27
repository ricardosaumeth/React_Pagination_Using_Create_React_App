## Usage

```
npm install
npm run start
npm run test
```

This is the implementation of the project using Create React App and run Jest without any issue. Please use this project to see
the unit tests. 

## Rationale

I created two projects:

The original project uses React 15 and I got to many issues trying to install enzyme or Test Utilities. 
This project was originally created using an old version of React. I spent 2 hours trying 
to run the unit test using enzyme and no luck. I installed react-test-renderer@15 and enzyme enzyme-adapter-react-15 and the jest-cli completely crashes. I reversed these changes and the app works **but the unit tests that need enzyme do not work** 

**If you want to see my implementation with the original packages from Soreto (React15), please go to: https://github.com/ricardosaumeth/React_Pagination_Exercise**


