package com.ustglobal.jdbcapp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import com.mysql.jdbc.Driver;

public class ExecuteUpdateQuery {
	public static void main(String[] args) {
		Connection conn=null;
		Statement stmt=null;
		try {
			//Step1:Load the Driver
			Driver driver=new Driver();
			DriverManager.registerDriver(driver);
			//Step2:Get the Connection
			String url="jdbc:mysql://localhost:3306/ust_ty_db?user=root&password=root";
			conn =DriverManager.getConnection(url);
			//step3:issue SQL query
			String sql="update employee_info set name='XYZ',sal=50000,gender='F' where id=6";
			stmt =conn.createStatement();
			int count=stmt.executeUpdate(sql);
			//step4:Read The Result
			System.out.println(count + "rows are updated");
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			//step5:Close all JDBC Objects
			try {
				if(conn!=null)
				{
					conn.close();
				}if(stmt!=null) {
					stmt.close();
				}
				
			}catch (SQLException e) {
				// TODO: handle exception
			}
		}
	}//end of main()



}
