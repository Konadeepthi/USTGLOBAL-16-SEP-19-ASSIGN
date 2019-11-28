package com.ustglobal.jdbcapp;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

import com.mysql.jdbc.Driver;


public class MyFirstJDBCWithProperties {
	public static void main(String[] args) {
		Connection conn=null;//interface
		Statement stmt=null;//interface
		ResultSet rs=null;//interface
		FileReader reader=null;
		try {
			//STEP 1 LOADING THE DRIVER
			reader =new FileReader("db.properties");
			Properties prop=new Properties();
			prop.load(reader);
			Class.forName(prop.getProperty("driver-class-name"));
			//STEP 2 SET THE CONNECTION
			/*String url="jdbc:mysql://localhost:3306/ust_ty_db?user=root&password=root";
			conn = DriverManager.getConnection(url);*/
			String url=prop.getProperty("url");
			conn=DriverManager.getConnection(url,prop);
			//step 3 Issue SQL query
			stmt=conn.createStatement();
			String sql=prop.getProperty("select-query");
			stmt=conn.createStatement();
			rs=stmt.executeQuery(sql);
			//Step 4 Read the Result
			Driver d=new Driver();
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
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
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
			}catch(Exception e) {
				e.printStackTrace();
			}
		
	}
	}//end of main
	}//end of class
