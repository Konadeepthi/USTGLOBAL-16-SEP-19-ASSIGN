package com.ustglobal.springcore.di;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class PetConfigurationClass {


	@Bean(name="dog")
	public Dog getDog() {
		return new Dog();
	}
	@Bean(name="cat")
	public Cat getCat() {
		return new Cat();
	}
	@Bean(name="pet")
	public Pet getPet() {
		Pet pet=new Pet();
		pet.setName("Bittu");
		/* pet.setAnimal(getDog()); */
		return pet;
	}

}
