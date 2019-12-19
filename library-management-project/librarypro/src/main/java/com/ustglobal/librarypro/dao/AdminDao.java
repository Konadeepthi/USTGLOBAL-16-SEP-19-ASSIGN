package com.ustglobal.librarypro.dao;

import java.util.List;

import com.ustglobal.librarypro.dto.User;

public interface AdminDao {
public boolean addUser(User user);
	
	public List<User> diplayUsers();
	
	public boolean deleteUser(int lid) ;

}
