package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.ListIterator;

public class TestD {
	public static void main(String[] args) {

		ArrayList a1 = new ArrayList();
		a1.add(10);
		a1.add(45.7);
		a1.add("Manju");
		a1.add(true);

		ListIterator li = a1.listIterator();
		System.out.println("-------------> FORWARD");
		while(li.hasNext()) {
			Object ob =li.next();
			System.out.println(ob);
		}
		
		System.out.println("BACKWARD<------------------");
		while(li.hasPrevious()) {
			Object o = li.previous();
			System.out.println(o);
		}

	}
}
