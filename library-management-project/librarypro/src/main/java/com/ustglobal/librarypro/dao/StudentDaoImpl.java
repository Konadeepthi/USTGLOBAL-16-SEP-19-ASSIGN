package com.ustglobal.librarypro.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.ustglobal.librarypro.dto.Book;
import com.ustglobal.librarypro.dto.BookRegistration;
@Repository
public class StudentDaoImpl implements StudentDao {

	@PersistenceUnit
	private EntityManagerFactory factory;
	@Override
	public Book searchBook(int bid) {
		EntityManager entityManager = factory.createEntityManager();
		Book bean=entityManager.find(Book.class, bid);
		return bean;
	}
	


	@Override
	public Boolean requestBook(BookRegistration book) {
		EntityManager entityManager = factory.createEntityManager();
		EntityTransaction entityTransaction = entityManager.getTransaction();
		entityTransaction.begin();

		try {
			entityManager.persist(book);
			entityTransaction.commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}


}
