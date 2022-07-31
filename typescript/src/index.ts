// Basic type 
let fullName: string = 'nghia';
// let fullName: string = 2 => lỗi
let birthYear: number;
birthYear = 2000;
// birthYear = '2000' error

//Any
let notSure: any;
notSure=20;
notSure='AnyThing';



// Complex Types
const numbers: number[] = [1, 2, 3];
// const numbers: number[] = [1, 2, 3, '4'] => error
// numbers.push('hello') => error


// <type>: Generic type
const colors: Array<string> = ['red', 'white', 'black'];
// colors.push(true); => error

//Object
const responseObj: {
    data: any[],
    statusCode: number,
    error?: string, // ? optional property
} = {
    data: [1, 2, 3],
    statusCode: 1200,
};




//tuple
let person: [string, number, boolean]= ['nghia', 20, true];
// let person: [string, number, boolean]= ['nghia', 20,  2001, true, 'tran']; => error

//Enum
enum Colors {Red=1, Green=2, Blue=3}
console.log(Colors.Blue);

//Union
let unionValue: string | number = 'Hello';
unionValue = 20;
// unionValue = true; => error

// Function
const sayHello = (name:string) => `Hello ${name}`;

sayHello('nghia');

// for...in
const student = {
    fullName: 'nghia',
    age: 20,
    className: 'FE68'

};

// duyet obj
for(const key in student){
    console.log(key);
}

// for..of
for(const element in numbers){
    console.log(element);
}

// class

class NhanVien {
    hoTen: string;
    age: number;
    chucVu: string;
    constructor(hoTen: string, age: number, chucVu:string){
        this.hoTen = hoTen;
        this.age = age;
        this.chucVu = chucVu;
    }
}