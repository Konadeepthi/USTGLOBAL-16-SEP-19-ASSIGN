package com.ustgloabl.webapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GetDataFromMysql extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String url="jdbc:mysql://localhost:3306/ust_ty_db?user=root&password=root";
		String sql="select * from employee_info where id=?";
		String eid=req.getParameter("empid");
		Connection conn=null;
		java.sql.PreparedStatement pstmt=null;
		ResultSet rs=null;
		try {
			try {
				Class.forName("com.mysql.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			conn = DriverManager.getConnection(url);
			pstmt=conn.prepareStatement(sql);
			int empid=Integer.parseInt(eid);
			pstmt.setInt(1, empid);
			rs=pstmt.executeQuery();
			//step4:read the result
			if(rs.next()) {
				int emp_id=rs.getInt("id");
				int sal=rs.getInt("sal");
				String name=rs.getString("name");
				String gender=rs.getString("gender");
				System.out.println("Id is "+empid);
				System.out.println("Name is "+name);
				System.out.println("salary is "+sal);
				System.out.println("Gender is "+gender);
				System.out.println("******************");
				PrintWriter out=resp.getWriter();
				out.println("<html>");
				out.println("<body>");
				out.println("<table align='center' border='1'");
				out.println("<tr>");
				out.println("<th>Id</th>");
				out.println("<th>Name</th>");
				out.println("<th>Salary</th>");
				out.println("<th>Gender</th>");
				out.println("</tr>");
				out.println("<tr>");
				out.println("<th>"+empid+"</th>");
				out.println("<th>"+name+"</th>");
				out.println("<th>"+sal+"</th>");
				out.println("<th>"+gender+"</th>");
				out.println("</tr>");
				
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

	}
}
