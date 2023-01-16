// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button!.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

// let num: number;
// num = 10;

// let str: string;
// str = "10";

// let person = "Max";
// person = "1";

// let arr: string[] = [];

// arr = ["1", "dfsd"];

// let arrNamber: number[] = [];

// arrNamber = [1, 2];

// let arrAny: any[] = [];

// arrAny = ["1", 2, {}];

// let arrObj: { name: string }[];
// arrObj = [{ name: "Asd" }, { name: "10" }];

// let obj: { name: string };
// obj = { name: "Adlks" };
// obj.name;

// let db: {
//   id: number;
//   title: string;
//   info: {
//     date: Date;
//     isNew?: boolean;
//   };
// };
// db = {
//   id: 1,
//   title: "kjfkd",
//   info: {
//     date: new Date(),
//     isNew: true,
//   },
// };

// let some: any;
// some = 10;
// let num: number;
// num = some;

// let some: unknown;
// some = 10;
// some = "ksdj";
// let str: string;
// if (typeof some === "string") {
//   str = some;
// }

// let fixed: [string, number];
// fixed = ["sd", 1];
// fixed.push("dksjf");

// enum Toggle {
//   ENABLE,
//   DISABLE,
// }
// const service = {
//   status: Toggle.ENABLE,
// };
// if (service.status === Toggle.ENABLE) {
//   console.log("active");
// }

// let union: number | string;
// // union = 10;
// // union = "str";
// function combine(param1: string | number, param2: string | number) {
//   if (typeof param1 === "string" || typeof param2 === "string") {
//     return param1.toString() + param2.toString();
//   }
//   return param1 + param2;
// }
// console.log(combine("wewe", "3"));

// let active: "start" | "end";
// active = "start";
// const fruit: string[] = [];
// function workWithArr(arr: string[], value: string, action: "add" | "delete") {
//   if (action === "add") {
//     arr.push(value);
//   } else {
//     const index = arr.indexOf(value);
//     arr.splice(index, 1);
//   }
//   return arr;
// }
// workWithArr(fruit, "banana", "add");
// workWithArr(fruit, "melon", "add");
// workWithArr(fruit, "banana", "delete");
// console.log(fruit);

// function print(): void {
//   console.log("first");
// }
// function combine(num1: number, num2: number): number {
//   return num1 + num2;
// }
// function customError(): never {
//   throw new Error("error");
// }
// function createServerPerson(name: string) {
//   return eval(`
//   (() => {
//     return {
//         name:'${name}'
//     }
//   })()`);
// }
// function createPerson(name: string): { name: string } {
//   return createServerPerson(name);
// }
// const person = createPerson("Dflkfd");
// console.log(person);

// let foo: (param1: number, param2: string) => void;
// foo = (param1: number, param2: string) => {
//   console.log("first");
// };
// function culc(
//   num1: number,
//   num2: number,
//   callback: (arg1: number, arg2: number) => number
// ) {
//   return callback(num1, num2);
// }
// function foo(num1: number, num2: number) {
//   return num1 + num2;
// }
// const result = culc(1, 3, foo);
// console.log(result);

// type PersonType = {
//   readonly name: string;
//   age?: number;
//   showName: () => void;
// };
// const person1: PersonType = {
//   name: "Adkl",
//   age: 2,
//   showName() {
//     console.log(this.name);
//   },
// };
// const person2: PersonType = {
//   name: "RPOEo",
//   age: 30,
//   showName() {
//     console.log(this.name);
//   },
// };
// person1.showName();
// person2.showName();

// class House {
//   private tenants: string[] = [];

//   constructor(public readonly type: string, protected street: string) {}

//   public showAddress(this: House): void {
//     console.log("Address " + this.street);
//   }

//   public showType(this: House): void {
//     console.log("Type " + this.type);
//   }

//   public addTenant(name: string) {
//     this.tenants.push(name);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }
// // const house = new House("wood", "Pchilky");

// // house.addTenant("Max");
// // house.addTenant("Alex");
// // house.showTenants();

// class StoneHouse extends House {
//   private chargeOfTheHouse: string;

//   constructor(street: string, general: string) {
//     super("stone", street);

//     this.chargeOfTheHouse = general;
//   }

//   public showTenants() {
//     console.log("General: " + this.chargeOfTheHouse);

//     super.showTenants();
//   }

//   public showAddress(): void {
//     console.log("Adress " + this.street);
//   }
// }

// const stoneHouse = new StoneHouse("Stone-World", "Max");

// stoneHouse.addTenant("Anton");
// stoneHouse.addTenant("Nikita");

// stoneHouse.showTenants();
// stoneHouse.showAddress();

// INTERFACE
// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//   name: "Max",
//   age: 25,

//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user.greet("Hello, I`m");

// TYPE
// type IPerson = {
//   readonly name: string;
//   age: number;

//   greet: (phrase: string) => void;
// };

// let user: IPerson;

// user = {
//   name: "Max",
//   age: 25,

//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user.greet("Hello, I`m");

// interface IPerson {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor(public readonly name: string, public age: number) {
//     this.checkAge();
//   }

//   private checkAge() {
//     if (this.age < 28) {
//       throw new Error("Pilot is too young");
//     }
//   }
//   public greet(phrase: string): void {
//     console.log(phrase + " " + this.name);
//   }

//   public flyMessage(): void {
//     console.log("Plane is in the sky");
//   }
// }

// abstract class Plain {
//   protected pilot?: IPilot;

//   public sitInPlane(pilot: IPilot): void {
//     this.pilot = pilot;
//   }

//   public abstract startEngine(): boolean;
// }

// class Boing extends Plain {
//   public startEngine() {
//     if (!this.pilot) {
//       throw new Error("No pilot in cabin!");
//     }

//     console.log("Starting");

//     this.pilot.flyMessage();

//     return true;
//   }
// }

// const pilot = new Pilot("Max", 30);
// const boing = new Boing();

// pilot.greet("This is pilot");

// boing.sitInPlane(pilot);

// boing.startEngine();

// type AddFunc = (n1: number, n2: number) => number;

// const foo: AddFunc = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// Создайте абстрактный класс House в нем должны быть следующая логика

// свойство door, она может быть либо закрыта, либо открыта.
// свойство key - объект класса Key.
// конструктор принимает аргумент класса Key и сохраняет его в свойство key.
// метод comeIn, который добавляет объект класса Person в свойство tenants и это срабатывает только если door открыта.
// абстрактный метод openDoor принимает аргумент класса Key
// Создайте класс MyHouse который реализует класс House

// создаем метод openDoor, так как он принимает ключ, сверяем сохраненный ключ в свойстве key равен ли он ключу из аргумента, если да, открываем дверь.
// Создайте объект Key

// есть только свойство signature
// во время создания объекта генерирует случайное число и сохраняет его в signature
// метод getSignature возвращает случайное число из signature
// Создайте объект Person

// конструктор принимает ключ класса Key и сохраняет его в свойство key
// метод getKey возвращает key
// Сделайте так, чтобы жилец попал домой.

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("Door is close");
    }

    this.tenants.push(person);
    console.log("Person inside");
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }

    return (this.door = true);
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
