package com.ustglobal.collectionframework.list;

import java.util.ArrayList;

public class TestA {
	public static void main(String[] args) {
		ArrayList a = new ArrayList();
		a.add(12);
		a.add(22.5);
		a.add("Manju");
		a.add(true);
		a.add('A');
		System.out.println(a);
		System.out.println("==================");
		Object o = a.get(4);
		System.out.println(o);
		
		for(int i = 0;i<5;i++) {
			Object obj = a.get(i);
			System.out.println(obj);
		}

	}
}
