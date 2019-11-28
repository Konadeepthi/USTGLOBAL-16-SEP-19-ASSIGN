package com.ustglobal.empapp.util;

import daoimpl.EmployeeDAO;
import daoimpl.EmployeeDAOImpl;

public class EmployeeManager {
	
	public static EmployeeDAO getEmployeeDAO() {
		return new EmployeeDAOImpl();
	}

}
