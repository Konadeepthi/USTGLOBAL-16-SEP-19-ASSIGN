package com.ustglobal.librarypro.dao;

import com.ustglobal.librarypro.dto.User;

public interface LoginUser {
	public User login(int id, String  password);
}
