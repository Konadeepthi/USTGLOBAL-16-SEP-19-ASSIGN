package com.ustglobal.librarypro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.librarypro.dao.LoginUser;
import com.ustglobal.librarypro.dto.User;
@Service
public class LoginServiceImpl implements LoginService {
	@Autowired
	private LoginUser dao;

	@Override
	public User login(int id, String password) {
		
		
		return dao.login(id, password);
	}


}
