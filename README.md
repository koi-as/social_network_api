# Social Network API

## Description 

As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data

GIVEN a social network API

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

To use this application, you will first need to install the necessary npm packages. In your terminal, run the command **`npm i`** to install the softwares necessary 

## Usage

To initialize the application, run the command **`node server.js`** in your terminal.

Next, in an API interface, use the route **`localhost:4001/`** *(or whichever port appears in the terminal)* as a base to use the other routes
