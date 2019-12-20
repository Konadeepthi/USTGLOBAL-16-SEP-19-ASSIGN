package com.ustglobal.stockmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.stockmanagement.dao.CustomerDao;
import com.ustglobal.stockmanagement.dao.ProductDao;
import com.ustglobal.stockmanagement.dto.OrderInfo;
@Service
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	private CustomerDao dao;
	@Override
	public boolean addRequest(OrderInfo bean) {
		return dao.addRequest(bean);
	}

}
