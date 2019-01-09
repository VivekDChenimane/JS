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


/**
 * Leap Program
 * @param {*} year 
 */
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
},
timeSecond(){
    var date = new Date
    return date.getSeconds()
},

intializeGame()
	{
        var game=[];
		for(let i=0;i<=2;i++){
            game.push([]);
            for(let j=0;j<=2;j++)
                game[i][j]='-';
        }
        return game;
    },
    
    random() {
		var value = Math.floor(Math.random()*3);
		console.log(value);
		return value;
    },
    
    mark(game,x,y,value)
	{
		if(game[x][y]=='-') 
			game[x][y] = value;
		for(let i=0;i<=2;i++)
		{
            var print = [];
			for(let j=0;j<=2;j++)
				print[j] = game[i][j];
			console.log(print);
        }
        return game;
	}
    ,
    computerPlayer(game) {
        var arr;
		var flag = false;
		while(flag==false) {
			var x = this.random();
			var y = this.random();
			if(game[x][y]=='-') 
			{
				arr = this.mark(game,x,y,'O');
				flag = true;
			}
        }
        return game;
	}
    ,
    userPlayer(game) {
	var flag = false;
	while(flag==false)
	{
		console.log("Enter the row value:");
		let x = readline.questionInt('Enter the value of x within 0,1,2'); 
		let y = readline.questionInt('Enter the value of y within 0,1,2');
        if(game[x][y]=='-') 
		{
			this.mark(game,x,y,'X');
			flag=true;
		}
		else
			console.log("Please enter the correct choice");
    }
    return game;
}    
,
check(game) {
    for(let i=0;i<=2;i++)
    {
        if(game[i][0] == game[i][1] && game[i][1] == game[i][2])
        {
            if(game[i][0]=='O' || game[i][0]=='X')
            {
                return true;
            }
        }
        if(game[0][i] == game[1][i] && game [1][i] == game[2][i])
        {
            if(game[0][i]=='O' || game[0][i]=='X')
            {
                return true;
            }
        }
    }
    var k =0,l=0;
    if(game[k][k] == game[k+1][k+1] && game[k+1][k+1] ==game[k+2][k+2])
    {
        if(game[0][0]=='O' || game[0][0]=='X')
        {
            return true;
        }
    }
    if(game[l][l+2] == game[l+1][l+1] && game[l+1][l+1] ==game[l+2][l])
    {
        if(game[0][0]=='O' || game[0][0]=='X')
        {
            return true;
        }
    }
    return false;
},

quadratic(a,b,c)
{
    var root=[];
    var delta = Math.sqrt((b*b)-(4*a*c));
    root[0] = (-b+delta)/(2*a);
    root[1] = (-b-delta)/(2*a);
    return root;
},

chillWind(t,v) {
    if(t<50 && v<120 && v>3){
        var w = 35.74+0.6215*t+(0.4275*t-35.75)*Math.pow(v, 0.16);	
         return w;
    }
}

}