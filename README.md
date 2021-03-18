# MyReads Project

A bookshelf app that allows to select and categorize books that user have read, are currently reading, or want to read.

## Demo

![Demo animation](https://raw.githubusercontent.com/KushagraMehta/reactnd-project-myreads-starter/master/img/demo.gif "Demo animation")

## How to start

1. Clone this repository

```bash
$> git clone https://github.com/KushagraMehta/reactnd-project-myreads-starter.git
```

2. Install dependencies

```bash
$> cd ./book-tracking
$> yarn
```

3. Start server

```bash
$> yarn start
```

4. Open a browser and visit http://localhost:3000/

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Available Search Terms

`Android`, `Art`, `Artificial Intelligence`, `Astronomy`, `Austen`, `Baseball`, `Basketball`, `Bhagat`, `Biography`, `Brief`, `Business`, `Camus`, `Cervantes`, `Christie`, `Classics`, `Comics`, `Cook`, `Cricket`, `Cycling`, `Desai`, `Design`, `Development`, `Digital Marketing`, `Drama`, `Drawing`, `Dumas`, `Education`, `Everything`, `Fantasy`, `Film`, `Finance`, `First`, `Fitness`, `Football`, `Future`, `Games`, `Gandhi`, `History`, `History`, `Homer`, `Horror`, `Hugo`, `Ibsen`, `Journey`, `Kafka`, `King`, `Lahiri`, `Larsson`, `Learn`, `Literary Fiction`, `Make`, `Manage`, `Marquez`, `Money`, `Mystery`, `Negotiate`, `Painting`, `Philosophy`, `Photography`, `Poetry`, `Production`, `Program Javascript`, `Programming`, `React`, `Redux`, `River`, `Robotics`, `Rowling`, `Satire`, `Science Fiction`, `Shakespeare`, `Singh`, `Swimming`, `Tale`, `Thrun`, `Time`, `Tolstoy`, `Travel`, `Ultimate`, `Virtual Reality`, `Web Development`, `iOS`
