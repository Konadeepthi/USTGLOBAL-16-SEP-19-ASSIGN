package com.ustglobal.librarypro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.librarypro.dao.StudentDao;
import com.ustglobal.librarypro.dto.Book;
import com.ustglobal.librarypro.dto.BookRegistration;
@Service
public class StudentServiceImpl implements StudentService{

	@Autowired
	private StudentDao dao;
	@Override
	public Boolean requestBook(BookRegistration book) {
		
		return dao.requestBook(book);
	}
	@Override
	public Book searchBook(int bid) {
		return dao.searchBook(bid);
	}

}
