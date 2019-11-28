package com.ustglobal.thread.defining;
public class MyThread extends Thread{
	public void run(){
	for(int i=0;i<10;i++) {
		System.out.println("child thread");
	}
	}
	/*public void run(int i) {
		System.out.println("run(int i) method");
	}*/
	/*@Override
	public void start() {
		System.out.println("start() method override");
	}*/
}
