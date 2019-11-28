package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.Iterator;

public class TestF {
	
	public static void main(String[] args) {
		
		ArrayList<String> a1 = new ArrayList<String>();
		
		
		a1.add("sanvi");
		a1.add("deepti");
		a1.add("sai nitha sri");
		
		a1.add("santhos");
		
		String name = a1.get(0);
		System.out.println(name);
		
		Iterator<String> li = a1.iterator();
		while(li.hasNext()) {
			
			String s = li.next();
			System.out.println(s);
		}
		
		System.out.println("===================foreach==========");
		
		for(String s : a1) {
			
			System.out.println(s);
			
		}
		
		
		
		
	}

}
