package com.ustglobal.springcore;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ustglobal.springcore.di.Hello;
import com.ustglobal.springcore.di.Pet;

public class XMLComponentScan {
public static void main(String[] args) {
	ClassPathXmlApplicationContext context=
			new ClassPathXmlApplicationContext("spring.xml");
	Hello hello=context.getBean(Hello.class);
	hello.setMsg("i love spring");
	Map<String, Integer> map=new HashMap<String, Integer>();
	map.put("one", 1);
	hello.setMap(map);
	System.out.println(hello.getMsg());
	System.out.println(hello.getMap());
	System.out.println("******************************");
	Pet pet=context.getBean(Pet.class);
	pet.setName("siri");
	System.out.println(pet.getName());
	pet.getAnimal().makeSound();
	
}
}
