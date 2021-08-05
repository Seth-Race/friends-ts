import { Friend } from "./Friend";

let friend1: Friend = new Friend("Shane Told", 40, "ShaneTold@gmail.com", true);
let friend2: Friend = new Friend("Winston McCall", 38, "WinMcCall@gmail.com", true);
let friend3: Friend = new Friend("Phil Bozeman", 35, "PhillyBo1986@gmail.com", false);
let friend4: Friend = new Friend("Jeremy McKinnon", 35, "JeremyADTR@gmail.com", false);

let friends:Friend[] = [friend1, friend2, friend3, friend4];

console.log("List of friends...");
console.log("Name, Age, Email, BFF?");
friends.forEach(f => {
    console.log(f.friendName, f.age, f.email, f.bff);
});