package com.ustglobal.thread.defining;

public class TestThread {
	public static void main(String[] args) {
		System.out.println("main started");
		MyThread m=new MyThread();
		//m.run();-->don't do like th is.
		//dont call run(),it behaves like normal program
		//all code will execute inside main thread only.
		m.start();
		//m.start();->we cant call start() again it will throw IllegalThreadStateException
		for(int i=0;i<10;i++) {
			System.out.println("main thread");
		}
		System.out.println("main ended");
	}
}

