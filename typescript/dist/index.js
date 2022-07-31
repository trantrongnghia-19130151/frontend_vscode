"use strict";
// Basic type 
var fullName = 'nghia';
// let fullName: string = 2 => lỗi
var birthYear;
birthYear = 2000;
// birthYear = '2000' error
//Any
var notSure;
notSure = 20;
notSure = 'AnyThing';
// Complex Types
var numbers = [1, 2, 3];
// const numbers: number[] = [1, 2, 3, '4'] => error
// numbers.push('hello') => error
// <type>: Generic type
var colors = ['red', 'white', 'black'];
// colors.push(true); => error
//Object
var responseObj = {
    data: [1, 2, 3],
    statusCode: 1200,
};
//tuple
var person = ['nghia', 20, true];
// let person: [string, number, boolean]= ['nghia', 20,  2001, true, 'tran']; => error
//Enum
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
console.log(Colors.Blue);
//Union
var unionValue = 'Hello';
unionValue = 20;
// unionValue = true; => error
// Function
var sayHello = function (name) { return "Hello " + name; };
sayHello('nghia');
// for...in
var student = {
    fullName: 'nghia',
    age: 20,
    className: 'FE68'
};
// duyet obj
for (var key in student) {
    console.log(key);
}
// for..of
for (var element in numbers) {
    console.log(element);
}
// class
var NhanVien = /** @class */ (function () {
    function NhanVien(hoTen, age, chucVu) {
        this.hoTen = hoTen;
        this.age = age;
        this.chucVu = chucVu;
    }
    return NhanVien;
}());
