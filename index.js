// Run this project using http://localhost:5000/graphql
const express = require('express')

const path = require('path')

const { ApolloServer } = require('apollo-server-express')

const { makeExecutableSchema } = require('@graphql-tools/schema')

const { loadFilesSync } = require('@graphql-tools/load-files')

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const resolversArray = loadFilesSync(path.join(__dirname, '**/*_resolvers.js'))

const startAplloServer = async () => {
  const app = express()

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
  })

  const server = new ApolloServer({
    schema
  })

  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })

  const PORT = 5000

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
  })
}

startAplloServer()