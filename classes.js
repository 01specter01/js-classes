console.log("Aufgabe 1");

class Yacht {
    constructor(
        farbe,
        gewichtInKg,
        ps,
        name,
        schlafzimmer,
        badezimmer,
        hatEinBeiboot
    ) {
        this.farbe = farbe;
        this.gewichtInKg = gewichtInKg;
        this.ps = ps;
        this.name = name;
        this.schlafzimmer = schlafzimmer;
        this.badezimmer = badezimmer;
        this.hatEinBeiboot = hatEinBeiboot;
    }
    start() {
        console.log(`Die Yacht ${this.name} ist gestartet`);
    }
    anlegen() {
        console.log(`Die Yacht ${this.name} legt an`);
    }
    ablegen() {
        console.log(`Die Yacht ${this.name} legt ab`);
    }
}
const leoYacht = new Yacht("red", 20, 1000, "Constructor Ship", 4, 3, true);
console.log(leoYacht);
leoYacht.start();
leoYacht.anlegen();
leoYacht.ablegen();
