package com.ustglobal.librarypro.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.librarypro.dao.AdminDao;
import com.ustglobal.librarypro.dto.User;
@Service
public class AdminServiceImpl implements AdminService{
	@Autowired
	private AdminDao dao;

	@Override
	public boolean addUser(User user) {
		
		return dao.addUser(user);
	}

	@Override
	public List<User> displayUsers() {
		
		return dao.diplayUsers();
	}

	@Override
	public boolean deleteUSer(int lid) {
		
		return dao.deleteUser(lid);
	}


}
