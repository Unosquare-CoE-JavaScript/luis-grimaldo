let myName = "Luis";
let yourName = myName;

myName = "Frank";

console.log(myName);
console.log(yourName);

let myAddress = {
    street:"123 JS Blvd",
    city:"Austin",
    state:"TX",
    contact:{
        name:"Luis",
        cel: "4772234912"
    }
};
let yourAddress = myAddress;
let adressAssign = Object.assign({},myAddress)
let deepClone = JSON.parse(JSON.stringify(myAddress));
// I've got to move to a new house!
myAddress.street="456 TS Ave";
myAddress.contact.name = "Changed"
console.log(yourAddress);
console.log(myAddress);
console.log(adressAssign);
console.log(deepClone);
// 456 TS Ave