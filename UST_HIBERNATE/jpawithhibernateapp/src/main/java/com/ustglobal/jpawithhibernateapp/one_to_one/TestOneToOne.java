package com.ustglobal.jpawithhibernateapp.one_to_one;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.ustglobal.jspwithhibernateapp.dto.Product;

public class TestOneToOne {
	public static void main(String[] args) {
		VoterCard v=new VoterCard();
		v.setVid(10);
		v.setVname("ram");
		Person person=new Person();
		person.setPid(1);
		person.setPname("ram");
		person.setVoterCard(v);
		EntityManager entityManager=null;
		EntityTransaction entityTransaction=null;
		try {
		EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("test");
		entityManager=entityManagerFactory.createEntityManager();
		entityTransaction=entityManager.getTransaction();
		entityTransaction.begin();
		VoterCard vCard=entityManager.find(VoterCard.class,10);
		System.out.println(vCard.getPerson().getPid());
		//entityManager.persist(person);
		System.out.println("data saved");
		entityTransaction.commit();
		}catch(Exception e) {
			e.printStackTrace();
			entityTransaction.rollback();
			
		}finally {
		entityManager.close();
		}
	}

}
