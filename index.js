// Write your code here

// class Dog {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
// }

// const bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
// const bigFluffyDog2 = new Dog("Woody", "labrador");


class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}

const breakFast1 = new Breakfast("Bagel", "sprite");
const breakFast2 = new Breakfast("BLT", "Arizona");

const lunch1 = new Lunch("kale", "chicken soup", "water");
const lunch2 = new Lunch("spinach", "crab soup", "ginger ale");

const dinner1 = new Dinner("kale with seeds", "chicken & carrot soup", "steak", "cake");
const dinner2 = new Dinner("potatoe salad", "shrimp soup", "grilled chicken", "cheese cake");


console.log(breakFast1)