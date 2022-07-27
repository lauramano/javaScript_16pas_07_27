'use strict'
class User {
    constructor(vardas, pavarde, metinisAtlygis) {
        this.firstName = vardas;
        this.lastName = pavarde;
        this.salary = metinisAtlygis;
        this.createdAt = new Date().toLocaleTimeString();
    }
    // metodo aprasymas
    fullName(){
        const nameString = `${this.firstName} ${this.lastName}`;
        console.log(nameString);
        return nameString;
    }
    getMonthlyPay() {
        const monthlyPay = (this.salary / 12).toFixed(2);
        console.log(`${this.fullName()} Monthly salary is: 💸${monthlyPay}`);
        return monthlyPay;
      }
}



// getMonthlyPay() {}    


const u1 = new User('Petras', 'Jonaitis', 100000);
const u2 = new User('Kazys', 'Petraitis', 452220);
const u3 = {firstName: 'Serbentautas', lastName: 'Bordiuras', salary: 890000};

[u1, u2, u3].forEach((uOb) => console.log(uOb instanceof User));

u2.fullName();
u2.getMonthlyPay();

// u2.town = 'Kaunas';

console.log(u1);
console.log(u2);
console.log(u3);