# Business Data Visualization React Application

This is a React application for visualizing business data through interactive charts and graphs. It allows users to input data and generate different types of charts based on their choices.

## Features
- User-friendly interface for data input
- Real-time updates of charts based on data changes
- Support for various chart types: bar chart, line chart, and pie chart
- Basic error handling for data input

## Technologies and Libraries Used
- React: JavaScript library for building user interfaces
- HTML and CSS: Used for the UI design
- styled-components: Library for styling React components
- Chart.js: JavaScript charting library for creating interactive charts

## Installation and Setup
To run the application locally, follow these steps:
  - Ensure you have Node.js and npm (Node Package Manager) installed on your machine.
  - Clone this repository to your local machine using the git command: git clone _repository
  - Navigate to the project directory: cd _project
  - Install the project dependencies by running: npm install
  - Start the development server: npm start
  - Open a web browser and visit http://localhost:? to access the application.

## Screenshots
- ..
-

## Demo Video
- ..


## PACKAGES:
 - npm install @emotion/react @emotion/styled 
 this package is used for styling in React applications that use Emotion as the CSS-in-JS library. To resolve this issue, you can follow these steps:
 
 - npm install react-chartjs-2 chart.js
  registering the Chart.js packages
 If error occurs: 
  npm uninstall chart.js react-chartjs-2
	npm install chart.js@3.6.2 react-chartjs-2@3.0.4
 
 - npm install xlsx
 - npm install core-js xlsx-style
 
 - npm install html2canvas
  library that can capture the content of an HTML element, including the 	chart, and generate an image.

## STRUCTURE:
# SOURCES:
 - Assets: css, fonts, icons, images: logo.png, metrics.png, stickerpen.png , mixins, sasss, svg, variables
 - Components: 
	1.Navigation: index.js, layouts.js
	2.Header: index.js
	3.Footer: index.js, layouts.js
	4.Home-Hero: index.js, layouts.js
	5.Home-First-Article: index.js, layouts.js
	6.Home-Second-Article: index.js, layouts.js
	7.Home-Third-Article: index.js, layouts.js
	8.Functions: 
		1.generateAccordion.js, 
		2.generateCharts.js
		3.generateInputs.js, 
		4.generateDataUpload.js
		5.generateLiveData.js
	9.Type-Display: index.js: generateAccordion.js, generateCharts.js, 				generateInputs.js
	10.Upload-Display: index.js: generateAccordion.js, generateCharts.js, 				generateDataUpload.js
	11.Real-Time-Display: index.js: generateAccordion.js, generateCharts.js, 		generateLiveData.js
	
 - Layouts: index.js, layouts.js
 - Pages:
	1.home.js: 4.Home-Hero, 5.Home-First-Article, 6.Home-Second-				Article, 7.Home-Third-Article
	2.typing-visualization.js: 9.Type-Display: index.js
	3.upload-visualization.js: 10.Type-Display: index.js
	4.real-time-visualization.js: 11.Real-Time-Display: index.js





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
