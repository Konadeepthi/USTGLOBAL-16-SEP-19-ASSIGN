package com.ustglobal.stockmanagement.dto;

import java.util.List;

public class ProductResponse {
	private int statusCode;
	private String message;
	private String description;
	private List<ProductInfo> productBeans;
	private List<OrderInfo> orderBeans;
	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<ProductInfo> getProductBeans() {
		return productBeans;
	}
	public void setProductBeans(List<ProductInfo> productBeans) {
		this.productBeans = productBeans;
	}
	}
