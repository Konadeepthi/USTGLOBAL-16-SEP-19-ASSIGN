package com.ustglobal.empapp;
import java.util.List;
import java.util.Scanner;

import com.ustglobal.empapp.util.EmployeeManager;

import daoimpl.EmployeeDAO;
import dto.EmployeeBean;
public class App { 
	public static void main(String[] args) {
		System.out.println("press 1 to show all employee data");
		System.out.println("press 2 to insert employee data");
		System.out.println("press 3 to update employee data");
		System.out.println("press 4 to delete employee data");
		System.out.println("press 5 to search single employee data");
		Scanner sc=new Scanner(System.in);
		int ch=sc.nextInt();
		switch(ch) {
		case 1:
			EmployeeDAO dao=EmployeeManager.getEmployeeDAO();
			List<EmployeeBean> result=dao.getAllEmployeeData();
			dao.getAllEmployeeData();
			for(EmployeeBean bean : result) {
				System.out.println("Id is "+bean.getId());
				System.out.println("name is "+bean.getName());
				System.out.println("Gender is "+bean.getGender());
				System.out.println("salary is "+bean.getSal());
			}
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			EmployeeDAO dao5=EmployeeManager.getEmployeeDAO();
			System.out.println("enter id ");
			int id=sc.nextInt();
		EmployeeBean bean=dao5.searchEmployeeData(id);
		if(bean!=null) {
			System.out.println("Id is "+bean.getId());
			System.out.println("name is "+bean.getName());
			System.out.println("Gender is "+bean.getGender());
			System.out.println("salary is "+bean.getSal());
			
		}else {
			System.out.println("no data found");
		}
			break;
		}		
		}//end of main
}//end of class
