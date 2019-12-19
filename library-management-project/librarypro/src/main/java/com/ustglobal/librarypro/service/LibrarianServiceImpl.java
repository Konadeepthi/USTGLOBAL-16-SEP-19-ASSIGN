package com.ustglobal.librarypro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.librarypro.dao.LibrarianDao;
import com.ustglobal.librarypro.dto.Book;
import com.ustglobal.librarypro.dto.BookIssue;
import com.ustglobal.librarypro.dto.BookRegistration;
import com.ustglobal.librarypro.dto.User;
@Service
public class LibrarianServiceImpl implements LibrarianService{
	@Autowired
	private LibrarianDao dao;
//	@Override
//	public User registerStudent(User user) {
//		
//		return registerStudent(user);
//	}
//
//	@Override
//	public Boolean deleteStudent(int id) {
//		
//		return deleteBook(id);
//	}

	@Override
	public Boolean addBooks(Book book) {
		
		return dao.addBooks(book);
	}

	@Override
	public Boolean deleteBook(int bid) {
		
		return dao.deleteBook(bid);
	}

	@Override
	public User getStudentInfo(int id) {
		
		return dao.getStudentInfo(id);
	}

	@Override
	public List<BookRegistration> viewRequest() {
		
		return dao.viewRequest();
	}

	@Override
	public Book checkAvailability(int bid) {
		
		return dao.checkAvailability(bid);
	}

	@Override
	public List<Book> showAllBooks() {
		
		return dao.showAllBooks();
	}

	@Override
	public boolean issuedBook(BookIssue bookissue) {
		
		return dao.issuedBook(bookissue);
	}

	@Override
	public List<BookIssue> diplayIssuedBooks() {
		
		return dao.diplayIssuedBooks();
	}

	@Override
	public Boolean deleteIssuedBook(int bookId) {
		
		return dao.deleteIssuedBook(bookId);
	}

	@Override
	public List<BookRegistration> showRequestedBooks() {
		// TODO Auto-generated method stub
		return dao.showRequestedBooks();
	}



}
