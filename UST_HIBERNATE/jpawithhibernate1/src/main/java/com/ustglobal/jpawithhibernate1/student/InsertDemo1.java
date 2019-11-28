package com.ustglobal.jpawithhibernate1.student;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpawithhibernate1.dto.Student;

public class InsertDemo1 {
	public static void main(String[] args) {
		Student student=new Student();
		student.setSid(1);
		student.setSname("deepthi");
		student.setAge(21);
		EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("test");
		EntityManager entityManager=entityManagerFactory.createEntityManager();
		EntityTransaction entityTransaction=entityManager.getTransaction();
		entityTransaction.begin();
		entityManager.persist(student);
		System.out.println("data stored");
		entityTransaction.commit();
		entityManager.close();
	}

}
