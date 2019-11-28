package com.ustglobal.jdbcapp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mysql.jdbc.Driver;
import com.mysql.jdbc.PreparedStatement;

public class DynamicSelectQuery {
	public static void main(String[] args) {
		String url="jdbc:mysql://localhost:3306/ust_ty_db?user=root&password=root";
		String sql="select * from employee_info where id=?";
		Connection conn=null;
		java.sql.PreparedStatement pstmt=null;
		ResultSet rs=null;
		try {
			Driver driver=new Driver();
			DriverManager.registerDriver(driver);
			conn = DriverManager.getConnection(url);
			pstmt=conn.prepareStatement(sql);
			String empid=args[0];
			int id=Integer.parseInt(empid);
			pstmt.setInt(1, id);
			rs=pstmt.executeQuery();
			//step4:read the result
			if(rs.next()) {
				int emp_id=rs.getInt("id");
				int sal=rs.getInt("sal");
				String name=rs.getString("name");
				String gender=rs.getString("gender");
				System.out.println("Id is "+id);
				System.out.println("Name is "+name);
				System.out.println("salary is "+sal);
				System.out.println("Gender is "+gender);
				System.out.println("******************");
			}
		}
			catch(SQLException e) {
			e.printStackTrace();
		}finally{
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

}//end of class
