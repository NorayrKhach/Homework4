//1 Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given heigh
  const triangleStar = function(height)
{
    const base = 2 * height - 1;
    let i = 0;
    while(i < height) {
        console.log(' '.repeat(i) + '*'.repeat(base - 2 * i));
        i++;
    }
};
    triangleStar(5);


//2 Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.
const dimArray = function(a,b){
   let index =0;
   let childArray=[];
   while(index<a.length){
        childArray[childArray.length]=a[index]
        index=index+1;
   }
   let indexS =0; 
   while(indexS<b.length){
   	childArray[childArray.length]=b[indexS]
    indexS=indexS+1   
   }
   return childArray;
};
console.log(dimArray([1,2,3,4,5],[6,7,8,9]));
//3 Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.It returns the smallest number in the given array if the second argument is false.
const findMax= function(a){
  let index = 0;
  let maxElement=a[index];
  while(index<a.length){
       if(maxElement<a[index]){
        maxElement=a[index]
       }
      index=index+1;
  }
    return maxElement;
};
const findMin= function(a){
  let indexS = 0;
  let minElement=a[indexS];
  while(indexS<a.length){
       if(miElement>a[indexS]){
        minElement=a[indexS]
       }
      indexS=indexS+1;
  }
    return minElement;
};
const findMinMax=function(a,b){
  if(b === true){
    return findMax(a);
  }
  else if(b === false){ 
    return findMin(a);
  };
};
console.log(findMinMax([12,2134,-35,3467,354],true));


//4 Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.
 function forEach (a, b) {
 index = 0;
 while(index < a.length) {
    b(a[index]);
 	index=index+1;
    }
 };
 
 forEach([1,2,3,4,5], function(result) {

  console.log(result);
});




//5 Create a function 'sum' that takes an array of numbers and returns their sum.
function sum (a) {
	let value = 0;
	let sum = 0;
	while (value !== a.length) {
		sum += a[value]
		value++
	}
	console.log(sum);
	return sum;
} 
sum([1,2,3,4])




//6 Write a function 'reverse' that reverses the given string.
function reverse (str) {
	let index=0;
	let num = 1;
	let strS = "";
	 while (num <= str.length) {
       index = str[str.length-num];
        strS +=index;
	 	num++;
	 }
	 console.log(strS);
	 return strS;
}





//7 Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.
const checkerBoard = function(height)
{
    const base =  height ;
    let i = 0;
        while(i < height) {
        console.log(' ' + '*'.repeat(base  ));
        i++ ;
    }
};
    checkerBoard(5);