package com.ustglobal.thread.pausing;

public class TestJoin {
	public static void main(String[] args) {
		System.out.println("main stated");
		MyJoinThread t=new MyJoinThread();
		t.start();
		try {
			//t.join();
			t.join(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		for(int i=0;i<10;i++) {
			System.out.println("main thread");
		}
		System.out.println("Main ended");
	}

}
