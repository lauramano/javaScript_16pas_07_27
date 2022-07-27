'use strict';
//  user1 yra objektas
const user1 = {
    firstNmae: 'Petras',
    lastName: 'Petraitis',
    age: 35,
    salary: 55000,
    fullName: function (){
           console.log(`${this.firstNmae} ${this.lastName}`);
},
};
user1.fullName();
//  prideti metoda, paskaiciuoti menesini atlyginima getMonthlyPay()

const getMonthlyPay = function(someObj){
console.log(`${someObj.salary / 12 }`);
};
getMonthlyPay(user1);



// funcion expresion
// const fullName = function (someObj){
//     console.log(`${someObj.firstNmae} ${someObj.lastName}`);
//     }


// funksion deklareisin :)
function fullName(someObj){
    console.log(`${someObj.firstNmae} ${someObj.lastName}`);
    }
   fullName(user1); 