package com.ustglobal.collections.list;

import java.util.Collections;
import java.util.LinkedList;

public class LinkList {
	public static void main(String[] args) {
		
		
		LinkedList<Integer> ll = new LinkedList<Integer>();
		ll.add(12);
		ll.add(32);
		ll.add(95);
		ll.add(67);
		ll.add(90);
		
		System.out.println(" before sort "+ ll);
		
		//should not pass null and non-genric type should pass only genric type
		
		Collections.sort(ll); 
		System.out.println("after sorting " + ll);
		
		Collections.reverse(ll);
		System.out.println("after reverse " + ll);
		
		Collections.shuffle(ll);
		System.out.println(" after shuffle "+ ll); 
		
		
		
	}

}
