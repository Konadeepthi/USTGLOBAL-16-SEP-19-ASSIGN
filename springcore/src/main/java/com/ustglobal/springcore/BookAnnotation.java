package com.ustglobal.springcore;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.ustglobal.springcore.config.BookConfigure;
import com.ustglobal.springcore.di.Book;

public class BookAnnotation {
public static void main(String[] args) {
	ApplicationContext context=new AnnotationConfigApplicationContext(BookConfigure.class);
	Book book=context.getBean(Book.class);
	System.out.println(book.getName());
	System.out.println(book.getPrice());
	System.out.println(book.getAuthor().getName());
	System.out.println(book.getAuthor().getPenName());
}
}
