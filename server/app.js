const express = require('express');
const {graphqlHTTP} = require('express-graphql');//package to use GraphQL api
require('dotenv').config();
const schema = require('../schema/schema');

const PORT = process.env.PORT;
const app = express();

//use package as a middleware on the route "/graphql"
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, (err) => err ? console.log(err) : console.log('Server runs on port ', PORT))