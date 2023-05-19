# Business Data Visualization React App

This is a React application for visualizing business data through interactive charts. It allows users to input data and generate different types of charts based on their choices.

## Features
- User-friendly interface for data input
- Real-time updates of charts based on data changes
- Support for various chart types: bar chart, line chart, and pie chart
- Support for downloading chart types: bar chart, line chart, and pie chart

## Technologies and Libraries Used
- React: JavaScript library for building user interfaces
- HTML and CSS: Used for the UI design
- styled-components: Library for styling React components
- Chart.js: JavaScript charting library for creating interactive charts
- XlSX: Library for reading, writing, and manipulating Excel files in JavaScript.
- html2canvas: JavaScript library for capture elements from the HTML page and perform operations such as or exporting them as an image.

## Installation and Setup
To run the application locally, follow these steps:
  - Ensure you have Node.js and npm (Node Package Manager) installed on your machine.
  - Clone this repository to your local machine using the git command: git clone _repository
  - Navigate to the project directory: cd _project
  - Install the project dependencies by running: npm install
  - Start the development server: npm start
  - Open a web browser and visit http://localhost:? to access the application.

## Short video demonstrating the functionality of the application
- https://www.youtube.com/watch?v=1ZHGFt2a9vE
- https://www.youtube.com/watch?v=RbmALYWBE9g&t=17s

# STRUCTURE:
## SOURCES:

 - Assets: 
 	- css, 
 	- fonts, 
 	- icons, 
 	- images: 
 		- logo.png, 
 		- metrics.png, 
 		- stickerpen.png, 
 		- mixins, 
 		- sasss, 
 		- svg, 
 		- variables
 
 - Components: 
	- Navigation: index.js, layouts.js
	- Header: index.js
	- Footer: index.js, layouts.js
	- Home-Hero: index.js, layouts.js
	- Home-First-Article: index.js, layouts.js
	- Home-Second-Article: index.js, layouts.js
	- Home-Third-Article: index.js, layouts.js
	- Functions: 
		- generateAccordion.js, 
		- generateAccordion2.js, 
		- generateCharts.js
		- generateInputs.js, 
		- generateDataUpload.js
		- generateLiveData.js
	- Type-Display: 
		- index.js: (3)functions: generateAccordion2.js, generateCharts.js, generateInputs.js
	- Upload-Display: 
		- index.js: (3)functions: generateAccordion.js, generateCharts.js, generateDataUpload.js
	- Real-Time-Display: 
		- index.js: (3)functions: generateAccordion2.js, generateCharts.js, generateLiveData.js
	
 - Layouts: index.js, layouts.js
 
 - Pages:
	- home.js: 
		- 4.Home-Hero, 
		- 5.Home-First-Article, 
		- 6.Home-Second-Article, 
		- 7.Home-Third-Article
	- typing-visualization.js: 
		- 9.Type-Display: 
			-index.js
	- upload-visualization.js: 
		- 10.Type-Display: 
			- index.js
	- real-time-visualization.js: 
		- 11.Real-Time-Display: 
			- index.js

## PACKAGES:
 - npm install @emotion/react @emotion/styled 
 	- this package is used for styling in React applications that use Emotion as the CSS-in-JS library.
 - npm install react-chartjs-2 chart.js
 	- registering the Chart.js packages
 	- If error occurs: 
 		- npm uninstall chart.js react-chartjs-2
		- npm install chart.js@3.6.2 react-chartjs-2@3.0.4
 - npm install xlsx
 - npm install core-js xlsx-style
 - npm install html2canvas
 	- library that can capture the content of an HTML element, including the chart, and generate an image.


### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
