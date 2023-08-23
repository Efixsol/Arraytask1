var fruits = ["Mango","Orange","Banana","PineApple","DragonFruit","Kiwi","Apple","Grapes","Cherry"];
number= fruits.length
console.log(`The tolal number of elements in an arry using .lenght: ${number}`);
lastelement= fruits[fruits.length-1];
console.log(   `The last element of an array is using .lenght-1: ${lastelement}`);

// lastelement2= fruits.splice(-1)
// console.log(`Another way of finding the last element using .splice(-1): 
// ${lastelement2}`);

findfirst = fruits[0];
console.log(`The first element of list is ${findfirst}`);


findlast=fruits[8];
console.log(`The value of last element in the list is :${findlast}`);

//////////////////////////////////////////////////////////////////////
// Check own name is student list
students=["Qadir","Bilal","Naveed","Ali","Younis","Kamran",]
var findname = "Younis"
if (students.includes(findname) ) {
    console.log("Yes there is your name in the list");
}
else {
    console.log("sorry your name is not listed");
}
///////////////////////////////////////////////////////////////////////////////////

// ADD and Delete the elements at specified indexe:

inputelement=fruits.splice(2,2,"melon","watermelon");
console.log(`The new elements of list are melon & Watermelon ${fruits}`);
////////////////////////////////////////////////////////////////////////////////////////

//for Loop function using in object:
const cars = {
Company:["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"],
 Model: ["2021","2022","2022","2023","2024",], 
 EnginePower:[1600,1800,2000], 
 colour:["white","red","black"] };


for (let i = 0; i < cars.Company.length; i++) {
 console.log(`${cars.Company}`);
 console.log(`${cars.Company[3]}`);
 
}
console.log(cars.EnginePower);
