const {ApolloServer} = require ('@apollo/server');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://habertrogena:Hrogena12$@cluster0.7fdufnu.mongodb.net/?retryWrites=true&w=majority"

//const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const typeDefs = 
`
type Recipe{
    name : String
    description : String
    createdAt : String
    thumbsUp: Int
    thumbsDown : Int
}

input RecipeInput{
    name : String
    description : String
}

type Query{
    recipe(ID:ID!): Recipe!
    getRecipes(amount: Int):[Recipe]
}

type Mutation{
    createRecipe(recipeInput:RecipeInput):Recipe!
    deleteRecipe(ID:ID!):Boolean
    editRecipe(ID:ID!,recipeInput:RecipeInput):Boolean
}




`



const server = new ApolloServer({
    typeDefs,
    resolvers
});

// mongoose.connect(MONGODB,{})
//    .then(()=>{
//     console.log('Mongodb connection sucessful')
//     return server.listen({port:5000});
// })
//   .then((res)=>{
//     console.log(`server is running at ${res.uri}`);
//   })

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://habertrogena:<password>@cluster0.7fdufnu.mongodb.net/?retryWrites=true&w=majority');
  console.log('database connected');
  return server.listen({port:5000});

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


  //41.84.156.210/32 ip access list
  //mongodb+srv://habertrogena:<password>@cluster0.7fdufnu.mongodb.net/?retryWrites=true&w=majority