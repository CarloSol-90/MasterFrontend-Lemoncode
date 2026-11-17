// 1. Array operations
// Destructuring extrae el primer elemento sin modificar el array.
const head = ([first]) => first;

// Rest recoge los elementos restantes en un array nuevo.
const tail = ([, ...rest]) => rest;

// slice copia desde el inicio hasta antes del ultimo elemento.
const init = (array) => array.slice(0, -1);

// En un array vacio, esta posicion devuelve undefined.
const last = (array) => array[array.length - 1];

// 2. Concat
// Spread expande los elementos de ambos arrays dentro de uno nuevo.
const concat = (a, b) => [...a, ...b];

// Opcional: rest recibe todos los arrays; spread los incorpora al acumulador.
const concatMultiple = (...arrays) =>
  arrays.reduce((result, array) => [...result, ...array], []);

// 3. Clone Merge
function clone(source) {
  return { ...source };
}

function merge(source, target) {
  // Las propiedades de la derecha sobrescriben las anteriores.
  return { ...target, ...source };
}

// 4. Read Books
function isBookRead(books, titleToSearch) {
  const book = books.find((book) => book.title === titleToSearch);
  // Si find no encuentra el libro, devuelve undefined.
  return book ? book.isRead : false;
}

// 5. Slot Machine
class SlotMachine {
  constructor() {
    // Cada instancia tiene su propio contador.
    this.coins = 0;
  }

  play() {
    this.coins += 1;

    // Se generan siempre los tres resultados antes de comprobar el premio.
    const first = Math.random() >= 0.5;
    const second = Math.random() >= 0.5;
    const third = Math.random() >= 0.5;

    if (first && second && third) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

// Ejemplos: ejecutar con node o abrir desde un HTML con <script>.
const numbers = [10, 20, 30, 40];
console.log("head:", head(numbers)); // 10
console.log("tail:", tail(numbers)); // [20, 30, 40]
console.log("init:", init(numbers)); // [10, 20, 30]
console.log("last:", last(numbers)); // 40
console.log("Array original:", numbers); // [10, 20, 30, 40]
console.log("concat:", concat([1, 2], [3, 4]));
console.log("concatMultiple:", concatMultiple([1], [2, 3], [4]));

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log("clone:", clone(a));
console.log("merge:", merge(a, b));

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
