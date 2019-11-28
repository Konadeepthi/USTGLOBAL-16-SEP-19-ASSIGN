package com.ustglobal.empapp.util;

import com.ustglobal.empapp.daoimpl.EmployeeDAO;
import com.ustglobal.empapp.daoimpl.EmployeeDAOImpl;

public class EmployeeManager {
	
	public static EmployeeDAO getEmployeeDAO() {
		return new EmployeeDAOImpl();
	}

}
