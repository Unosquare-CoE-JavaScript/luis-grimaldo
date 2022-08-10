# API Design in NodeJS, v3

## What is an API
tldr; a server that creates an HTTP interface for interacting with some data

- Application programming interface.
- The name is used EVERYWHERE.
- Usually a server on some remote machine that dictates how another application can interact with some data.
- Basic data operations like Create, Read, Update, Destro (CRUD).

## Whats about REST
tldr; most populars API design pattern, but is not the siler bullet. Very blurry

- An API design that combines DB resources, route paths, and HTTP verbs to allow applications describe what action they are trying to perform.
- Popularized when SaaS products starting offering APIs for integrations.
- Works with basic data models.
- Hard to scale with complex data models and client requirements.

## Node.js and APIs
tldr; build for high concurrent APIs that are not CPU intensive

- Node.js is Javascript, it's async and event driven.
- Single treaded (can optimize).
- When kept async, Node can handle a high amount of concurrent request.
- Not great for CPU intensive work (data crunching, ML, big maths).
- So many open source tools to help build APIs.

## Express
tldr; the standard API framework for Node.js

- Handles all the tedious tasks like managing sockets, route matching, error handling, and more.
- Open source.
- Has a huge community and support from anything that has to do with APIs in NOde.js
- Not going anywhere anytime soon.

## MongoDB
tldr; the go-to non-relational DB, works like a dream in Node.js

- Non-relational document store that is easy to get started and scales well.
- Open source and backed by a big company.
- Tons of hosting solutions.
- ORM/ODM and other libs are some of the best for any DB.

## Routing
tldr; The route is a section of Express code that associates an HTTP verb (GET, POST, PUT, DELETE, etc.), an URL path/pattern, and a function that is called to handle that pattern. 

A route method is derived from one of the following HTTP methods, and is attached to an instance of the express class as below :

```sh
var express = require('express');
var router = express.Router();
```

- .get() – Used to get data from a URL.
- .put() – Used to update data.
- .post() – Used for posting data to server / application. Normally it’s used while form submit.
- .delete() – as the name explains, this method is used to delete data.
- .all() – A special routing method which supports all the above. This can be used to run middleware functions, like authentication, validation for all HTTP requests. Each route can have one or more handler functions, which are executed when the route is matched.


## Midleware

Are functions that access the request object ( req), the response object ( res), and the next middleware function in the application's request/response cycle. The following middleware function is typically denoted with a variable named next.

Middleware functions can perform the following tasks:

- Run any code.
- Make changes to the request and response objects.
- End the request/response cycle.
- Call the next middleware function on the stack.
- If the current middleware function does not complete the request/response cycle, it should call next()to pass control to the next middleware function. Otherwise, the request will be hung.

An Express application can use the following types of middleware:

- Application level middleware
- Router level middleware
- Error handling middleware
- embedded middleware
- Third party middleware

You can load application-level and router-level middleware with an optional mount path. You can also load a number of middleware functions at once, which creates a substack of the middleware system on a mount point.

## Mongoose

Mongoose is an Object Document Mapper (ODM). This means that Mongoose allows you to define objects with a strongly typed schema that maps to a MongoDB document.

Mongoose provides an incredible amount of functionality for creating and working with schemas. Mongoose currently contains eight SchemaTypes that a property is saved as when persisted to MongoDB. Are:

- String
- Number
- Date (Date)
- Buffer
- Boolean (Boolean)
- mixed
- ObjectId
- Array

Each data type allows you to specify:

- a default value
- a custom validation function
- indicates that a field is required
- a get function that allows you to manipulate the data before it is returned as an object
- a set function that allows you to manipulate the data before saving it to the database
- create indexes to allow data to be fetched faster

In addition to these common options, certain data types allow you to further customize how data is stored and retrieved from the database. For example, a String data type also allows you to specify the following additional options:

- convert it to lowercase
- convert it to uppercase
- trim data before saving
- a regular expression that can limit the data that can be saved during the validation process
- an enumeration that can define a list of strings that are valid

The Number Number and Date Date properties support specifying a minimum and maximum allowable value for that field.

Most of the eight allowed data types should be familiar to you. However, there are several exceptions you may encounter, such as Buffer, Mixed, ObjectId, and Array.

The Buffer data type allows you to store binary data. A common example of binary data would be an image or an encrypted file, such as a PDF document.

The Mixed data type converts the property to an "anything goes" field. This field looks like how many developers can use MongoDB because there is no structure defined. Be careful using this data type as you lose many of the great features that Mongoose offers, such as data validation and entity change detection to automatically know if you want to update the property on save.

The ObjectId data type commonly specifies a link to another document in your database. For example, if you have a collection of books and authors, the book document might contain an ObjectId property that references the specific author of the document.

The Array data type allows you to store arrays similar to JavaScript. With an Array data type, you can perform common JavaScript array operations on it, such as push, pop, shift, slice, and so on.

## JWT

JSON Web Token is an open standard for securely transferring data within parties using a JSON object. JWT is used for stateless authentication mechanisms for users and providers, this means maintaining session is on the client-side instead of storing sessions on the server.


