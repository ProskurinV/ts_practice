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
