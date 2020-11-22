const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    }),
});

//root query. We can't directly request data from the server
//Instead, our app should first call the GraphQL, which from
//his side will query all needed data. That's why we need
//to create a root query.

//We can describe all queries or requeries.
//Whithin the root query we describe all queries (подзапросы)
//For now, we've described only one - movie.
//We should specify, what a query should contain
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,//type of query
            args: { id: { type: GraphQLString } },//Arguments of the query
            resolve( parent, args ) { //Here specify data, that a query should return
    
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
})