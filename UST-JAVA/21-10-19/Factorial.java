class Factorial{
public static void main(String arg[]){
int num=5;
int fact1=fact(num);
System.out.println(fact1);
}
static int fact(int n)
{
int facto=1;
for(int i=1;i<=n;i++)
{
facto=facto*i;
}
return facto;
}
}