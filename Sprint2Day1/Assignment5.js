let arr = ["123:Radha", "456:Krishna", "789:Jagannath","143:Damodar","Madhurika"];
arr.unshift("342:Yashoda");
arr.unshift("643:Balram");
arr.unshift("563:Chaitanya");
arr.pop();
arr.pop();
let OrderidAndName = [];
let Orderid = [];
let CustomerName = [];
let n = arr.length;
for (i=0; i<arr.length; i++)
{
    OrderidAndName[i] = arr[i].split(":");
    Orderid.push(OrderidAndName[i][0]);
    CustomerName.push(OrderidAndName[i][1]);
}
console.log(`Processing orderid ${Orderid[Orderid.length-1]} for ${CustomerName[CustomerName.length-1]}`);
console.log("Pending Orders..........")
for (let i=0; i<n-1; i++)
{   
    console.log(`${Orderid[i]}, ${CustomerName[i]}`);
}
let longestLength = 0;
for (i=0; i<n; i++)
{
    if (CustomerName[i].length > longestLength)
    {
        longestLength = CustomerName[i];
    }
}
console.log(`Cusotomer with the longest name length is: ${longestLength}`);