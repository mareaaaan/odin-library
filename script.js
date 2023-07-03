let books = [];
const booksContainer = document.getElementsByClassName("books-container")[0];
const addIcon = document.getElementsByClassName("icon--add")[0];
const form = document.getElementsByClassName("form")[0];
const body = document.getElementsByTagName("BODY")[0];
const layer = document.getElementsByClassName("layer")[0];
const addButton = document.getElementsByClassName("add-button")[0];

function Book(title, author, pageNumber, isRead) {
	this.title = title;
	this.author = author;
	this.pageNumber = pageNumber;
	this.isRead = isRead;
}

function addBookToLibrary(title, author, pageNumber, isRead) {
	books.push(new Book(title, author, pageNumber, isRead));
}

function createBookCard(bookIndex) {
	book = books[bookIndex];
	const bookCard = document.createElement("section");
	bookCard.classList.add("book-card");
	bookCard.dataset.index = bookIndex;

	const bookCardRemove = document.createElement("img");
	bookCardRemove.setAttribute("src", "x_icon.svg");
	bookCardRemove.classList.add("book-card__remove");

	bookCardRemove.addEventListener("click", function () {
		removeBookCard(bookCard);
	});

	const bookCardTitle = document.createElement("header");
	bookCardTitle.classList.add("book-card__title");
	bookCardTitle.appendChild(document.createTextNode(book.title));

	const bookCardAuthor = document.createElement("p");
	bookCardAuthor.classList.add("book-card__author");
	bookCardAuthor.appendChild(document.createTextNode(book.author));

	const bookCardPages = document.createElement("p");
	bookCardPages.classList.add("book-card__pages");
	bookCardPages.appendChild(document.createTextNode(book.pageNumber));

	const bookCardIsReadButton = document.createElement("button");
	bookCardIsReadButton.classList.add("book-card__button");
	bookCardIsReadButton.appendChild(document.createTextNode(book.isRead ? 'Already read' : 'Not read yet'));
	bookCardIsReadButton.dataset.isRead = book.isRead;

	bookCardIsReadButton.addEventListener("click", function () {
		toggleReadBook(bookCard);
	});

	bookCard.appendChild(bookCardRemove);
	bookCard.appendChild(bookCardTitle);
	bookCard.appendChild(bookCardAuthor);
	bookCard.appendChild(bookCardPages);
	bookCard.appendChild(bookCardIsReadButton);

	return bookCard;
}

function toggleReadBook(bookCard) {
	books[bookCard.dataset.index].isRead = ! books[bookCard.dataset.index].isRead;
	resetBooksContainer();
}

function removeBookCard(bookCard) {
	books.splice(bookCard.dataset.index, 1);
	booksContainer.removeChild(bookCard);
	resetBooksContainer();
}

function displayBookCard(book) {
	booksContainer.insertBefore(
		createBookCard(book),
		booksContainer.children[booksContainer.children.length - 1]
	);
}

function displayBookCard(book) {
	booksContainer.insertBefore(
		createBookCard(book),
		booksContainer.children[booksContainer.children.length - 1]
	);
}

function displayBooks() {
	for (let book in books) {
		displayBookCard(book);
	}
}

function resetBooksContainer() {
	booksContainer.replaceChildren(addIcon);
	displayBooks();
}

function blurBody() {
	const layer = document.getElementsByClassName("layer")[0];
	layer.classList.add("blur");
}

function unBlurBody() {
	const layer = document.getElementsByClassName("layer")[0];
	layer.classList.remove("blur");
}

function showAddBookForm() {
	blurBody();
	body.appendChild(form);
}

function hideAddBookForm() {
	unBlurBody();
	form.reset();
	form.remove();
}

function submitAddBookForm(event) {
	event.preventDefault();

	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pageNumber = parseInt(document.getElementById("page-number").value);
	let isRead = document.getElementById("is-read").checked;
	addBookToLibrary(title, author, pageNumber, isRead);

	resetBooksContainer();
	hideAddBookForm();
}

addIcon.addEventListener("click", showAddBookForm);
layer.addEventListener("click", hideAddBookForm);
addButton.addEventListener("click", submitAddBookForm);

addBookToLibrary("Ma cac printre stele", "Marian Gartu", 169, true);
addBookToLibrary("Ce frumoasa este viata", "Vasilica Ceferistul", 10, false);
addBookToLibrary("Ma-ta e o vaca", "Ciprian Ciohodaru", 341, true);
addBookToLibrary("Nu am avut alternativa", "Catalin Gartu", 542, false);

displayBooks();
hideAddBookForm();