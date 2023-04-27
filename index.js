const express = require('express')

  const { createHandler} = require ('graphql-http/lib/use/express');
  const  { GraphQLSchema, GraphQLObjectType, GraphQLString } = require ('graphql');

  /**
   * Construct a GraphQL schema and define the necessary resolvers.
   *
   * type Query {
   *   hello: String
   * }
   */
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        hello: {
          type: GraphQLString,
          resolve: () => 'world',
        },
      },
    }),
  });
  
  



const app = express()
app.all('/graphql', createHandler({ schema }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');
 


 