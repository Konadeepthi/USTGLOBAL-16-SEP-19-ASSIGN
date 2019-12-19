package com.ustglobal.librarypro.service;

import com.ustglobal.librarypro.dto.User;

public interface LoginService {
	public User login(int id, String password);
}
