package com.ustglobal.librarypro.service;

import java.util.List;

import com.ustglobal.librarypro.dto.User;

public interface AdminService {
	public boolean addUser(User user);

	public List<User> displayUsers();
	
	public boolean deleteUSer(int lid) ;
	

}
