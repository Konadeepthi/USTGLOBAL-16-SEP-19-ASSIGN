package com.ustglobal.collectionframework.list;

public class Teacher {
	String name;
	double salary;
	String subjectname;
	int id;
	public Teacher(String name, double salary, String subname, int id) {
		super();
		this.name = name;
		this.salary = salary;
		this.subjectname = subname;
		this.id = id;
	}
	public String toString() {
		return "Teacher [name=" + name + ", salary=" + salary + ", subname=" + subjectname + ", id=" + id + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}


}
