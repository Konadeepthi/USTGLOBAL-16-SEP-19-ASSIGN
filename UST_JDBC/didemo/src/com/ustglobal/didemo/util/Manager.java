package com.ustglobal.didemo.util;

import com.ustglobal.didemo.dao.impl.A;

public class Manager {
	A a=null;
	public I getI() {
		if(a==null) {
			a=new A();
		}
		return a;
	}

}
