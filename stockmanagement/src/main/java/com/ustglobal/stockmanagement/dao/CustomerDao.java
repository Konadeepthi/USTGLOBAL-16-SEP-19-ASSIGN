package com.ustglobal.stockmanagement.dao;

import com.ustglobal.stockmanagement.dto.OrderInfo;
import com.ustglobal.stockmanagement.dto.ProductInfo;

public interface CustomerDao {
	public boolean addRequest(OrderInfo bean);

}
