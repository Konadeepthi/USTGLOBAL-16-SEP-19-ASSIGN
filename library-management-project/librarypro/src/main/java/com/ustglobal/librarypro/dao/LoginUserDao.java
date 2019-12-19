package com.ustglobal.librarypro.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.ustglobal.librarypro.dto.User;
@Repository
public class LoginUserDao implements LoginUser{

	@PersistenceUnit
	private EntityManagerFactory factory;

	@Override
	public User login(int id, String password) {
		String jpql = "from User where id=:id and password=:password";
		EntityManager entityManager = factory.createEntityManager();
		//EntityTransaction entityTransaction = entityManager.getTransaction();
		TypedQuery<User> query = entityManager.createQuery(jpql, User.class);
		query.setParameter("id", id);
		query.setParameter("password", password);
		User bean = query.getSingleResult();
		return bean;
	}

}
