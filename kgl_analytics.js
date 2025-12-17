let procurementRecord=[
    {id:1,dealerName:"flory",produceType:"beans",tonnageInKgs:1000,costInUgx:100,prcurementDate:new Date("2025-04-04")},
    {id:1,dealerName:"aksanti",produceType:"peas",tonnageInKgs:2000,costInUgx:250,prcurementDate:new Date("2025-04-05")},
    {id:1,dealerName:"mulume",produceType:"soy",tonnageInKgs:3000,costInUgx:300,prcurementDate:new Date("2025-04-06")},
    {id:1,dealerName:"mulume",produceType:"G-nuts",tonnageInKgs:400,costInUgx:420,prcurementDate:new Date("2025-04-07")},
    {id:1,dealerName:"kabeya",produceType:"rice",tonnageInKgs:5000,costInUgx:500,prcurementDate:new Date("2025-04-08")},
    {id:1,dealerName:"katanga",produceType:"sugar",tonnageInKgs:600,costInUgx:600,prcurementDate:new Date("2025-04-09")}
]

let procurementRecordNew=procurementRecord.map((property)=>{
    return {
         ...property, // spread original properties
        costPerKg:property.costInUgx/property.tonnageInKgs}

})
console.log(procurementRecordNew)
let procurementRecordFiltered=procurementRecordNew.filter(record=>record.tonnageInKgs>=1000)
console.log(procurementRecordFiltered)
console.log(procurementRecordFiltered.length) 

const totalTonnage=procurementRecord.reduce((prvalue,currvalue)=>{
    return prvalue+currvalue.tonnageInKgs;
           
},0)
const totalCost=procurementRecord.reduce((pvalue,cvalue)=>{
    return pvalue+cvalue.costInUgx;
},0)
console.log(`The total tonnage procured across all records
is :${totalTonnage} and sum of all costInUgx values is :${totalCost}`)
//Part B: Sets for Unique Data Management

function getUniqueDealers(procurementRecords){
    const dealerSet=new Set(procurementRecords.map(record=>record.dealerName))
    return Array.from(dealerSet)

}
let uniqueDealers=getUniqueDealers(procurementRecord)
console.log("unique dealers name:",uniqueDealers)
//6. Create a Set called authorizedRoles and add these values: 'Manager' , 'Director' .

const authorizedRoles=new Set()
authorizedRoles.add("manager")
authorizedRoles.add("director")

console.log(authorizedRoles)
function isAuthorizedForProcurement(userRole){
    return authorizedRoles.has(userRole);
   
}
console.log(isAuthorizedForProcurement("manager"))
console.log(isAuthorizedForProcurement("director"))
console.log(isAuthorizedForProcurement("sales agent"))

//Part C: Maps for Price Management
const kglPriceList = new Map(); //declaratin of empty Map called kglPriceList
//adding items with set method
kglPriceList.set('Beans', 5500);
kglPriceList.set('Grain Maize', 4800);
kglPriceList.set('Cow peas', 6000);
kglPriceList.set('G-nuts', 7200);
kglPriceList.set('Soybeans', 5800);
//function 
function calculateSaleTotal(produceName,tonnageInKgs){
    const pricePerKg=kglPriceList.get(produceName) // use get to  to retrieve the price per kg for each produce
    if(pricePerKg===undefined){
        return "Price not found"
    }
    else{
        return pricePerKg*tonnageInKgs
    }
}
//log out multiple produce types
console.log(calculateSaleTotal("mmeans",5500))//price not found
console.log(calculateSaleTotal("Soybeans",5800))//3640000
console.log(calculateSaleTotal("G-nuts",7200))//51840000
//9.
kglPriceList.forEach((value,key) => {
    console.log(`Produce: ${key}, Price per Kg:${value} UgX`)
});
//Calculates and logs the highest price in the Map using the .reduce() method 
let highestPrice=[...kglPriceList.values()].reduce((pvalue,cvalue)=>{
   if(cvalue>pvalue){
    return cvalue;
   }
   else{
    return pvalue
   }
})
console.log("the highest price is",highestPrice)