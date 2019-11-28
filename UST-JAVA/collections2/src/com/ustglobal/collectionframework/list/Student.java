package com.ustglobal.collectionframework.list;

public class Student {
	int id;
	String name;
	double percentage;
	public Student(int id, String name, double percentage) {
		super();
		this.id = id;
		this.name = name;
		this.percentage = percentage;
	}
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", percentage=" + percentage + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

}
