//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
 let  arr1 = ['Racheal','timo','Shalom'];
 arr1.sort((x,y)=> x.toLowerCase() <y.toLowerCase() ? -1:1)
 console.log('sorted Array Ascending',arr1)
 arr1.sort((x,y)=>x.toLowerCase() <y.toLowerCase() ? 1:-1)
 console.log('sorted Array Descending',arr1)
 
 //Using JS functions and an array of numbers, return positive if an element within the array  is positive, negative if an element is negative, else zero*/
 function checkingNums(x,y){
 let positive_count = 0;
 let negative_count = 0;
for(let i=0; i<y; i++){
  if(x[i]>0){
   positive_count ++;
}else{
  negative_count ++;
    }
 }
 if(positive_count===1){
 for(let i=0; i<Z; i++){
   if(x[i]>0){
         return x[i];
     }
  } }
 else if (negative_count===1){
    for (let i=0; i<Z; i++){
           if (x[i]<0){
               return x[i];
           }
       }
   }
   else{
        return 0;
    }
}
const arrNums = [1,0,-1,2,-2,-3];
const w = arrNums.length;
console.log(checkNums(arrNums, Z));
 
 
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
     {"id":"x378r7fddv",
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