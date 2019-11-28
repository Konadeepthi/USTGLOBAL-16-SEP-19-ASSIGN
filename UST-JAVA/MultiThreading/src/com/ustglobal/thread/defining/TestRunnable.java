package com.ustglobal.thread.defining;

public class TestRunnable {
	public static void main(String[] args) {
		System.out.println("main started");
		MyRunnable mr=new MyRunnable();
		//mr.start(); start() is undefined in MyRunnable 
		Thread t=new Thread(mr);
		t.start();
		for(int i=0;i<10;i++) {
			System.out.println("main thread");
		}
		System.out.println("main ended");
	}
}
