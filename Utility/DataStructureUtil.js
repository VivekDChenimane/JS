const file=require('fs');




module.exports={
writefile(filename,data){
file.writeFile(filename,data,(err)=>{
if(err) throw err;
})
}
,
readfile(filename){
let data = file.readFileSync(filename, 'utf8');
data = data.split(' ');
return data;
}
,
parse(stringArr){
    let index1=0;
    for(let index=0;index<stringArr.length;index++)
    {
        if(!isNaN(parseInt(stringArr[index])))
        stringArr[index1]=parseInt(stringArr[index]);   
        index1++
    }return stringArr;
}
,
insertionSort(input){
	/**
	 * Temporary variable to store values while swapping.
	 */
	var temp;
	/**
	 * Choose element from Second to last element and 
	 * index1 holds the position of the traverse. 
	 */
    for (var index1=1; index1<input.length; index1++) {
		/**
		 * index2 holds the current position of index1 and
		 * traverse till the first position.
		 */
        for(var index2 = index1 ; index2 > 0 ; index2--){
			/**
			 * The element in position index2 is compared with the previous element,
			 * if the index2's element is less than its previous, the elements are swapped. 
			 */
            if(input[index2] < input[index2-1]){
                temp = input[index2];
                input[index2] = input[index2-1];
                input[index2-1] = temp;
            }
        }
	}
	/**
	 * Returns the Sorted Array.
	 */
    return input;
}



}