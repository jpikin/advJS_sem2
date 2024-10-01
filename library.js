class Library{

    #books = [];

    constructor(array) {
        if (!Array.isArray(array)) {
            throw new TypeError('Список книг должен быть массивом');
        }
        for (const book of array) {
            if (this.#books.includes(book)) {
                throw new Error(`Найден дубликат книги "${book}"`);
            }
            this.#books.push(book);
        }
    }

    set addBook(book) {
        if(this.#books.includes(book)) {
            console.error('Такая книга уже есть в библиотеке');
        } else {
        this.#books.push(book);
        }
    }

    get allBooks() {
        return this.#books;
    }

    hasBook(book) {
        return this.#books.includes(book);
    }
}


arr1 = ['Война и мир', 'Мастер и Маргарита', 'Преступление и наказание'];
arr2 = ['Война и мир', 'Мастер и Маргарита', 'Преступление и наказание', 'Война и мир'];

const lib = createLib(arr1);
console.log(lib.allBooks);
console.log(lib.hasBook('Мастер и Маргарита'));
lib.addBook = 'Мастер и Маргарита';
lib.addBook = 'Гиперболоид инженера Гарина';
console.log(lib.allBooks);
console.log(lib.hasBook('Гиперболоид инженера Гарина'));

const lib2 = createLib(arr2);

console.log('Программа завершена');
    

/** 
 * Создаем экземпляр класса с библиотекой без дубликатов
 * При наличии дубликата выбрасываем ошибку
 */
createLib = function(arr){
    try {
    const lib = new Library(arr);
    return lib;
    } catch (error) {
        console.error(error);
    }
    }