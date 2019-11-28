package com.ustglobal.jpawithhibernate1.student;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jpawithhibernate1.dto.Student;

public class UpdateDemo1 {
	public static void main(String[] args) {
		EntityTransaction entityTransaction=null;
		EntityManager entityManager=null;
		try {
			EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("test");
			entityManager=entityManagerFactory.createEntityManager();
			entityTransaction=entityManager.getTransaction();
			entityTransaction.begin();
			Student student=entityManager.find(Student.class,1);
			student.setSname("bindu");
			System.out.println("record updated");
			entityTransaction.commit();
			
		}catch(Exception e) {
			e.printStackTrace();
			entityTransaction.rollback();
			
		}
		entityManager.close();
	}

}
