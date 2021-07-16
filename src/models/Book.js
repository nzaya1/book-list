
export default class BookModel {
    constructor(name, author, isbn) {
        this.id = new Date().getTime();
        this.name = name;
        this.author = author;
        this.isbn = isbn;
    }
}