const readline = require('readline-sync');
module.exports={
prime(range)
{
	var primes=[];
	primes[0] = 2;
	var primenos = 1;
	var n=2;
    for(var i=2;i<range;i++) 
	{
	    n++;
    	for(var j=primenos-1;j>=0;j--)
		{
			if(n%primes[j]==0)
				break;
			if(primes[j]==2)
			{
				primes[primenos]=n;
				primenos++;
				break;
			}
		}
	}
	for(var i=0;i<primenos;i++) {
		console.log(primes[i]);
	}
},
intInsertionSort(input){
        
    var temp;
    for (var i = 1; i < input.length; i++) {
        for(var j = i ; j > 0 ; j--){
            if(input[j] < input[j-1]){
                temp = input[j];
                input[j] = input[j-1];
                input[j-1] = temp;
            }
        }
    }
    return input;
}
,
intBubbleSort(input) {
	var temp;
	for(var i=0;i<input.length-1;i++)
		for(var j=0;j<input.length-i-1;j++) 
		{
			if(input[j]>input[j+1])
			{
			    temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
			}
		}
	return input;
}

}