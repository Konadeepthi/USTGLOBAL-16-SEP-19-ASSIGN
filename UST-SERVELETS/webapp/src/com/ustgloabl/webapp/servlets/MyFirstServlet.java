package com.ustgloabl.webapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/first")
public class MyFirstServlet extends HttpServlet{
	protected void doGet(HttpServletRequest req,HttpServletResponse resp) throws ServletException,IOException{
	System.out.println("service method");
	System.out.println("extra line of code");
	ServletContext context=getServletContext();
	String companyname=context.getInitParameter("company-name");
	ServletConfig config=getServletConfig();
	String batchName=config.getInitParameter("batch-name");
		PrintWriter out=resp.getWriter();
	resp.setContentType("text/html");
	out.println("<html>");
	out.println("<body>");
	Date date=new Date();
	out.println("<h1 style='color: Red'>Date and Time is:");
	out.println(date/*.toString()*/);//-->it will work with and with out toString also
	out.println("</h1>");
	out.println("<h2>");
	out.println(companyname);
	out.println("</h2>");
	
	out.println("<h2>");
	out.println(batchName);
	out.println("</h2>");
	
	String url=req.getRequestURI();
	String method=req.getMethod();
	out.println("<br>");
	out.println(url);
	out.println("<br>");
	out.println(method);
	out.println("</body>");
	out.println("</html>");	
	}//end of doGet()
}//end of class
