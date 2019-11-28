package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;

public class TestG {
	public static void main(String[] args) {

		LinkedList li = new LinkedList();

		li.add(21);
		li.add("sanvi");
		li.add(null);
		li.add(true);
		li.add(23.09);


		Object o = li.get(3);

		System.out.println("=======for loop======");

		for (int i = 0; i < li.size(); i++) {

			Object q = li.get(i);
			System.out.println(q);

		}

		System.out.println("=======for each ======");

		for (Object obj : li) {

			System.out.println(obj);

		}

		System.out.println("=======iterator ======");

		Iterator i = li.iterator();

		while(i.hasNext()) {

			Object or = i.next();
			System.out.println(or);
		}

		System.out.println("=======list iterator ======");

		ListIterator li1 = li.listIterator();

		while(li1.hasNext()) {
			Object o3 = li1.next();
			System.out.println(o3);
		}
		
		System.out.println("==========has previous======");

		while(li1.hasPrevious()) {
			Object ol = li1.previous();
			System.out.println(ol);
		}














	}

}
