package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.Iterator;

public class TestC {



	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void main(String[] args) {

		ArrayList a1 = new ArrayList();

		a1.add(12);
		a1.add(32);
		a1.add("chinni");
		a1.add(true);
		a1.add(null);
		a1.add('a');
		a1.add("good mrng                  ,.......");

		Object o1 = a1.get(2);
		System.out.println(o1);

		System.out.println("========================");

		Iterator it = a1.iterator();
		Object o2 = it.next();
		System.out.println("obj1 "+ o2);
		Object o3 = it.next();
		System.out.println("obj1 "+ o3);

		Object o4 = it.next();
		System.out.println("obj1 "+ o4);

		Object o5 = it.next();
		System.out.println("obj1 "+ o5);

		Object o6 = it.next();
		System.out.println("obj1 "+ o6);

		Object o7 = it.next();
		System.out.println("obj1 "+ o7);

		Object o8 = it.next();
		System.out.println("obj1 "+ o8);

		boolean b = it.hasNext();
		System.out.println(" has next "+ b);

		//		Object o9 = it.next();
		//		System.out.println("obj1 "+ o9);
		//		NoSuchElementException






		for(int i = 0 ; i < a1.size() ; i++) {

			Object o = a1.get(i);
			System.out.println(o);
		}


		System.out.println("====using itaretor==========");
		
		ArrayList a = new ArrayList();

		a.add(12);
		a.add(32);
		a.add("chinni");
		a.add(true);

		Iterator i = a.iterator();
		while(i.hasNext()) {
			Object o = i.next();
			System.out.println(o);
		}
		
		System.out.println("====for loop====");
		

		ArrayList a2 = new ArrayList();

		a2.add(12);
		a2.add(32);
		a2.add("chinni");
		a2.add(true);
		
		Iterator i4 = a.iterator();
          
		for(;i4.hasNext();) {
			
			Object o = i4.next();
			System.out.println(o);
		}



	}


}


