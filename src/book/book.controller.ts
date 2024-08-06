import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";


@Controller('Book/v1')
export class BookController {

    // book service file declare below 
    constructor(private bookService: BookService) {

    }

    // now i was store in temp storage { Book } from "./data/book.dto";  in fututre need to get this deatils from database table
    @Get('/fetchList')
    getAllBooks(): Book[] {
        // below method write in book service file
        return this.bookService.getALLBookService();
    }

    @Put('/update')
    updateBook(@Body() book: Book): string {
        return this.bookService.updateBookService(book);
    }

    @Delete('/delete/:id')
    deleteBook(@Param('id') bookID: string): string {
        return this.bookService.deleteBookService(bookID);
    }

    @Post('/add')
    addBook(@Body() book: Book): string {
        return this.bookService.addBookService(book);
    }

}