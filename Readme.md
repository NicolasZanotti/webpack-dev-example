# Webpack Develoment Server Example

This example shows the usage of the Webpack development middleware for Koa together with hot reloading.

## Installation

Using Node.js
	
	npm install
	npm start

Using Gygdev:

	gygdev config enable webpack-dev-example --repo git@github.com:NicolasZanotti/webpack-dev-example.git
	gygdev up
	gygdev tunnel webpack-dev-example web 3000:3000
	

## Testing

Visit localhost:3000 and edit the message in `src/hello.js`. You should see it immediatly upate in the browser.

If the display does not update while using Gygdev, check the logs if changes to the file system are correctly captured. Webpack should display a message with each update.

	gygdev logs webpack-dev-example web --follow --timestamps
