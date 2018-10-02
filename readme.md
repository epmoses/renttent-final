# RentTent


![](https://github.com/epmoses/renttent-final/blob/master/img/landing-page-min.png)


RentTent is an user interactive, mock campground rental service. Its purpose is to demonstrate my knowledge of Node.js, RESTful routing, Express, MongoDB, and related dependencies.

## Features

**Front-end:** Bootstrap 4, Modernizr, EJS

**Database:** MongoDB

**Back-end:** Node.js

**NPM Packages/Dependencies:** Body parser, Connect flash, Express, Express session, Method override, Mongoose, Passport, Passport local, Passport local mongoose

## How it Works

Once the user clicks, "View All Campgrounds," they are directed to the show page, which lists all the campgrounds. The user can add a new campground only if they have signed up and are logged in. The user only needs to provide a username and password. The admin code is only for the admin user and can be left blank.


![](https://github.com/epmoses/renttent-final/blob/master/img/login-form-min.JPG)


![](https://github.com/epmoses/renttent-final/blob/master/img/show-page-min.JPG)


If a user clicks "More Info," they are directed to the view of the individual campground page. If the campground was created by that user, then they also have the option to edit or delete the campground. This is where they would edit the campground, view, or add a comment. Like campgrounds, users can only edit comments they create.

## Try it out
Here's a working example:

Note: Please be nice. 

### Acknowledgments

This app is a modified version of Colt Steele's YelpCamp app from his Web Developer Bootcamp course. 