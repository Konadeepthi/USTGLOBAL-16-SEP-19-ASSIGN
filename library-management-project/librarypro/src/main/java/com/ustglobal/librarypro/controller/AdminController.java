package com.ustglobal.librarypro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.librarypro.dto.User;
import com.ustglobal.librarypro.dto.UserResponse;
import com.ustglobal.librarypro.service.AdminService;
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
@RestController
public class AdminController {
	@Autowired
	private AdminService service;
	
	UserResponse userResponse = new UserResponse();
	
	@PostMapping(path="/registeruser",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public UserResponse addUser(@RequestBody User user) {
		
		if(service.addUser(user)) {
			userResponse.setStatus(201);
			userResponse.setMessage("Success");
			userResponse.setDescription("Data added to DB");
		}else {
			userResponse.setStatus(401);
			userResponse.setMessage("Failure");
			userResponse.setDescription("Data not added to DB");

		}
		
		return userResponse;
	}
	
	@GetMapping(path = "/getuser",
			produces = MediaType.APPLICATION_JSON_VALUE)

	public UserResponse displayUsers(){
		
		List<User> bean = service.displayUsers();
		if(!bean.isEmpty()) {
			userResponse.setStatus(201);
			userResponse.setMessage("Success");
			userResponse.setDescription("Data found in DB");
			userResponse.setUsers(bean); // a single object to list type and stored
		}else {
			userResponse.setStatus(401);
			userResponse.setMessage("Failure");
			userResponse.setDescription("Data not found in DB");


		}
		return userResponse;
	}//end of display
	
	@DeleteMapping(path = "admin/delete/{uid}",
			produces = MediaType.APPLICATION_JSON_VALUE)
	public UserResponse daleteUSer(@PathVariable("uid")int uid) {
		
		if(service.deleteUSer(uid)) {

			userResponse.setStatus(201);
			userResponse.setMessage("Success");
			userResponse.setDescription("Data Deleted from DB");
		}else {
			userResponse.setStatus(401);
			userResponse.setMessage("Failure");
			userResponse.setDescription("Data not Deleted to DB");
		}
		return userResponse;

	}//end of delete
	
}
