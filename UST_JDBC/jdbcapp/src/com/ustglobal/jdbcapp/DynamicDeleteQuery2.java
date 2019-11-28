package com.ustglobal.jdbcapp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import com.mysql.jdbc.Driver;
import com.mysql.jdbc.PreparedStatement;

public class DynamicDeleteQuery2 {
	public static void main(String[] args) {
		Connection conn=null;
		java.sql.PreparedStatement pstmt=null;
		try {
			//Step1:Load the Driver
			//Driver driver=new Driver();
			//DriverManager.registerDriver(driver);
			Class.forName("com.mysql.jdbc.Driver");//standard way instead of using Driver.
			//Step2:Get the Connection
			String url="jdbc:mysql://localhost:3306/ust_ty_db?user=root&password=root";
			conn =DriverManager.getConnection(url);
			//step3:issue SQL query
			String sql="delete from employee_info where id=?";
			pstmt = conn.prepareStatement(sql);
			String empid=args[0];
			int id=Integer.parseInt(empid);
			pstmt.setInt(1, id);
			int count=pstmt.executeUpdate();
			//step4:Read The Result
			System.out.println(count + "rows are Deleted");
		}catch(SQLException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			//step5:Close all JDBC Objects
			try {
				if(conn!=null)
				{
					conn.close();
				}if(pstmt!=null) {
					pstmt.close();
				}
				
			}catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}//end of main()



}
