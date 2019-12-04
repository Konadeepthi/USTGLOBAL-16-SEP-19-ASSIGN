package com.ustglobal.springcore;

import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ustglobal.springcore.di.Animal;
import com.ustglobal.springcore.di.Hello;
import com.ustglobal.springcore.di.Pet;

public class App 
{
    public static void main( String[] args )
    {
      ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
      Hello hello=context.getBean(Hello.class);
      Hello hello2= context.getBean(Hello.class);
      System.out.println(hello);
      System.out.println(hello2);
      System.out.println(hello.getMsg());
      Map<String, Integer> map=hello.getMap();
      System.out.println(map.keySet());
      System.out.println(map.values());
      System.out.println(hello.getMap());
      Animal animal=context.getBean(Animal.class);
      animal.makeSound();
      Animal animal2=(Animal)context.getBean("dog");
      animal2.makeSound();
      System.out.println("********************************");
      Pet pet=context.getBean(Pet.class);
      System.out.println(pet.getName());
      pet.getAnimal().makeSound();
    }
}
