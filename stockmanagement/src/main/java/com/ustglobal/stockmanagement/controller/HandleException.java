package com.ustglobal.stockmanagement.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ustglobal.stockmanagement.dto.OrderResponse;
import com.ustglobal.stockmanagement.dto.ProductResponse;
@RestControllerAdvice   //it will advice the controller,if there is any Exception it will execute
public class HandleException {
	@ExceptionHandler(Exception.class)
	public ProductResponse getException() {
		ProductResponse response=new ProductResponse();
		response.setStatusCode(501);
		response.setMessage("Error in code");
		response.setDescription("Got an Exception");
		return response;
	}

}
