package com.ustglobal.stockmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.stockmanagement.dto.OrderInfo;
import com.ustglobal.stockmanagement.dto.OrderResponse;
import com.ustglobal.stockmanagement.dto.ProductInfo;
import com.ustglobal.stockmanagement.dto.ProductResponse;
import com.ustglobal.stockmanagement.service.CustomerService;
import com.ustglobal.stockmanagement.service.ProductService;

@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
@RestController
public class CustomerController {
	@Autowired
	private CustomerService service;
	@PostMapping(path="/addrequest", 
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public  ProductResponse addRequest(@RequestBody OrderInfo bean) {
		ProductResponse response=new ProductResponse();
		if(service.addRequest(bean)) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("Data added to the DB");
		}else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("Data not added to the DB");
		}
		return response;
		//return service.addEmployee(bean);
	}//end of addEmployee	

}
