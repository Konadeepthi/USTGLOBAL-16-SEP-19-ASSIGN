package com.ustglobal.stockmanagement.dao;
import java.util.List;

import com.ustglobal.stockmanagement.dto.ProductInfo;

public interface ProductDao {
	public ProductInfo searchProductByName(String name);
	public List<ProductInfo> searchProductByCategory(String category);
	public List<ProductInfo> searchProductByCompany(String company);
	public boolean addProduct(ProductInfo bean);
	public boolean modifyProducts(ProductInfo bean);
	public List<ProductInfo> showAllProducts() ;
}
