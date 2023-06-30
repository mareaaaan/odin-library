let books = [];
const booksContainer = document.getElementsByClassName("books-container")[0];

function Book(title, author, pageNumber, isRead) {
	this.title = title;
	this.author = author;
	this.pageNumber = pageNumber;
	this.isRead = isRead;
}

function addBookToLibrary(title, author, pageNumber, isRead) {
	books.push(new Book(title, author, pageNumber, isRead));
}

function createBookCard(book) {
	const bookCard = document.createElement("section");
	bookCard.classList.add("book-card");

	const bookCardTitle = document.createElement("header");
	bookCardTitle.classList.add("book-card__title");
	bookCardTitle.appendChild(document.createTextNode(book.title));

	const bookCardAuthor = document.createElement("p");
	bookCardAuthor.classList.add("book-card__author");
	bookCardAuthor.appendChild(document.createTextNode(book.author));

	const bookCardPages = document.createElement("p");
	bookCardPages.classList.add("book-card__pages");
	bookCardPages.appendChild(document.createTextNode(book.pageNumber));

	const bookCardIsRead = document.createElement("p");
	bookCardIsRead.classList.add("book-card__isRead");
	bookCardIsRead.appendChild(document.createTextNode(book.isRead));

	bookCard.appendChild(bookCardTitle);
	bookCard.appendChild(bookCardAuthor);
	bookCard.appendChild(bookCardPages);
	bookCard.appendChild(bookCardIsRead);

	return bookCard;
}

function displayBookCard(book) {
	booksContainer.appendChild(createBookCard(book));
}

function displayBooks() {
	for (let book in books) {
		displayBookCard(books[book]);
	}
}

addBookToLibrary("Ma cac printre stele", "Marian Gartu", 169, true);
addBookToLibrary("Ce frumoasa este viata", "Vasilica Ceferistul", 10, false);
addBookToLibrary("Ma-ta e o vaca", "Ciprian Ciohodaru", 341, true);
addBookToLibrary("Nu am avut alternativa", "Catalin Gartu", 542, false);
addBookToLibrary("Nu am avut alternativa", "Catalin Gartu", 542, false);
addBookToLibrary("Nu am avut alternativa", "Catalin Gartu", 542, false);
addBookToLibrary("Nu am avut alternativa", "Catalin Gartu", 542, false);
addBookToLibrary("Nu am avut alternativa", "Catalin Gartu", 542, false);

displayBooks();
