class Ternary{
public static void main(String arg[]){
int a=30;
int b=20;
int c=15;
int big=a>b&&a>c?a:b>a&&b>c?b:c;
System.out.println(big);
int big1=(a>b&&a>c)?a:(b>c)?b:c;
System.out.println(big1);
}
}
