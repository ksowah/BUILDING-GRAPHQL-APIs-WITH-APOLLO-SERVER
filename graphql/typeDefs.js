const typeDefs = `

type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  input BookInput {
    title: String
    author: String
  }

  type Mutation {
    addBook(input: BookInput): Book
  }

`

module.exports = typeDefs;
