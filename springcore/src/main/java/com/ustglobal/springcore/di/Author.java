package com.ustglobal.springcore.di;

import org.springframework.stereotype.Component;

@Component
public class Author {
	private String name;
	private String penName;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPenName() {
		return penName;
	}
	public void setPenName(String penName) {
		this.penName = penName;
	}

}
