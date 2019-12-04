package com.ustglobal.springcore;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ustglobal.springcore.book.Author;
import com.ustglobal.springcore.book.Book;

public class BookApp {
	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("book.xml");
		Book book=context.getBean(Book.class);
		System.out.println(book);
		System.out.println(book.getAuthor());
		System.out.println(book.getName());
		System.out.println(book.getPrice());
		Author author=context.getBean(Author.class);
		System.out.println(author.getAname());
		System.out.println(author.getPenName());
	}

}
