package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.List;

public class TestK {
	public static void main(String[] args) {
		ArrayList<Double> a1 = new ArrayList<Double>();
		a1.add(34.5);
		a1.add(23.5);
		a1.add(56.5);
		a1.add(34.5);
		a1.add(null);
		a1.add(null);
		a1.add(84.5);
		a1.add(89.5);

		System.out.println(a1);

		System.out.println("======================");

		a1.add(2,99.9);
		System.out.println("After add in 2nd index : " +a1);

		System.out.println("===================");

		a1.remove(0);
		System.out.println("After removing 0th index : "+a1);

		System.out.println("====================");

		a1.remove(null);
		System.out.println("After removing null : "+a1);

		System.out.println("=======================");

		Double val = a1.get(4);
		System.out.println("Object of 4th index : "+val);

		System.out.println("=========================");

		a1.set(2,100.0);
		System.out.println("After replacing 2nd index : "+a1);

		System.out.println("========================");

		a1.clear();
		System.out.println("After clear method : "+a1);

		System.out.println("======================");

		a1.contains(54.6);
		System.out.println(a1);

		System.out.println("==================New Array List=================");

		List<Double> al1 = new ArrayList<Double>();
		al1.add(12.3);
		al1.add(67.5);
		al1.add(73.3);
		al1.add(98.1);

		System.out.println("======================");
		a1.addAll(al1);
		System.out.println("After add all : " +a1);

		System.out.println("======================");
		boolean contain = a1.containsAll(al1);
		System.out.println("Contains all of all : "+contain);

		System.out.println("======================");
		boolean res = a1.removeAll(al1);
		System.out.println("Removed all of al1 : "+res);

	}
}
