package com.ustglobal.jpawithhibernateapp.many.to.many;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class TestManyToMany {
	public static void main(String[] args) {
		Courses c=new Courses();
		c.setCid(11);
		c.setCname("java");
		Courses c1=new Courses();
		c1.setCid(21);
		c1.setCname("sql");
		Courses c2=new Courses();
		c2.setCid(31);
		c2.setCname("hybernate");
		List<Courses> cours=new ArrayList<Courses>(); 
		cours.add(c);
		cours.add(c1);
		cours.add(c2);
		Student1 s1=new Student1();
		s1.setSid(11);
		s1.setSname("deepthi");
		s1.setCourse(cours);
		Student1 s2=new Student1();
		s2.setSid(11);
		s2.setSname("deepthi");
		s2.setCourse(cours);
		EntityManager entityManager=null;
		EntityTransaction entityTransaction=null;//
		try {
		EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("test");
		entityManager=entityManagerFactory.createEntityManager();
		entityTransaction=entityManager.getTransaction();
		entityTransaction.begin();
		System.out.println("data saved");
		//entityManager.persist(c);
		//entityManager.persist(c1);
		//entityManager.persist(c2);
		entityManager.persist(s1);
		//entityManager.persist(s2);
		entityTransaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
			entityTransaction.rollback();
			
		}finally {
		entityManager.close();
		}
	}
}
