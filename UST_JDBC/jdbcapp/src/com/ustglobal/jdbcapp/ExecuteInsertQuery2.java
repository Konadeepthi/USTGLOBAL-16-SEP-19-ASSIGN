package com.ustglobal.jdbcapp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import com.mysql.jdbc.Driver;
import com.mysql.jdbc.PreparedStatement;

public class ExecuteInsertQuery2 {
	public static void main(String[] args) {
		Connection conn=null;
		java.sql.PreparedStatement pstmt =null;
		try {
			//Step1:Load the Driver
			Driver driver=new Driver();
			DriverManager.registerDriver(driver);
			//Step2:Get the Connection
			String url="jdbc:mysql://localhost:3306/ust_ty_db?user=root&password=root";
			conn =DriverManager.getConnection(url);
			//step3:issue SQL query
			//String sql="insert into employee_info values("+args[0]+",'"+args[1]+"',"+args[2]+",'"+args[3]+"')";
			String sql="insert into employee_info values(?,?,?,?)";
			//String sql="insert into employee_info values(6,'deepthi',45000,'F')";
			pstmt =conn.prepareStatement(sql);
			String empid=args[0];
			int id=Integer.parseInt(empid);
			pstmt.setInt(1, id);
			String name=args[1];
			pstmt.setString(2, name);

			String empsal=args[2];
			int sal=Integer.parseInt(empsal);
			pstmt.setInt(3, sal);
			String gender=args[3];
			pstmt.setString(4, gender);
			int count=pstmt.executeUpdate();
			//step4:Read The Result
			System.out.println(count + "rows inserted");
		}catch(SQLException e) {
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
				// TODO: handle exception
			}
		}
	}//end of main()

}//end of ExecuteInsertQuery
