Packages Included

Build: Webpack, Babel (es2015 and React), webpack-dev-server


Front-end: React

How to Run Things

*Install all dependencies:

npm install

*Run webpack:

npm run webpack

*Automatically run webpack when files change:

npm run webpack:watch

Run webpack-dev-server (master branch is configuration for Cloud9. local branch has configuration for running on localhost).

You don't need to run webpack:watch if you are running the dev server.

npm run webpack-dev-server

*production

npm run webpack:prod




*Application details:

A simple front-end application that uses the Youtube API to build an app that has the following workflow:

-Users have an input to search a video. After hitting submit, a list of the top 5 possible videos will appear. When the user selects one of the videos, it will be played
