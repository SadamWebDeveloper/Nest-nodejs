import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()

export class BookService{

    // now i was store in temp storage { Book } from "./data/book.dto";  in fututre need to get this deatils from database table
    public books : Book[] = [];

    getALLBookService() : Book[] {

        return this.books;
    }

    addBookService(book : Book) : string {
        book.id = uuidv4();
        this.books.push(book);
        return 'New Book has been added successfully';
    }

    updateBookService(book : Book) : string {
        let index = this.books.findIndex((currentBook) => {
         return currentBook.id == book.id;

        });

        this.books[index] = book;
        return 'book details updated';
    }

    deleteBookService(bookID : string) : string {
        this.books = this.books.filter((book) => {
        return book.id != bookID;
        });
        return 'Book has been deleted';
    }


}