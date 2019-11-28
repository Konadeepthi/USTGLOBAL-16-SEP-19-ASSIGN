package com.ustglobal.jpawithhibernate1.student;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.ustglobal.jpawithhibernate1.dto.Student;

public class ReadDemo {
	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("test");
		EntityManager entityManager=entityManagerFactory.createEntityManager();
		Student student=entityManager.find(Student.class, 1);
		System.out.println("student Id is "+student.getSid());
		System.out.println("Student name is "+student.getSname());
		System.out.println("student age is "+student.getAge());
	}

}
