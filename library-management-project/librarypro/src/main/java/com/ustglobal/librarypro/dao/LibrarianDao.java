package com.ustglobal.librarypro.dao;

import java.util.List;

import com.ustglobal.librarypro.dto.Book;
import com.ustglobal.librarypro.dto.BookIssue;
import com.ustglobal.librarypro.dto.BookRegistration;
import com.ustglobal.librarypro.dto.User;

public interface LibrarianDao {
//	public int registerStudent(User user);
//	public Boolean deleteStudent(int id) ;
	public Boolean addBooks(Book book) ;
	public Boolean deleteBook(int bid) ;
	public User getStudentInfo(int id) ;
	public List<BookRegistration> viewRequest() ;
	public Book  checkAvailability(int bid);
	public List<Book> showAllBooks() ;	
    public boolean issuedBook(BookIssue bookissue);
    public List<BookIssue> diplayIssuedBooks() ;	
    public Boolean deleteIssuedBook(int bookId) ;
    public List<BookRegistration> showRequestedBooks();
}
