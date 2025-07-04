const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    if (
      typeof book.title !== "string" ||
      typeof book.author !== "string" ||
      typeof book.year !== "number"
    ) {
      console.log("Book information is incomplete or invalid.");
      return;
    }
    this.books.push(book);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
    } else {
      console.log("Book not found.");
    }
  }
};

library.addBook({ author: "George Orwell", year: 1949 });
console.log(library.books.length);
