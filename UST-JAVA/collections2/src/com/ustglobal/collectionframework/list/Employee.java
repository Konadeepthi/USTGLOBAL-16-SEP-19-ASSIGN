package com.ustglobal.collectionframework.list;

public class Employee {
	String name;
	int id;
	double Salary;
	public Employee(String name, int id, double salary) {
		super();
		this.name = name;
		this.id = id;
		Salary = salary;
	}
	public String toString() {
		return "Employee [name=" + name + ", id=" + id + ", Salary=" + Salary + ", getClass()=" + getClass()
		+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

}
