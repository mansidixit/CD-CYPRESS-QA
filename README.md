
Please find the Manual Test cases at :  https://docs.google.com/spreadsheets/d/1BwG8e-cSYU_ecEp2U0411O736Ela2bFMXUlgtB-B29Y/edit#gid=0

The test cases from the sheet that have been automated are marked in the column to maintain traceability. The test architecture is based on Page Object Model.

**How to run the tests?**

1. Install node >18 version
2. Install cypress
3. Clone this project into your local
4. run **npm install** in the project folder in your terminal and that will install all the required packages including cypress.
5. Now from the terminal just run of the commands
      - npx cypress open -> to open the cypress UI and see all the tests as they run
      - npm run runCyTests -> to run cypress in browser
      - npm run runCyTestsHeadless -> to run cypress in headless mode
6. To generate report run both the scripts mentioned below
      - npm run report:merge -> merges all the seperate json files into one file
      - npm run report:generate -> generates an html report file from the merged json file 
