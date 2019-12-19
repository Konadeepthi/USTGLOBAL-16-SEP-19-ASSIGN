package com.ustglobal.librarypro.dao;

import java.util.List;

import com.ustglobal.librarypro.dto.Book;
import com.ustglobal.librarypro.dto.BookRegistration;

public interface StudentDao {

	public Book searchBook(int bid);

	public Boolean requestBook(BookRegistration book);

}
