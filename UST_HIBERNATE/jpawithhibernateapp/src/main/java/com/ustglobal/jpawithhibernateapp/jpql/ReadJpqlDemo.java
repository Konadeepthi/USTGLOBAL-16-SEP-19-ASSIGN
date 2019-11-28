package com.ustglobal.jpawithhibernateapp.jpql;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.ustglobal.jspwithhibernateapp.dto.Product;

public class ReadJpqlDemo {
	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("test");
		EntityManager entityManager=entityManagerFactory.createEntityManager();
		//String jpql="from Product";//to select all the data
		String jpql1="select pname from Product";
		Query query=entityManager.createQuery(jpql1);//Query is an interface.
		query.getResultList();
		List<String> list=query.getResultList();
		for (String object : list) {
			//System.out.println(object.getPid());
			System.out.println(object);
			//System.out.println(object.getQuantity());
			
		}
	}

}
