package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.ListIterator;

public class TestD {

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static void main(String[] args) {
		
		ArrayList a = new ArrayList();

		a.add(12);
		a.add(32);
		a.add("chinni");
		a.add(true);

		ListIterator li = a.listIterator();
		while(li.hasNext()) {
			Object o = li.next();
			System.out.println(o);
		}
		
		System.out.println("==================lisyIterator===================");
		while(li.hasPrevious()) {
			Object o = li.previous(); 
			System.out.println(o);
		}
		
	}
	
	
	
	
	
}
