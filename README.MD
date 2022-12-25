Installation:

1. NodeJS-Download | Node.js
   a. Select stable LTS version for Windows 64 bit
   b. Verify node and npm version by using node -v and npm -v on command prompt

2. NPM: Node Package Manager, which is an application and repository for developing and sharing JavaScript code. This will be installed along with NodeJS

3. IDE
   a. Intellij Idea Ultimate Edition: Make sure below listed 2 plugins are installed with it (To check it: Press Ctrl+Alt+S to open the IDE settings and select “Plugins”. Click the “Installed” tab, & make sure JavaScript & TypeScript plugins are listed. If not then search for “JavaScript and TypeScript” bundled plugin and install it)
   i. JavaScript Plugins
   ii. TypeScripts Plugins

4. Install Cypress: npm install cypress --save in IDE terminal/Git Bash

Project download link and setup:

1. Clone the project
2. Open the project in IDE.
3. To navigate to cypress - In terminal, open cypress folder - cd cypress
4. Do an npm install or yarn install (if npm or yarn is not available in your local, please download them)
5. The above step downloads the dependencies required to run any cypress test.

Test Execution:

1. Run locally
   To execute the cypress tests locally with browser instance open and if the user wants to select the test cases manually, use the below command
   a. npx cypress open
   b. Click E2E Testing
   c. Select Electron and click Start E2E Testing in Electron
   d. Click Specs from the side nav bar
   e. Click amazon-home.spec.ts then test will run on Cypress dashboard.
