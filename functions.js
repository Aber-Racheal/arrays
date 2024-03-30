//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
 let  arr1 = ['Racheal','timo','Shalom'];
 arr1.sort((x,y)=> x.toLowerCase() <y.toLowerCase() ? -1:1)
 console.log('sorted Array Ascending',arr1)
 arr1.sort((x,y)=>x.toLowerCase() <y.toLowerCase() ? 1:-1)
 console.log('sorted Array Descending',arr1)
 


//  Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else Zero

function arrayCheck(arr){
  let isPositive=arr.some(num=>num >0);
  let isNegative=arr.some(num=>num>0);

  if(isPositive && isNegative){
    return 0;
  }
  else if(isPositive){
    return "positive";
  }

  else if(isNegative){
    return "Negative";
  }

  else{
    return 0;
  }
}
 

const num1=[2,-1,0,9,7,-8]
console.log(arrayCheck(num1))
 
 //Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.*/
 let arrayOfObjects = [
     {"id":"657reee",
      "name":"Aberyy",
      "salary":4000 
     },
     {"id":"784t9egdusvc",
      "name":"wambi",
      "salary":99000 
     },
     {"id":"97t8xs ",
      "name":"gract",
      "salary":1500 
     },
     {"id":"x5988d7687v",
      "name":"Yolanda",
      "salary":900 
     }
 ]
 let sorted = arrayOfObjects.sort(
     (salary1,salary2) =>(salary1.salary < salary2.salary)? -1 : (salary1.salary > salary2.salary)? 1 : 0)
     console.log(sorted)
 
 
  //Write a function that accepts an array of numbers and uses the forEach() method  to console.log each number multiplied by 2.*/
  let digits = [10,2,31,4,5,20,7,8,9,0];
 let multiplyby2 = [];
 digits.forEach(function(digits) {
   multiplyby2.push(digits*2);
 })
 console.log({multiplyby2});
 
 //Write a function that takes in an array of numbers and consoles the first four items  multiplied by 8 and the last two added by 5. Console the array with the new values */ 
 function product(arr, w) {
     var multiply= 8;
     w = arr.length;
     for (var i = 0; i < 3; i++) {
         multiply *= arr[i];
     }
     console.log(multiply);
   }
   
   product([3,8,9,1], 4);