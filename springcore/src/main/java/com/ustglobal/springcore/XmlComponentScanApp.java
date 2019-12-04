package com.ustglobal.springcore;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ustglobal.springcore.di.Cat;
import com.ustglobal.springcore.di.Hello;
import com.ustglobal.springcore.di.Pet;

public class XmlComponentScanApp {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context=new ClassPathXmlApplicationContext("spring.xml");
		Hello hello= new Hello();
		hello.setMsg("I love hybernate");
		System.out.println(hello.getMsg());
		Pet pet=context.getBean(Pet.class);
		pet.setName("siri");
		System.out.println(pet.getName());
		Cat cat=context.getBean(Cat.class);
		cat.makeSound();
		pet.getAnimal().makeSound();
	}

}
