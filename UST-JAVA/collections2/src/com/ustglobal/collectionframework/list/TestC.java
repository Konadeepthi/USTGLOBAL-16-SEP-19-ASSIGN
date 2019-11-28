package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.Iterator;

public class TestC {
	public static void main(String[] args) {

		ArrayList a1 = new ArrayList();
		a1.add(23);
		a1.add("Gopi godameedha pilli");
		a1.add(25.56);
		a1.add(true);
		a1.add('A');
		a1.add("karthik");

		//for(Object o1 : a1) {
		//System.out.println(o1);
		//}

		Iterator it = a1.iterator();
		Object o1 = it.next();
		System.out.println("obj1: "+o1);

		Object o2 = it.next();
		System.out.println("obj2: "+o2);

		Object o3 =it.next();
		System.out.println("obj3: "+o3);

		Object o4 =it.next();
		System.out.println("obj4: "+o4);

		Object o5 =it.next();
		System.out.println("obj5: "+o5);

		boolean b = it.hasNext();
		System.out.println("obj5: "+b);

		Object o6 =it.next();
		System.out.println("obj6: "+o6);

		//Object o7 =it.next();
		//System.out.println("obj7: "+o7);

		System.out.println("=============USING FOR LOOP============");

		for(int i = 0; i<a1.size();i++)
		{
			Object o = a1.get(i);
			System.out.println(o);
		}

		ArrayList al1 = new ArrayList();
		al1.add(12);
		al1.add(233.5);
		al1.add("Manju");
		al1.add(false);



		System.out.println("=====================USING ITERATOR================");

		Iterator it1 = al1.iterator();
		
		while(it1.hasNext()) {
			Object o = it1.next();
			System.out.println(o);
		}

		System.out.println("==================FOR LOOP=========");
		
		for(;it.hasNext();) {
			Object ob = it1.next();
			System.out.println(ob);
		}

	}
}
