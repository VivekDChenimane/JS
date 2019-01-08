const readline = require('readline-sync');
module.exports ={
    
flipCoin(times){
    var tails=0,heads=0;
    for(let index=0;index<times;index++)
    {
    var value = Math.random();
    if(value<0.5)
        tails++;
    else
        heads++;
    }
    console.log("The percentage of heads is :"+(heads/times)*100+"%");
    console.log("The percentage of tails is :"+(tails/times)*100+"%");
},

leap(year){
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        console.log(year +" is a leap year");
    else
        console.log(year +" is not a leap year");
},

powerOfTwo(range){

    for(let index=1; index<=range; index++)
    {
       var res = Math.pow(2,index);
       console.log(index+"->"+res);
    }        
},
harmonic(num){
    var sum=0;
    for(let index=1;index<=num;index++)
    {
        sum+=1/index;
    }
    console.log("The "+num+"th number is "+sum);
},

/*primeFactorization(num){
    var flag=0;
    while(flag==0)
    {
        if(prime())
        {
            console.log("Since, it's a prime the Factorization of "+num+" is "+num);
            flag=1;
        }
        else
        {
            if(num%2==0)
            {
                console.log("2 ");
                num/2;
            }
            for(let i=3;i*i<=num;i+2)
            {
                while(num%i==0)
                console.log(i+" ");
            }
        }
    }
}*/

randomNumber(min,max)
{
    var res=Math.round(Math.random()*(max-min)+min);
    console.log(res);
    return res;
},

/*randomArray(num)
{
    var arr = [];
    for(let i=0;i<num;i++)
    {
        var number;
        var flag = 1;
        while(flag==1)
        {
            number = this.randomNumber(1,num);
            for(let index=0;index<=arr.length;i++)
                if(number==arr[index])
                    break;
            flag = 0;
        }
        arr[arr.length] = number;
    }
    return arr;
}*/

twoDArray(m,n)
{
    var arr=[] ;                                                        ;
    for(let i=0;i<m;i++)
    {
        arr.push([]);
        for(let j=0;j<n;j++)
            arr[i][j] = readline.question("Enter the value");
    }
    return arr;
},
print(arr){
    for(let i=0;i<arr.length;i++)
            console.log(arr[i]);
},

triplet(arr)
{
    var n = arr.length;
    var count = 0;
	for(let i=0;i<n-2;i++)
	  for(let j=i+1;j<n-1;j++)
          for(let k=j+1;k<n;k++){
              console.log('k: '+k);
          console.log(Number(arr[i])+Number(arr[j])+Number(arr[k]));
             if(Number(arr[1][i])+Number(arr[1][j])+Number(arr[1][k])==0)
                { 
                    let l = 0;
                    console.log(l)
                    console.log(arr[1][i]+","+arr[1][j]+","+arr[1][k]+".");
                    count++;
                    l++;
                    
                }
            }
	console.log("The number of trilets who's sum is equal to 0 is "+count);
},


euclidean(x,y)
{
    return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
}
}