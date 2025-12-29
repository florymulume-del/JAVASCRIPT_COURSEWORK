                     //Coursework 1: KGL Data Validation System

//Part A: Variable Declaration and Type Checking
/*1. Create a file named kgl_validation.js . Declare the following variables using appropriate
keywords ( let or const ):*/
const companyName="Karibu Groceries LTD"//; bcs i want to keep the same value for the variable companyName
const minimumTonnage=1000; // i chose const beacause the var minimumTonnage should not change ,we keep the same value
let isOperationnal=true;   // it can be reassigned
let managerName
let closedBranches=null; //we can reassigned it later
//2.checking the  type and log out of each variable
console.log(companyName)
console.log(typeof(companyName))
console.log(minimumTonnage)
console.log(typeof(minimumTonnage))
console.log(isOperationnal)
console.log(typeof(isOperationnal))
console.log(managerName)
console.log(typeof(managerName))
console.log(closedBranches)
console.log(typeof(closedBranches))

//Part B: String Manipulation and Validation 
//4.declaraion
let dealerName="  james BOND  "
//5.writing code
console.log(dealerName)
console.log(dealerName.trim()) //removes spaces from both the start and end of the string
console.log(dealerName.trim().toLowerCase(0))

let dealerName1="james"
let dealerName2="bond"
let cleanedDealerName=`${dealerName1[0].toUpperCase()}${dealerName1.slice(1).toLowerCase()} ${dealerName2[0].toUpperCase()}${dealerName2.slice(1).toLowerCase()}`
console.log("Cleaner Dealer Name :",cleanedDealerName)
//6.
/*console.log(
cleanedDealerName.length>2 && cleanedDealerName!==""
?"valid dealer name"
:"invalid dealer name"
);*/
cleanedDealerName.length>2 && cleanedDealerName!==""
?console.log("valid dealer name")
:console.log("invalid dealer name")

//7.Conditional Logic and Business Rules
let userRole='sales Agent';
let procurementTonnage=1500;
let produceType='beans';
let costInUgx='50000';
//8.
if(userRole==="sales Agent"){
    console.log("error:sales agent are not  allowed to record any produce entry")

}
else{
console.log("proceed with the other checks.")
}
if(procurementTonnage>=1000){
    console.log("For individual dealers")
}
else{
console.log()
}
 console.log(typeof(Number(costInUgx)))
if(costInUgx>=10000){
    console.log("valid cost")
}
else{
    console.log("the cost is less than 100000")
}
//9.
if(procurementTonnage>=1000 && costInUgx>=10000){
    console.log("Procurement record valid")
}else{
    console.log("Procurement record invalid")
}
//Part D: Arrays and Produce Management
//10.
let kglProduce=['Beans',
'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'];
console.log(kglProduce)
//Adds a new produce type "Green Peas" to the end of the array
kglProduce.push("Green Peas")
console.log(kglProduce)
//Removes the first item from the array
kglProduce.shift("Beans")
console.log(kglProduce)
//Checks if "G-nuts" exists in the array
console.log(kglProduce.includes("G-nuts"))
//Logs the final array and its length
console.log(kglProduce)
console.log(kglProduce.length)

//12.
let branch2Produce=['Maize', 'Beans'];
let allProduce=kglProduce.concat(branch2Produce)
console.log(allProduce)

