package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.List;

//aceepts duplicate values, null values , index based , all wraperclassess are immutable and final


public class CollMethod {
	
	public static void main(String[] args) {
		
		ArrayList<Double> a1 = new ArrayList<Double>();
		
		a1.add(12.21);
		a1.add(14.21);
		a1.add(12.24);
		a1.add(52.27);
		a1.add(null);
		a1.add(12.21);
		a1.add(null);
		 
		System.out.println(a1);
		
		a1.add(2, 45.34);                      //perform shift operation
		
		System.out.println("after adding at ind = 2 is " + a1);
		
		a1.remove(0);
		System.out.println("removes frst mached ele = "+ a1);
		
		a1.remove(null);
		System.out.println(" abject remove method " + a1);
		
		a1.set(2, 77.32);                          //replace content
		System.out.println(" set method " + a1);
		
		Double d = a1.get(5);                  // we get value at the index
		System.out.println(d);
		
		a1.contains(5);
		System.out.println(" contains metho " + a1);
		
		List<Double> l = new ArrayList<Double>();
		
		l.add(12.90);
		l.add(32.90);
		l.add(12.80);
		l.add(12.90);

		a1.addAll(l); //adding from a1 to l
		System.out.println(" after add all " + a1);
		
		boolean contain = a1.containsAll(l);
		System.out.println(" contains method " + contain);
		
		boolean rs = a1.removeAll(a1);
		System.out.println(" remove "+ rs);
		
		System.out.println(" after remomoving " + a1);
		
		
		
		
	}

}
