"use strict";
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.checkAge();
    }
    checkAge() {
        if (this.age < 28) {
            throw new Error("Pilot is too young");
        }
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
    flyMessage() {
        console.log("Plane is in the sky");
    }
}
class Plain {
    sitInPlane(pilot) {
        this.pilot = pilot;
    }
}
class Boing extends Plain {
    startEngine() {
        if (!this.pilot) {
            throw new Error("No pilot in cabin!");
        }
        console.log("Starting");
        this.pilot.flyMessage();
        return true;
    }
}
const pilot = new Pilot("Max", 30);
const boing = new Boing();
pilot.greet("This is pilot");
boing.sitInPlane(pilot);
boing.startEngine();
//# sourceMappingURL=app.js.map