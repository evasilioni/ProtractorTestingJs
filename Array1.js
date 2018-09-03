// We are going to cover Array

var arr1 = ["Testing", "World", 11];

//All values from an array
console.log(arr1);

//Display value of any specific index
console.log(arr1[1]);

//Find number of items stored into array
console.log(arr1.length);

//update a value in array
arr1[0]="QA";
console.log(arr1);

//Add a new memebr to array
arr1.push("www.theTestingWorld.com");
console.log(arr1.length);

//Looping thjrough an array

var len = arr1.length;
for(i=0;i<len;i++){
    console.log(arr1[i]);
}