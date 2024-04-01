// importing express.js
const express = require("express");

// creating instance of express to create express app
// By declaring an object with app as name... we can use any name we want
const app = express();

// create router instance for routing from express
const router = express.Router();

// Allowing or Enabling Express to Read JSON Globally.
app.use(express.json());

// in order to get data from the server we use get method
// syntax - router.get(path, callback Function (req(request), res (result)){function body})
// callback function needs two paramenters request and response.... there won't be a name for the callback function as it is getting called in default.
router.get("/:country/user/:state", function (req, res) {
  // Function Body
  //Getting the Query Param form the URL for requesting path we will be using req.params
  // Getting specific values from querry param
  const name = req.query.k;
  const brand = req.query.brand;
  // Getting the whole querry as an object
  const data = req.query;
  // Getting or Accessing Path Params
  const countryName = req.params;
  // Getting or Accessing the Data from the Body
  const user = req.body;
  res.send({
    status: "OK",
    message: { name: name, brand: brand },
    data: data,
    country: countryName,
    userData : user
  });
});

// Middleware is something that helps client and server. And Middleware is used to use or run an API.
// Global middleware for all api calling defined with router;
// app.use takes 2 paramenters the home path and the place where all the routes are present that is router.
app.use("/", router);

// Code for server start or Creation of Server
// .listen needs 2 parameters that is port and a callback function. This callback function ha sno parameters.
app.listen(8000, function () {
  console.log("Server Started at Port:", 8000);
});

// using (node <name of the file>.js) we can run a javascript file using terminal
// We can only use Get function in web browsers and can't use the other functions hence we use Postman.
