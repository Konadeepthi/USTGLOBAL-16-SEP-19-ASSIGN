package com.ustglobal.jdbcapp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.mysql.jdbc.Driver;

public class MyFirstJDBC {
public static void main(String[] args) {
	Connection conn=null;//interface
	Statement stmt=null;//interface
	ResultSet rs=null;//interface
try {
		//STEP 1 LOADING THE DRIVER
		Driver driver =new Driver();
		DriverManager.registerDriver(driver);
		//STEP 2 SET THE CONNECTION
		/*String url="jdbc:mysql://localhost:3306/ust_ty_db?user=root&password=root";
		conn = DriverManager.getConnection(url);*/
		String url="jdbc:mysql://localhost:3306/ust_ty_db?";
		conn=DriverManager.getConnection(url,"root","root");
		//step 3 Issue SQL query
		stmt=conn.createStatement();
		String sql="select * from employee_info";
		rs=stmt.executeQuery(sql);
		//Step 4 Read the Result
		while(rs.next()) {
			int id=rs.getInt("id");
			String name=rs.getString("name");
			int sal=rs.getInt("sal");
			String gender =rs.getString("gender");
			System.out.println("Id is "+id);
			System.out.println("Name is "+name);
			System.out.println("salary is "+sal);
			System.out.println("Gender is "+gender);
			System.out.println("*************");
			
		}
	}catch(SQLException e) {
		e.printStackTrace();
	}finally {
		//step5:close all the JDBC objects
		try {
			if(conn!=null) {
				conn.close();
			}
			if(stmt!=null) {
				stmt.close();
			}if(rs!=null) {
				rs.close();
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}
	
}
}//end of main
}//end of class
