package com.ustglobal.filehandling;

import java.io.BufferedReader;
import java.io.FileReader;

public class CSVReader {
	public static void main(String[] args) {
		try(FileReader in=new FileReader("csv.txt");
		BufferedReader reader=new BufferedReader(in)){
			//System.out.println(reader.readLine());-->it will give onlu first line
			while(reader.ready()) {//ready() will check if the next line present or not.
			String line=reader.readLine();
				System.out.println(reader.readLine());
				System.out.println("****************");
			String [] words=line.split(",");
			System.out.println("Id is "+words[0]);
			System.out.println("Name is "+words[1]);
			System.out.println("salary is "+words[2]);
			System.out.println("gender is "+words[3]);
			System.out.println("**************");
			
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

}
