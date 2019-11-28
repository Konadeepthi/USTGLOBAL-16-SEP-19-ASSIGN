package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.ListIterator;

public class TestEmployee {
	public static void main(String[] args) {

		ArrayList<Employee> al = new ArrayList<Employee>();
		Employee e1 = new Employee("Manjunath",203,68000.00);
		Employee e2 = new Employee("PavanKumar",204,78000.00);
		Employee e3 = new Employee("Narayana",205,88000.00);
		al.add(e1);
		al.add(e2);
		al.add(e3);

		for(int i=0;i<al.size();i++) {

			Employee e = al.get(i);
			System.out.println("Name is :"+e.name);
			System.out.println("Id is :"+e.id);
			System.out.println("Salary is :"+e.Salary);

		}
		System.out.println("==============FOR EACH=================");
		for(Employee e : al) {
			System.out.println(e);
		}

		System.out.println("========================================");
		for(int i=0;i<al.size();i++) {
			Employee e =(Employee) al.get(i);
			System.out.println(e);
		}
		
		System.out.println("==========================================");

		ListIterator<Employee> al1 = al.listIterator();

		while(al1.hasNext()) {
			Object object = (Object) al1.next();
		}


	}
}
