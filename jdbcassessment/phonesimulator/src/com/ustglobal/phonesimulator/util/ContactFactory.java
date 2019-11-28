package com.ustglobal.phonesimulator.util;

import com.ustglobal.phonesimulator.dao.ContactDao;
import com.ustglobal.phonesimulator.dao.ContactDaoImpl;

public class ContactFactory {
private ContactFactory() {
	
}
public static ContactDao getContactDao() {
	return new ContactDaoImpl();
}
}
