const books = require('../utils/fake-db')
const Book = require("../models/Book")

const resolvers = {
    Query: {
      books: async () => {
        const books = await Book.find()
        return books;
      },
    },
    Mutation: {
      addBook: async (_, {input: {title, author}}) => {
        const book = new Book({
          title,
          author
        })

        const newBook = await book.save()

        return newBook;
      }
    }
  };

  module.exports = resolvers;