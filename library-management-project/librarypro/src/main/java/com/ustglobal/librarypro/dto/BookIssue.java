package com.ustglobal.librarypro.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
@Entity
@Table(name = "Book_Issue_Details")
public class BookIssue {

	@Id
	@Column(name="BookId")
	private int bookid;
	
	@Column(name="BookName")
	private String bookName;
	
	@Column(name="IssueDate")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date issueDate;
	
	@Column(name="ReturnDate")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date returnDate;
	
	@Column(name="Fine")
	private int fine;

	public int getBookid() {
		return bookid;
	}

	public void setBookid(int bookid) {
		this.bookid = bookid;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public Date getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(Date issueDate) {
		this.issueDate = issueDate;
	}

	public Date getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(Date returnDate) {
		this.returnDate = returnDate;
	}

	public int getFine() {
		return fine;
	}

	public void setFine(int fine) {
		this.fine = fine;
	}
	
	
}

