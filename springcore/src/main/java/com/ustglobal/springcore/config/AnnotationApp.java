package com.ustglobal.springcore.config;

import java.awt.event.FocusAdapter;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.ustglobal.springcore.di.Animal;
import com.ustglobal.springcore.di.Hello;
import com.ustglobal.springcore.di.Pet;

public class AnnotationApp {
	public static void main(String[] args) {
		AnnotationConfigApplicationContext context=
				new AnnotationConfigApplicationContext(HelloConfigureClass.class);
		Hello hello=context.getBean(Hello.class);
		System.out.println(hello.getMsg());
		Map<String, Integer> map=hello.getMap();
		System.out.println(hello.getMap());
		Hello hello1=context.getBean(Hello.class);
		System.out.println(hello);
		System.out.println(hello1);
		System.out.println("********************************");
//		Animal animal=context.getBean(Animal.class);
//		animal.makeSound();
		System.out.println("*********************************");
		Pet pet=context.getBean(Pet.class);
		System.out.println(pet.getName());
		pet.getAnimal().makeSound();
		context.close();
	}
}
