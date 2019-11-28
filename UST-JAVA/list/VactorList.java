package com.ustglobal.collectionframework.list;

import java.util.Arrays;
import java.util.List;
import java.util.Vector;

public class VactorList {
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public static void main(String[] args) {
		
		Vector v = new Vector();
		System.out.print(v.capacity());
		
		v.add(null);
		v.add("deepthi");
		v.add(12);
		v.add(32.34);
		v.add(null);
		v.add("deepthi");
		v.add(12);
		v.add(32.34);
		v.add(null);
		v.add("deepthi");
		v.add(12);
		v.add(32.34);
		
	   for (Object object : v) {
		   
		   System.out.print( "   " + object   + " ");
	}
		System.out.println(v.capacity());
		
		Object o = v.toArray();
		System.out.println(o);
		
		List l = Arrays.asList(o);
		System.out.println(l);
			
	}

}
