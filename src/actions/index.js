export const addAuthor = author => {
  console.log("app hit the addAuthor() in actions/index.js")
  return {
    type: 'ADD_AUTHOR',
    author
  };
};

export const removeAuthor = id => {
  console.log("app hit the removeAuthor() in actions/index.js")
  return {
    type: 'REMOVE_AUTHOR',
    id
  };
};

export const addBook = book => {
  console.log("app hit the addBook() in actions/index.js")
  return {
    type: 'ADD_BOOK',
    book
  };
};

export const removeBook = id => {
  console.log("app hit the removeBook() in actions/index.js")
  return {
    type: 'REMOVE_BOOK',
    id
  };
};
