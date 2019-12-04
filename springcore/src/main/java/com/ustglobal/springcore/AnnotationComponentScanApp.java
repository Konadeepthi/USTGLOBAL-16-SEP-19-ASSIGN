package com.ustglobal.springcore;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.ustglobal.springcore.config.ComponentScanConfiguration;
import com.ustglobal.springcore.di.Cat;
import com.ustglobal.springcore.di.Hello;
import com.ustglobal.springcore.di.Pet;

public class AnnotationComponentScanApp {
	public static void main(String[] args) {
		AnnotationConfigApplicationContext context=new AnnotationConfigApplicationContext(ComponentScanConfiguration.class);
		Hello hello= context.getBean(Hello.class);
		hello.setMsg("I love biryani");
		System.out.println(hello.getMsg());
		Pet pet=context.getBean(Pet.class);
		pet.setName("bunny");
		System.out.println(pet.getName());
		Cat cat=context.getBean(Cat.class);
		cat.makeSound();
		pet.getAnimal().makeSound();
	}


	}

