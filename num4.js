console.log("Aufgabe4");
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toText() {
        const mehrwertsteuer = `${this.price} ` * 0.19;
        console.log(
            `${this.name} kostet Brutto ${this.price}€, inklusive der Mehrwertsteuer ${mehrwertsteuer}0€`
        );
    }
    containedVAT() {
        const mehrwertsteuer = `${this.price} ` * 0.19;
        console.log(`${mehrwertsteuer}€ MwSt.`);
    }
}
const trainingsanzug = new Product("Adidas Trainingsanzug", 150);
const schuhe = new Product("Puma Laufschuhe", 80);
const socken = new Product("Sockenset", 5);

console.log(trainingsanzug);
trainingsanzug.toText();
trainingsanzug.containedVAT();

console.log("Aufgabe2");

class Cart {
    constructor(products) {
        this.products = products;
    }
    sagHallo() {
        console.log(`Hi`);
    }
    wieGets() {
        console.log(`Wie gets?`);
    }
    addProduct(shoppedProduct) {
        console.log(shoppedProduct instanceof Cart);
    }
}
const warenkorb = new Cart([]);
console.log(warenkorb);
warenkorb.sagHallo();
warenkorb.wieGets();

warenkorb.addProduct(warenkorb);
