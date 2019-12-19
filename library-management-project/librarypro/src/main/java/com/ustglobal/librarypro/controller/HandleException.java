package com.ustglobal.librarypro.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ustglobal.librarypro.dto.UserResponse;

@RestControllerAdvice
public class HandleException {
	@ExceptionHandler(Exception.class)
	public UserResponse getException() {
		
		UserResponse UserResponse = new UserResponse();
		UserResponse.setStatus(501);
		UserResponse.setMessage("Errors are occured");
		UserResponse.setDescription("Got exception ");
		
		return UserResponse;
	}

}
