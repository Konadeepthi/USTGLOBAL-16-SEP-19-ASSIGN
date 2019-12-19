package com.ustglobal.springboot.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ustglobal.springboot.dto.EmployeeResponse;
@RestControllerAdvice   //it will advice the controller,if there is any Exception it will execute
public class HandleException {
	@ExceptionHandler(Exception.class)
	public EmployeeResponse getException() {
		EmployeeResponse response=new EmployeeResponse();
		response.setStatusCode(501);
		response.setMessage("Error in code");
		response.setDescription("Got an Exception");
		return response;
	}

}
