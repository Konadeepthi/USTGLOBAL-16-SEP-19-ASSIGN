package com.ustglobal.springcore.di;

import org.springframework.stereotype.Component;

@Component("dog")
public class Dog implements Animal {

	public void makeSound() {
		System.out.println("Baooooooooooooooooo");
	}

}
