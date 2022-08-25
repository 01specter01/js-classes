console.log("Aufgabe 3");

class bankkonto {
    constructor(kontostand, iban, bankname, kontoinhaber) {
        this.kontostand = kontostand;
        this.iban = iban;
        this.bankname = bankname;
        this.kontoinhaber = kontoinhaber;
    }

    abheben(x) {
        this.kontostand = this.kontostand - x;
        console.log(
            `${x}€ wurden erfolgreich abgehoben. Der neue Kontostand ist ${this.kontostand}€`
        );
    }
    einzahlen(x) {
        this.kontostand = x + this.kontostand;
        console.log(
            `${x}€ wurden erfolgreich eingezahlt. Der neue Kontostand ist ${this.kontostand}€`
        );
    }
    zeigInfo() {
        console.log(
            `Dies ist eine Konto der ${this.bankname} Bank. Die IBAN dieses Kontos lautet ${this.iban}.`
        );
    }
}
const leoBankkonto = new bankkonto(
    500,
    "DE763723872376323727",
    "Global Bank",
    "Leo Volwahsen"
);
console.log(leoBankkonto);
leoBankkonto.abheben(20);
leoBankkonto.einzahlen(20);
leoBankkonto.zeigInfo();
