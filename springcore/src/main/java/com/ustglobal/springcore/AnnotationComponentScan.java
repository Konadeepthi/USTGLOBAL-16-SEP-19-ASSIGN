package com.ustglobal.springcore;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.ustglobal.springcore.config.ComponentScanConfigure;
import com.ustglobal.springcore.di.Hello;
import com.ustglobal.springcore.di.Pet;

public class AnnotationComponentScan {
	public static void main(String[] args) {
		AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext(ComponentScanConfigure.class);
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
