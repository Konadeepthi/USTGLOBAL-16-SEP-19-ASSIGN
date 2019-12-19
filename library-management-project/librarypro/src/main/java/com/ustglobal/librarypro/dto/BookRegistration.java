package com.ustglobal.librarypro.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
@Entity
@Table(name="Requested_Books")
public class BookRegistration {
	@Id
	@Column(name="StudentId")
	private int studentId;
	
	@Column(name="bookId")
	private int bookId;
	
	@Column(name="BookName")
	private String bookname;
	
	@Column(name = "Author")
	private String author;
	
	@Column(name="RequestedOn")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date date;

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public int getBookId() {
		return bookId;
	}

	public void setBookId(int bookId) {
		this.bookId = bookId;
	}

	public String getBookname() {
		return bookname;
	}

	public void setBookname(String bookname) {
		this.bookname = bookname;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	

}
