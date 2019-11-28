package com.ustglobal.collectionframework.list;

import java.awt.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;

public class TestF {
	public static void main(String[] args) {
		ArrayList<String> al = new ArrayList<String>();
		al.add("Anupama Parameswaran");
		al.add("Rashi Khanna");
		al.add("Kareena Kappor");
		al.add("Rachitha Ram");

		String name = al.get(3);
		System.out.println(name.toUpperCase());
		Iterator<String> li = al.iterator(); 
		while(li.hasNext()) {
			String s = li.next();
			System.out.println(s);
		}
		System.out.println("=============USING LIST ITERATOR===============");

		ListIterator<String> l = al.listIterator();
		while(l.hasNext()) {
			String s = l.next();
			System.out.println(s);
		}
		System.out.println("==============USING FOR LOOP======================");

		for(String n:al) {
			System.out.println(n);
		}
	}
}
