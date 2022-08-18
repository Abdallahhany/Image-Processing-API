# Image Processing API
## This is the first project of Udacity Nanodegree (Egypt FWD Web Development Advanced Specialization Track)
## Overview:
### It's a simple Node - Express application used for resizing images located in folder and save them
### In this project I used:
`TypeScript for writing Node js Code` 

`Express for building Node js Server`

`fs to deal with filesystem`

`Unit testing using jasmine`

`jasmine and supertest for testing end points`

`Eslint and prettier for formating my code`

`Sharp for resizing images`

### How to use the project:
#### 1- Clone the repo:
```
$ git colne https://github.com/Abdallahhany/Image-Processing-API
```
#### 2- install required dependencies :
```
$ npm install
```
#### 3- Run the server :
```
$ npm run start
```
## Scripts:
Run Eslint
```
$ npm run lint
```
Run prettier
```
$ npm run prettier
```
Run tests
```
$ npm run test
```
Build the project
```
$ npm run build
```
Start the application
```
$ npm run start
```
### Examples:
`http://localhost:3000/api/images`

will return the available images to use and thumbed images related to each image

`http://localhost:3000/api/allImages?imageName=fjord&width=150&height=150`

will return fjord image with width = 150 and height = 150
## Author :
### _Abdallah Rashed_