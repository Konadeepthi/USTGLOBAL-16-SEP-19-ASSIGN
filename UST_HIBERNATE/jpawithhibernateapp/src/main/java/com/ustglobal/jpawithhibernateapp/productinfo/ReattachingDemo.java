package com.ustglobal.jpawithhibernateapp.productinfo;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jspwithhibernateapp.dto.Product;

public class ReattachingDemo {
	public static void main(String[] args) {
		EntityTransaction entityTransaction=null;
		EntityManager entityManager=null;
		try {
			EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("test");
			entityManager=entityManagerFactory.createEntityManager();
			entityTransaction=entityManager.getTransaction();
			entityTransaction.begin();
			Product product=entityManager.find(Product.class, 101);
			boolean res=entityManager.contains(product);
			System.out.println(res);
			entityManager.detach(product);
			boolean res1=entityManager.contains(product);
			System.out.println(res1);
			Product product1=entityManager.merge(product);
			product1.setPname("pencile");
			System.out.println("data updated");
			entityTransaction.commit();
			
		}catch(Exception e){
			e.printStackTrace();
			entityTransaction.rollback();
		}
		entityManager.close();
	}

}
