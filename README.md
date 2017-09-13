# litlearn
![travis badge](https://travis-ci.org/FAC-11/litlearn.svg?branch=master
) [![codecov badge](https://codecov.io/gh/FAC-11/litlearn/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC-11/litlearn)
A web-app to help UK students prepare for their GCSE English and English Literature exams. Litlearn aims to help students anxious about the unseen text questions included in the [new English GCSE exams](http://www.telegraph.co.uk/education/2017/07/18/students-find-new-english-gcse-torturous-may-deterred-continuing/) by giving them structured practice that builds in difficulty.

## Getting started
If you want to see the current site, visit us at [Heroku](https://litlearn.herokuapp.com/).

If you are interested in web development and want to get this project running on your local server, here's what you need to do:

### Clone or fork this repo
If you're forking this repo into your own GitHub repository to work on it yourself, click on the 'fork' button on the top of this page.

Alternatively, you can clone it to your home machine by opening up your Terminal or other Command Line Interface, navigating to the folder you would like to install this project into and typing:
`git clone https://github.com/FAC-11/litlearn.git`

### Install helper modules
To install the helper node modules, type:
`npm install`

If you want to know what you're installing here, have a look at the package.json file under 'dependencies' and 'devDependencies'

### Set up a local database
You'll need to set up a PostgreSQL database to run the project. If you're not sure how to do this, have a look [here](https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm).

Once you've created a blank database, make a `config.env` file in your project folder to store the database information. In this, type `DATABASE_URL = postgres://<username>:<password>@localhost:5432/<database name>`, with the username, password and database name you created above.

To get your database up and running with the sample data we created, return to your Command Line Interface and type `npm run build`. If it's worked, you should see a confirmation that the database was created, starting:
```
db host:  localhost:5432
Database created with the result:  [ Result {
    command: 'BEGIN',
```

### Start your server and view the site!
In your Command Line Interface, type `npm run start:watch`. You should see a message confirming that your server is running: `App running on port  3000`.

Go to your web browser of choice, visit `http://localhost:3000/` and enjoy!

## Running the tests
We've written tests to check our database queries and our endpoints. View them by typing `npm test` into your Command Line Interface.

## Built with:
* [node.js](https://nodejs.org/en/)
* [express.js](https://expressjs.com/) a node.js web framework
* [handlebars.js](http://handlebarsjs.com/) a templating engine

## Contributing
This is a student project for [Founders and Coders](https://foundersandcoders.com/), but we'll add contributing guidelines when we're looking for collaborators after the course.

## Authors
* [@jen-harris](https://github.com/jen-harris)
* [@morkeltry](https://github.com/morkeltry)
* [@rachaelcodes](https://github.com/rachaelcodes) -- the ex-English teacher on the team - contact her for pedagogy questions.

## License
litlearn has been released with an [ISC](https://opensource.org/licenses/ISC) license

## Acknowledgements
* Advice on structuring a [readme](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* Homepage photograph [Brad Neathery on Unsplash](https://unsplash.com/@bradneathery?utm_medium=referral&utm_campaign=photographer-credit)
* [Gradients](https://uigradients.com/)
