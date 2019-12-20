package com.ustglobal.stockmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.stockmanagement.dao.ProductDao;
import com.ustglobal.stockmanagement.dto.ProductInfo;
@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProductDao dao;

	@Override
	public ProductInfo searchProductByName(String name) {
		// TODO Auto-generated method stub
		return dao.searchProductByName(name) ;
	}

	@Override
	public List<ProductInfo> searchProductByCategory(String category) {
		return dao.searchProductByCategory(category);
	}

	@Override
	public List<ProductInfo> searchProductByCompany(String company) {
		return dao.searchProductByCompany(company);
	}

	@Override
	public boolean addProduct(ProductInfo bean) {
		return dao.addProduct(bean);
	}

	@Override
	public boolean modifyProducts(ProductInfo bean) {
		return dao.modifyProducts(bean);
	}

	@Override
	public List<ProductInfo> showAllProducts() {
		return dao.showAllProducts();
	}

}
