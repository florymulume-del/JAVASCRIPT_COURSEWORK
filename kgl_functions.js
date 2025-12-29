                  //Coursework 2: KGL Inventory Processing System

//Part A: Function Implementation
//1.
function calculateProcurementCost(tonnageInKg,pricePerKg){

  if(
    typeof tonnageInKg!=="number" ||
    tonnageInKg < 0      ||
    typeof pricePerKg!=="number"  ||
    pricePerKg <0
  ){
    return "Invalid input"
  }
 return tonnageInKg*pricePerKg;
}
console.log(calculateProcurementCost(399,-100))
//2

const validateBuyerName=((buyerName)=>{
    if(buyerName.length >=2 && buyerName!=="")
{
return true;
}
else{
    return false
}

})
console.log(validateBuyerName(""))
//3.
const checkUserAuthorization=((role)=>{

    switch(role){
        case "manager": return "procurement_and_sales";
        break;
        case "Sales Agent": return "sales_only";
        break;
        case "Director": return "view_aggregations";
        break;
        default :return "unauthorized" 
    }

})
console.log(checkUserAuthorization("Sales Agent"))
//Part B: Object Creation and Manipulation
function createSalesRecord(produceName, tonnage, buyerName, amountPaid,isCreditSale) {
  return {
    id: Math.floor(Math.random() * 9000) + 1000,
   produceName: produceName,
    tonnageInKg: tonnage,
    buyerName: buyerName,
    amountPaid: amountPaid,
    saleDate: new Date().toLocaleDateString("en-Gb"),
    isCreditSale: isCreditSale
  };
}

// 5.Example usage
let salesRecord = createSalesRecord("beans", 1500, "John", 50000);
console.log(salesRecord);
//Adding a new property branch with value "Maganjo" using dot notation
salesRecord["branch"]="Maganjo";
console.log(salesRecord);
//Modifyng the isCreditSale property to true
salesRecord["isCreditSale"]=true
console.log(salesRecord);
//Add a dueDate property using bracket notation
salesRecord["dueDate"]=null;
//Use Object.keys() to get all property names and log them
console.log(Object.keys(salesRecord))
//6.
for(const key in salesRecord){
  console.log(`"property:${key}, value:${salesRecord[key]}`)
}
//Part C: Loop Implementation and Data Processing 
//Calculates the total tonnage for the week
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];
let totalTonnage=0
for(let i=0;i<weeklyTonnage.length;i++){

 totalTonnage+=weeklyTonnage[i]

}
//Calculates the average daily tonnage
  let avarageDailyTonnage=totalTonnage/weeklyTonnage.length
 // Logs both results
 console.log("Total weekly tonnage:",totalTonnage)
 console.log("Average daily tonnage:",avarageDailyTonnage)
 //8.
 let salesRecords = [
  createSalesRecord("beans", 1500, "John", 50000, false),
  createSalesRecord("maize", 2000, "Flory", 60000, true),
  createSalesRecord("rice", 2500, "Mulume", 70000, false),
  createSalesRecord("peas", 3000, "Aksanti", 80000, true),
  createSalesRecord("sugar", 3500, "Kibonero", 90000, false),
];

// Count credit sales
let creditSalesCount = salesRecords.filter(record => record.isCreditSale).length
console.log("Number of credit sales:", creditSalesCount); // 2
//Uses the continue statement to skip non-credit sales
let totalCreditSale=0;
for(const record of salesRecords){
if(!record.isCreditSale){
  continue;
}
totalCreditSale++;
console.log(`Credit Sale - Buyer: ${record.buyerName}, Produce: ${record.produceName}, Amount: ${record.amountPaid}`)

}
console.log(`Total credit sales:",${totalCreditSale}`)
//9.
let inventory = [
{name: 'Beans', tonnage: 500},
{name: 'Maize', tonnage: 0},
{name: 'G-nuts', tonnage: 300}
];

for(const item of inventory){
  if(item.tonnage===0){  
  console.log( `Manager Alert:${item.name} is out of stock`)
    break;//exit loop immediately
  }
}