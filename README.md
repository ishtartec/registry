# StudentsRegistry


## Overview
**Registry** is a webapp for student registration and data management. It is intended for internal usage only.

**Registry** is based on the latest web technologies:

* AngularJS
* Bootstrap 3
* Yeoman Generator with AngularJS + Fullstack Generator <https://github.com/DaftMonk/generator-angular-fullstack>
* Grunt + Node for server
* MongoDB
* WebStorm 9 Editor

## Initial steps
After cloning the git repository, get all dependencies by running:

	$ npm install
    $ bower install

## Configuration
The `server/app.js` file sets `development` or `production` mode

	// Set default node environment to development
	process.env.NODE_ENV = process.env.NODE_ENV || 'development';

	

## Run
For development purposes, just run:

	$ grunt serve
	
To build for production:

    $ grunt build
    
Then use the dist directory, but remember to modify `server/app.js` and `server/config/environment/production.js`

