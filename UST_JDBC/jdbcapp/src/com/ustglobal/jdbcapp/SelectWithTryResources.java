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

public class SelectWithTryResources {
	public static void main(String[] args) {
		try(FileReader reader =new FileReader("db.properties")){
			Properties prop=new Properties();
			prop.load(reader);
			try {
				Class.forName(prop.getProperty("driver-class-name"));
			} catch (ClassNotFoundException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			String url=prop.getProperty("url");
			String sql=prop.getProperty("select-query");
			try(Connection conn=DriverManager.getConnection(url,prop);
				Statement stmt=conn.createStatement();
				ResultSet rs=stmt.executeQuery(sql)){
					while(rs.next()) {
						System.out.println("Id is "+rs.getInt("id"));
						System.out.println("Name is "+rs.getString("name"));
						System.out.println("salary is "+rs.getInt("sal"));
						System.out.println("Gender is "+rs.getString("gender"));
					}
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			} catch (FileNotFoundException e2) {
				// TODO Auto-generated catch block
				e2.printStackTrace();
			} catch (IOException e2) {
				// TODO Auto-generated catch block
				e2.printStackTrace();
			}
			
		}

}
