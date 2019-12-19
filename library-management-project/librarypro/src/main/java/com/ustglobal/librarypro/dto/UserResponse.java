package com.ustglobal.librarypro.dto;

import java.util.List;

public class UserResponse {
	private int status;
	private String message;
	private String description;
	private List<User> users;
	private List<Book> book;
	private List<BookIssue> bookissue;
	private List<BookRegistration> bookrequest;
	public List<BookRegistration> getBookrequest() {
		return bookrequest;
	}
	public void setBookrequest(List<BookRegistration> bookrequest) {
		this.bookrequest = bookrequest;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	public List<Book> getBook() {
		return book;
	}
	public void setBook(List<Book> book) {
		this.book = book;
	}
	public List<BookIssue> getBookissue() {
		return bookissue;
	}
	public void setBookissue(List<BookIssue> bookissue) {
		this.bookissue = bookissue;
	}
	
}
