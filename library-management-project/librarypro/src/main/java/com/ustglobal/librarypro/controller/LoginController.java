package com.ustglobal.librarypro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.librarypro.dto.UserResponse;
import com.ustglobal.librarypro.service.LoginService;
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
@RestController
public class LoginController {
	@Autowired
	private LoginService service;

	UserResponse response = new UserResponse();
			@PostMapping(path = "/login")
	public UserResponse login(@RequestParam("id") int id,@RequestParam("password") String password) {

		if(service.login(id, password) != null) {

			response.setStatus(201);
			response.setMessage("Success");
			response.setDescription("Data added to DB");
		}else {
			response.setStatus(401);
			response.setMessage("Failure");
			response.setDescription("Data not added to DB");


		}

		return response;
	}


}
