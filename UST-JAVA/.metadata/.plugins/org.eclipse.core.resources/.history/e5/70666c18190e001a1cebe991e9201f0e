package com.ustglobal.collectionframework.list;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;

public class TestG {
	public static void main(String[] args) {
		LinkedList li = new LinkedList();
		li.add(12);
		li.add("Rajeev gandhi");
		li.add(true);
		li.add(null);
		li.add(12.45);

		System.out.println("============USING FOR LOOP=========");
		for (Object object : li) {
			System.out.println(object);
		}

		System.out.println("============USING ITERATOR=========");

		Iterable it = li.iterator();
		while(it.hashNext()) {
			Object o = it.next();
			System.out.println(o);
		}

		System.out.println("============USIONG LIST ITERATOR FORWARD============");
		ListIterator<E> it = li.iterator();
		while(it.hasNext())
		{
			Object o  = it.next();
			System.out.println(o);
		}
		

	}
}
