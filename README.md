Link to live version: https://laminate-flooring-calculator.pages.dev/

# Laminate flooring calculator

The problem:
When installing laminate flooring, installers generally do not want the far wall(s) to end up with a thin width of laminate plank.  Additionally, they do not want to wrap around a corner and only have a thin plank.  Traditionally these calculations, while not difficult, are done by hand.  While installing my own flooring, I had over 10 surfaces to consider.  Adjusting the starting point and having to recalculate all of the end points used unnecessary amounts of my time.

This project is designed to help a laminate flooring install optimize the starting point for installation.  It allows the user to enter mulitple measurements from the startingpoint, to endpoints.  It will calculate the width of the plank at the endpoint.  In addition, it will allow the user to set a measurement to be a wraparound type so rather than calculating the thickness of the last piece, it tells the user the width of the plank that will be going around a corner.  The user then has the ability to adjust the offset from the starting point which will adjust the end point widths.  Visually for each measurement the user will see their measurements colored to alert them when the width is good, borderline or bad.  The user should adjust the offset to reduce the number of red/orange colored measurements.

Future features:
-measurements from starting point backward toward the starting side wall
-improved UI/UX
-hover tips to assist user with using the calculator
-welcome page that explains the basics of measurements, and more in-depth on how to use the calculator
-ability to measure row lengths to avoid having short length pieces at the ends of rows
-auto-optimization button that will run through offset scenarios and suggest the most optimal offset.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`

installs the necessary node package.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
