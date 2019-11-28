package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.ListIterator;

public class TestTeacher {
	
	public static void main(String[] args) {

		ArrayList<Teacher> al = new ArrayList<Teacher>();
		
		Teacher t1 = new Teacher("Manjunath",68000.00,"java",100);
		Teacher t2 = new Teacher("PavanKumar",78000.00,"phython",200);
		Teacher t3 = new Teacher("Narayana",88000.00,"Angular",300);
		al.add(t1);
		al.add(t2);
		al.add(t3);

		for(int i=0;i<al.size();i++) {
			Teacher t = al.get(i);
			System.out.println("Name is :"+t.name);
			System.out.println("Salary is :"+t.salary);
			System.out.println("subject is :"+t.subjectname);
			System.out.println("Id is :"+t.id);

		}
		
		System.out.println("===========FOR EACH================");
		for(Teacher t : al) {
			System.out.println(t);
		}
		
		System.out.println("========================================");
		for(int i=0;i<al.size();i++) {
			Teacher t =(Teacher) al.get(i);
			System.out.println(t);
		}
		

		System.out.println("==========================================");

		ListIterator<Teacher> al1 = al.listIterator();

		while(al1.hasNext()) {
			Object object = (Object) al1.next();
		}



	}

}