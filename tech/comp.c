#include<stdio.h>
#include<string.h>
void main()
{
	char ch[16];
	int n;
	scanf("%d",&n);
	for(i=0;i<n;i++)
	{
		scanf("%c",&ch[i]);
		ch[i].toupper();
	}
	
}