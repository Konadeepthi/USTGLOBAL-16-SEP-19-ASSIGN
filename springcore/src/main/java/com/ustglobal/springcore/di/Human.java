package com.ustglobal.springcore.di;

import org.springframework.stereotype.Component;

@Component("human")
public class Human implements Animal{
	public void makeSound() {
		System.out.println("blaa blaa blaa blaa blaa");
	}
}
