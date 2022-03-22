const express = require('express');
//import {graphqlHTTP} from 'express-graphql';
const {ApolloServer} = require("apollo-server-express");
//import schema from "./schema";
//import {connect} from "./database";
const {typeDefs} = require("./src/schema");
const {resolvers} = require("./src/resolvers");
const {connectDB} = require("./src/database");

var app = express();

connectDB();

app.get('/', (req, res) => {
    //res.send("Buenas");
    console.log("menu");
})

/*app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        
    }
}));*/

module.exports = app;

async function start() {
    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({app});

    app.use("*", (req, res) => res.status(404).send("Not Found"));

    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log('Server on port 8080'));
}

start();

/*server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://studio.apollographql.com/dev
`);
});*/

/*var mongo = require ('mongodb');
var MongoClient = require ('mongodb').MongoClient; 
var url = "mongodb: // localhost: 27017 / newdb"; 

MongoClient.connect(url, function (err, db) {
    if (err) throw err; 
    console.log("¡Base de datos conectada!"); 
    db.close();
});*/

//import mongodb+srv://BertoNebrija:<password>@cluster0.cg1wd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

