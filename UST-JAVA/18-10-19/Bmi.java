class Bmi{
	public static void main(String args[])
	{
	double height=200;
	double weight=45;
	double bmi=weight/(height)*(height);
	if(bmi<18.5){
	System.out.println("youre in under weight");
	}
	else if(bmi>18.5 && bmi<24.9){
	System.out.println("youre in a healthy weight range weight");
	}
	else if(bmi>25 && bmi<29.9){
	System.out.println("youre over weight");
	}
	else if(bmi>30){
	System.out.println("youre obese weight");
	}
     
}
	
}