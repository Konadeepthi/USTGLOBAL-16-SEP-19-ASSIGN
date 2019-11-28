package com.ustglobal.collectionframework.list;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.Vector;

public class TestH {
	public static void main(String[] args) {
		Vector v1 = new Vector();
		v1.add(12);
		v1.add("Rajeev gandhi");
		v1.add(true);
		v1.add(null);
		v1.add(12.45);

		System.out.println("============USING FOR LOOP=========");
		for (Object object : v1) {
			System.out.println(object);
		}

		System.out.println("============USING ITERATOR=========");

		Iterable it = v1.next();
		while(it.hashNext()) {
			Object o = it.next();
			System.out.println(o);
		}

		System.out.println("============USING LIST ITERATOR============");
		Iterator<E> it = li.iterator(){
			Object o  = it.next();
			System.out.println(o);
		}


	}
}
