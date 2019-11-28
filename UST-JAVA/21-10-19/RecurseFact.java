class RecurseFact{
public static void main(String arg[]){
int num=5;
int fact1=fact(num);
System.out.println(fact1);
}
static int fact(int n)
{
return n*fact(n-1);
}
}