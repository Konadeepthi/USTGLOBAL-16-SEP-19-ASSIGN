package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.Collections;

public class TestM {
	public static void main(String[] args) {
		ArrayList<String> al = new ArrayList<String>();
		al.add("Manjunath");
		al.add("Pavan Kumar");
		al.add("Ravindra");
		al.add("Dileep kumar");

		System.out.println("Before sort-------------->" +al);
		Collections.sort(al);
		System.out.println("After sort----------------->" +al);
	}
}
