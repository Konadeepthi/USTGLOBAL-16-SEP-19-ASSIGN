package com.ustglobal.librarypro.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.ustglobal.librarypro.dto.User;
@Repository
public class AdminDaoImpl implements AdminDao {
	@PersistenceUnit
	private EntityManagerFactory factory;
	@Override
	public boolean addUser(User user) {
		EntityManager entityManager = factory.createEntityManager();
		EntityTransaction entityTransaction = entityManager.getTransaction();

		entityTransaction.begin();
		
		try {
			entityManager.persist(user);
			entityTransaction.commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}
	
	@Override
	public boolean deleteUser(int lid) {
		EntityManager entityManager = factory.createEntityManager();
		EntityTransaction entityTransaction = entityManager.getTransaction();
		entityTransaction.begin();
		User bean = entityManager.find(User.class, lid);
		if(bean!= null) {
			entityManager.remove(bean);
			entityTransaction.commit();
			return true;

		}else {
			return false;
		}
	}

	@Override
	public List<User> diplayUsers() {
		String jpql = "from User";
		EntityManager entityManager = factory.createEntityManager();
		TypedQuery<User> query = entityManager.createQuery(jpql, User.class);
		List<User> user = query.getResultList();
		return user;
	}
}
