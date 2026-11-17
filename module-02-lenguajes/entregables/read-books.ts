// Version opcional de Read Books con TypeScript.
interface Book {
  title: string;
  isRead: boolean;
}

function isBookRead(books: readonly Book[], titleToSearch: string): boolean {
  const book = books.find((book) => book.title === titleToSearch);
  return book ? book.isRead : false;
}

// readonly impide modificar el array a traves del parametro books.
// El tipo boolean de retorno exige devolver true o false.
