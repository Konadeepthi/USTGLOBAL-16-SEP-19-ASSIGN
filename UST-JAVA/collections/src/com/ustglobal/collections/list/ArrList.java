package com.ustglobal.collections.list;

import java.util.ArrayList;
import java.util.Collections;

public class ArrList {
	
	public static void main(String[] args) {
		
		ArrayList<String> als = new ArrayList<String>();
		
		als.add("anvika");
		als.add("vedha");
		als.add("vennala");
		als.add("jashmine");
		
		System.out.println(" before sort "+ als);
		
		Collections.sort(als);
		System.out.println(" after sorting ");
		
	}

}
