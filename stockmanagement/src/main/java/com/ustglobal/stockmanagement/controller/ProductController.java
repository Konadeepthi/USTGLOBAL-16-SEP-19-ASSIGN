package com.ustglobal.stockmanagement.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ustglobal.stockmanagement.dto.ProductInfo;
import com.ustglobal.stockmanagement.dto.ProductResponse;
import com.ustglobal.stockmanagement.service.ProductService;
@CrossOrigin(origins = "*",allowedHeaders = "*", allowCredentials = "true")
@RestController
public class ProductController {
	@Autowired
	private ProductService service;
	@PostMapping(path="/add", 
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public  ProductResponse addProduct(@RequestBody ProductInfo bean) {
		ProductResponse response=new ProductResponse();
		if(service.addProduct(bean)) {
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
	@PutMapping(path="/modify",
			consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ProductResponse modifyProducts(@RequestBody ProductInfo bean) {
		ProductResponse response=new ProductResponse();
		if(service.modifyProducts(bean)) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("Data modified in the DB");
		}else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("Data not modified to the DB");
		}
		return response;
		
	}
	@GetMapping(path="/searchbyname/{name}",produces = MediaType.APPLICATION_JSON_VALUE)
	public ProductResponse searchProductByName(@PathVariable("name") String name) {
		ProductResponse response=new ProductResponse();
		 ProductInfo bean=service.searchProductByName(name);
		if(bean!=null) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("Data found in the DB");
			response.setProductBeans(Arrays.asList(bean));//asList() converts the object to List type.
		}else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("Data not found in the DB");
		}
		return response;
		//return service.getEmployee(id);
	}
	@GetMapping(path="/searchbycategory/{category}",produces = MediaType.APPLICATION_JSON_VALUE)
	public ProductResponse searchProductByCategory(@PathVariable("category") String category) {
		ProductResponse response=new ProductResponse();
		 List<ProductInfo> bean=service.searchProductByCategory(category);
		if(bean!=null) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("Data found in the DB");
			response.setProductBeans(bean);//asList() converts the object to List type.
		}else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("Data not found in the DB");
		}
		return response;
		//return service.getEmployee(id);
	}
	@GetMapping(path="/searchbycompany/{company}",produces = MediaType.APPLICATION_JSON_VALUE)
	public ProductResponse searchProductByCompany(@PathVariable("company") String company) {
		ProductResponse response=new ProductResponse();
		 List<ProductInfo> bean=service.searchProductByCompany(company);
		if(bean!=null) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("Data found in the DB");
			response.setProductBeans(bean);//asList() converts the object to List type.
		}else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("Data not found in the DB");
		}
		return response;
		//return service.getEmployee(id);
	}
	@GetMapping(path="/get-all",produces = MediaType.APPLICATION_JSON_VALUE)
	public ProductResponse showAllProducts(){
		ProductResponse response=new ProductResponse();
		List<ProductInfo> beans=service.showAllProducts();
		if(!beans.isEmpty()) {
			response.setStatusCode(201);
			response.setMessage("success");
			response.setDescription("Data found in the DB");
			response.setProductBeans(beans);//asList() converts the object to List type.
		}else {
			response.setStatusCode(401);
			response.setMessage("Failure");
			response.setDescription("Data not found in the DB");
		}
		return response;
		
		//return service.getAllEmployee();
	}

}
