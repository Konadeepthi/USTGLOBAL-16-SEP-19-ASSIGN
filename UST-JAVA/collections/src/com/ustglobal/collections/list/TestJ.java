package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.ListIterator;

public class TestJ {
	public static void main(String[] args) {
		ArrayList<Student> al = new ArrayList<Student>();
		Student s1 = new Student(100,"JrNtr",68.56);
		Student s2 = new Student(101,"MaheshBabu",78.56);
		Student s3 = new Student(102,"Manjunath",88.56);
		al.add(s1);
		al.add(s2);
		al.add(s3);

		for(int i=0;i<al.size();i++) {
			Student s = al.get(i);
			System.out.println("Id is :"+s.id);
			System.out.println("Name is :"+s.name);
			System.out.println("Percentage is :"+s.percentage);

		}
		System.out.println("===========FOR EACH================");
		for(Student s : al) {
			System.out.println(s);
		}
		
		System.out.println("========================================");
		for(int i=0;i<al.size();i++) {
			Student s =(Student) al.get(i);
			System.out.println(s);
		}
		

		System.out.println("==========================================");

		ListIterator<Student> al1 = al.listIterator();

		while(al1.hasNext()) {
			Object object = (Object) al1.next();
		}

	}
}
