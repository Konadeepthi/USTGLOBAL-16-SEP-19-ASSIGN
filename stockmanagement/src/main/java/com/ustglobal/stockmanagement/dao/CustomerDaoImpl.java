package com.ustglobal.stockmanagement.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;

import org.springframework.stereotype.Repository;

import com.ustglobal.stockmanagement.dto.OrderInfo;
@Repository
public class CustomerDaoImpl implements CustomerDao{
	@PersistenceUnit
	private EntityManagerFactory factory;
	@Override
	public boolean addRequest(OrderInfo bean) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(bean);
			transaction.commit();
			return true;
		}catch (Exception e) {
			return false;
		}
	}

}
