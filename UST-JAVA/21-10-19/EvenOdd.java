class EvenOdd{
public static void main(String arg[]){
int num=10;
boolean res=evenOdd(num);
if(res)
System.out.println("number is even");
else
System.out.println("number is odd");
}
static boolean evenOdd(int num)
{
if(num%2==0)
return true;
else
return false;
}
}