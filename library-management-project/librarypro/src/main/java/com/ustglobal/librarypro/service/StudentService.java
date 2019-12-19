package com.ustglobal.librarypro.service;

import java.util.List;

import com.ustglobal.librarypro.dto.Book;
import com.ustglobal.librarypro.dto.BookRegistration;

public interface StudentService {
public Book searchBook(int bid);
	
	public Boolean requestBook(BookRegistration book);

}
