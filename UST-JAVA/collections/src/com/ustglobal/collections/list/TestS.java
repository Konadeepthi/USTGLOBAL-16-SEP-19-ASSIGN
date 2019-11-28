package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;

public class TestS {

	public static void main(String[] args) {

		ArrayList<Student> as = new ArrayList<Student>();

		Student s = new Student(12, "nivi", 80.89);
		Student s1 = new Student(13, "sanvi", 82.89);
		Student s2 = new Student(12, "thanmay", 80.34);

		as.add(s);
		as.add(s1);
		as.add(s2);

		for (int i = 0; i < as.size(); i++) {

			Student st = as.get(i);
			System.out.println(st);
			System.out.println("====================");
			System.out.println(st.id);
			System.out.println(st.name);
			System.out.println(st.Per);
		}
		System.out.println("=====for each====");
		
		for (Student student : as) {
			
			System.out.println(student);
			
		}
		
		System.out.println("=========iterator ==========");
		Iterator i = as.iterator();
		while(i.hasNext()) {
			System.out.println(i.next());
		}
		
		
		System.out.println("==========list Iterator===========");
		
		ListIterator li = as.listIterator();
		while(li.hasNext()) {
			
			System.out.println(li.next());
			
		}
		System.out.println("+===========+");
		
		while(li.hasPrevious()) {
			
			System.out.println(li.previous());
			
		}
	}

}
