package com.ustglobal.mailsystem.service;

import java.util.List;

import com.ustglobal.mailsystem.bean.MailBean;
import com.ustglobal.mailsystem.bean.UserBean;

public interface MailService {
	public boolean userRegister(UserBean bean);
	public UserBean login(String email, String password);
	public List<MailBean> getAllMail(int from_id);
	public UserBean searchByEmail(String email);
	public boolean sendMail(String subject, String msg, int to_id, int from_id);
	public boolean deleteMail(int mid);
	public boolean draftMail(String subject, String msg, UserBean to, UserBean from);
	public boolean changePassword(String email, String password);
}
