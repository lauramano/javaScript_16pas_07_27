'use strict';
//  user1 yra objektas
const user1 = {
    firstNmae: 'Petras',
    lastName: 'Petraitis',
    age: 35,
    salary: 55000,
    getMonthlyPay: function(){
        const monthlyPay = (this.salary / 12).toFixed(2);
        console.log(`${this.firstNmae} menesinis atlygis: 💰 ${monthlyPay} `);
        },
    fullName: function (){
           console.log(`${this.firstNmae} ${this.lastName}`);
},
};
user1.fullName();
user1.getMonthlyPay();
//  prideti metoda, paskaiciuoti menesini atlyginima getMonthlyPay()

const getMonthlyPay = function(someObj){
console.log(`${someObj.salary / 12 }`);   // Pati sugalvojau :)
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