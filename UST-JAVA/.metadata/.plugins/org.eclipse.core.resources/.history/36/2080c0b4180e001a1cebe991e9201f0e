package com.ustglobal.collectionframework.list;

import java.util.LinkedList;
import java.util.ListIterator;

public class TestEm {
	
	public static void main(String[] args) {
		
		LinkedList li = new LinkedList();
		
		Employee e1 = new Employee(121, "chandu", 80000);
		Employee e2 = new Employee(131, "rahul", 80000);
		Employee e3 = new Employee(141, "jashmine", 80000);
		
		 li.add(e1);
		 li.add(e2);
	     li.add(e3);
		
		for (int i = 0; i < li.size(); i++) {
			
		     Object e = li.get(i);
		    System.out.println(e);
			
			System.out.println("=================================");
			
			Employee ee = (Employee) li.get(i);  //bcz not provided genric
			System.out.println(ee);
		}
                
		for (Object object : li) {
			
			System.out.println(object);
			
		}
		
		ListIterator ls = li.listIterator();
		
		while (ls.hasNext()) {
			
			Object object = (Object) ls.next();
			
		}
	}

}
