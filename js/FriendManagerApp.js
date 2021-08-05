"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend_1 = require("./Friend");
var friend1 = new Friend_1.Friend("Shane Told", 40, "ShaneTold@gmail.com", true);
var friend2 = new Friend_1.Friend("Winston McCall", 38, "WinMcCall@gmail.com", true);
var friend3 = new Friend_1.Friend("Phil Bozeman", 35, "PhillyBo1986@gmail.com", false);
var friend4 = new Friend_1.Friend("Jeremy McKinnon", 35, "JeremyADTR@gmail.com", false);
var friends = [friend1, friend2, friend3, friend4];
console.log("List of friends...");
console.log("Name, Age, Email, BFF?");
friends.forEach(function (f) {
    console.log(f.friendName, f.age, f.email, f.bff);
});
