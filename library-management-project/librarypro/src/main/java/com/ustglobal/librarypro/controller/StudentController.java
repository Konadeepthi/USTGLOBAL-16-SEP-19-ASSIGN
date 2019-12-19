package com.ustglobal.librarypro.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.librarypro.dto.Book;
import com.ustglobal.librarypro.dto.BookRegistration;
import com.ustglobal.librarypro.dto.UserResponse;
import com.ustglobal.librarypro.service.StudentService;

@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
@RestController
public class StudentController {
	@Autowired
	private StudentService service;

	UserResponse response = new UserResponse();

	@GetMapping(path = "/searchbook/{bid}" ,
			produces = MediaType.APPLICATION_JSON_VALUE)
public UserResponse searchBook(@PathVariable("bid") int  bid){
		
		Book bean = service.searchBook(bid);
		if(bean!=null) {
			response.setStatus(201);
			response.setMessage("Success");
			response.setDescription("Data found in DB");
			response.setBook(Arrays.asList(bean)); // a single object to list type and stored
		}else {
			response.setStatus(401);
			response.setMessage("Failure");
			response.setDescription("Data not found in DB");


		}
		return response;
	}//end of search
	
	@PostMapping(path = "/requestingbook" , 
			consumes = MediaType.APPLICATION_JSON_VALUE ,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public UserResponse requestBook(@RequestBody BookRegistration book) {
		
		if(service.requestBook(book)) {
			response.setStatus(201);
			response.setMessage("Success");
			response.setDescription("books added to DB");
			}else {
			response.setStatus(401);
			response.setMessage("Failure");
			response.setDescription("books not added to DB");
			}
			return response;

			}//end of add;
				
	}


