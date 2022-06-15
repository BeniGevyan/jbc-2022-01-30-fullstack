const book1 = new Book();

book1.name = 'Harry Potter';
book1.author = 'J.K rolling';
book1.price = 75.9;

const book2 = new Book();

book2.name = 'The Hobit';
book2.author = 'J. R. R. Tolkien';
book2.price = 88;

document.write(`Name: ${book1.name}, Author: ${book1.author}, Price: ${book1.price}</br>`);
document.write(`Name: ${book2.name}, Author: ${book2.author}, Price: ${book2.price}`);
