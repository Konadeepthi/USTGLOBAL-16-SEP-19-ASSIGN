package com.ustglobal.springcore.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.ustglobal.springcore.di.Author;
import com.ustglobal.springcore.di.Book;
@Configuration
public class BookConfigure {
	@Bean(name = "book")
	public Book getBook() {
		Book book=new Book();
		book.setName("Spring");
		book.setPrice(1500);
		book.setAuthor(getAuthor());
		return book;
	}
	@Bean(name="author")
	public Author getAuthor() {

		Author author = new Author();
		author.setName("Raj");
		author.setPenName("brite");
		return author;
	}
}
