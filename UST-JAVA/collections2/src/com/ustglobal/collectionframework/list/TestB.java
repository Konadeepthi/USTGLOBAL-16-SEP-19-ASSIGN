package com.ustglobal.collectionframework.list;

import java.util.ArrayList;

public class TestB {
	public static void main(String[] args) {
		ArrayList a1 = new ArrayList();
		a1.add(10);
		a1.add(29.5);
		a1.add(true);
		a1.add("Pavan");
		a1.add('B');
		System.out.println(a1);
		for(Object o :a1) {
			System.out.println(o);
		}
	}
}
