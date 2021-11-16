#### Bookmark!

# Project Summary

- This appliciation provides the user a storage solution for their bookmarked sites. The functionalities of this application are outlined below:

[Description - User Story]

# User Stories

- I can create a new bookmark and see that it loads on the page
- I can see a list of all my bookmarks when I visit the page
- click on one of my bookmarks and have it take me to the linked website
- delete a bookmark
- Able to update a bookmark in case I made a typo or the URL changed

## User Persona(s)

This approach follows the "Four Perspectives" method by Lene Nielsen outlined in interaction-design.org.

This is designed toward the the "Goal-Oriented" Persona, and is defined as follows: "...by its personal, practical, and company-oriented goals as well as by the relationship with the product to be designed, the emotions of the persona when using the product, and the goals of the persona in using the product (hence Goal-Directed)."

Thus, the desired outcome for this application is to provide the user a solution to sore therir their bookmarks, and will provide simple intiutive UI with the functions and features outlined below...

[Scope of Functionalities]

## Functions & Features

- Basic CRUD Functionality; User should be able to Create, Read, Update and Delete their stored information.

## Acceptance Criteria

To meet Minimum Viable Product, this application will provide:

- Detailed README
- Full CRUD functionality to its data model.
- Follow RESTful conventions
- Responsive Styling

- This Application will have its backend deployed on Heroku with its frontend deployed to Netlify.

## Intent & Desired Outcome

- A full functioning application that provides the user with a bookmark storage solution.

# Challenges

- detail roadblocks : There were some roadblocks encountered when attempting to deploy our apps to Heroku & Netlify. After some troubleshooting, We found that since we we pushing to another repo that we needed to pull from the master repo then push to our own since we were linking these services to our repsective repositories.

[Technologies]

## List of Technologies

Built with ReactJS, Node.js

Dependencies with versions outlined below:
"cors": "^2.8.5",
"dotenv": "^10.0.0",
"express": "^4.17.1",
"mongoose": "^6.0.12",
"morgan": "^1.10.0"

## Models

List here any models in your app and their properties:

const bookmarkSchema ({
website: "",
link: "",
)},

## Route Table

List your routes in a table

| url                | method | action                         |
| ------------------ | ------ | ------------------------------ |
| /Bookmark          | GET    | get all bookmarks (index)      |
| /bookmark/:id      | GET    | get individual bookmark(show)  |
| /bookmark/:id/edit | GET    | Show (edit) form               |
| /bookmark/new      | GET    | Show (new) bookmark form       |
| /bookmark          | POST   | Input bookmark, redirect home  |
| /bookmark/:id      | PUT    | Update bookmark, redirect home |
| /bookmark/:id      | DELETE | Delete bookmark,redirect home  |

## Architecture

-> App
  -> Header
  -> Bookmarks |state: bookmarks|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: bookmarks, createBookmarks|
    -> Route |path="/bookmarks/:id|
        -> Show  |Props: bookmarks, updateBookmarks, deleteBookmarks|

[Collaborators]
##Collaborators

Max, Ray, Rashad, John.
