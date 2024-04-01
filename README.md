---

# Express.js Server with GET Request Handling

This repository contains a basic setup for an Express.js server that handles `GET` requests. The server is designed to accept requests with both path parameters and query parameters. Below, you'll find a detailed explanation of the key concepts and functionalities of this server setup.

## Installation

To run this Express.js server, ensure you have Node.js installed on your machine. Follow these steps to get started:

1. **Clone the Repository:**

   Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/Keshav-1803/Introduction-to-Backend.git
   ```

2. **Navigate to the Project Directory:**

   Move into the project directory in your terminal:

   ```bash
   cd FIRSTAPI
   ```

3. **Install Dependencies:**

   Install the required dependencies for the server using npm:

   ```bash
   npm install express
   ```

4. **Start the Server:**

   Start the Express server:

   ```bash
   node server.js
   ```

   Replace `server.js` with the name of your server file if different.

## Usage

### Overview

Express.js is a powerful and minimalist web framework for Node.js that provides a robust set of features for web and mobile applications. This server setup demonstrates how to:

- Create an Express app instance.
- Define routes with path parameters and query parameters.
- Access the parameters from the request object.
- Send JSON responses to clients.

### Setting up the Server

1. **Importing Express.js Module:**

   Express.js is imported at the beginning of the server file to use its functionalities.

   ```javascript
   const express = require("express");
   ```

2. **Creating Express App Instance:**

   An instance of the Express app is created to handle HTTP requests and define routes.

   ```javascript
   const app = express();
   ```

3. **Creating Router Instance:**

   The Express Router is used to create modular, mountable route handlers.

   ```javascript
   const router = express.Router();
   ```

4. **Enabling JSON Parsing:**

   Express is configured to parse JSON data in the request body globally.

   ```javascript
   app.use(express.json());
   ```

5. **Defining a `GET` Route:**

   A `GET` route is defined to handle requests with path and query parameters.

   ```javascript
   router.get("/:country/user/:state", function (req, res) {
     // Function Body
   });
   ```

6. **Accessing Parameters:**

   Inside the `GET` route handler, path parameters and query parameters are accessed as follows:

   - Path parameters (`:country` and `:state`) are accessed using `req.params`.
   - Query parameters (`k` and `brand`) are accessed using `req.query`.

7. **Sending a Response:**

   A JSON response is sent back to the client with the extracted data.

   ```javascript
   res.send({
     status: "OK",
     message: { name: name, brand: brand },
     data: data,
     country: countryName,
     userData: user
   });
   ```

### Making Requests

Clients can make `GET` requests to this server with the following URL structure:

```
http://localhost:8000/:country/user/:state?k=<value>&brand=<value>
```

- `:country` and `:state` are path parameters representing the country and state.
- `k` and `brand` are query parameters used to pass additional data.

### Example Request

An example `GET` request using Postman:

- **URL:** `http://localhost:8000/India/user/Delhi?k=phone&brand=vivo`

This request will return the following JSON response:

```json
{
  "status": "OK",
  "message": {
    "name": "phone",
    "brand": "vivo"
  },
  "data": {
    "k": "phone",
    "brand": "vivo"
  },
  "country": {
    "country": "India",
    "state": "Delhi"
  },
  "userData": {}
}
```

### JSON Body Data

Clients can also include JSON data in the request body. For example:

```json
{
  "UserName": "xyz",
  "Password": 123
}
```

### Key Concepts

- **Path Parameters (`req.params`):**
  
  Path parameters are used to capture values specified at certain segments of the URL path. In this example, `:country` and `:state` are path parameters representing the country and state in the URL `/:country/user/:state`.

- **Query Parameters (`req.query`):**
  
  Query parameters are used to provide additional data in a URL. They appear after the `?` symbol in the URL. In this example, `k` and `brand` are query parameters accessible using `req.query.k` and `req.query.brand`.

- **Express Router:**

  The Express Router allows for modular route definitions. It helps in organizing route handlers and managing API endpoints effectively.

### Important Notes

- This server is designed to handle `GET` requests.
- JSON data sent in the request body is accessed using `req.body`. However, for `GET` requests, the body is typically empty.
- The server returns a JSON response containing the extracted data from path and query parameters.

### Error Handling

This example does not include error handling for simplicity. For production applications, consider adding error middleware to handle various types of errors gracefully.

### Customization

Feel free to customize the route paths, add more middleware, or include additional functionalities based on your project requirements. Express.js provides a flexible and scalable framework for building web applications.

## Conclusion

This Express.js server setup demonstrates the basic structure of handling `GET` requests with path and query parameters. It serves as a foundation for building more complex web applications and APIs using Express.js.

---
