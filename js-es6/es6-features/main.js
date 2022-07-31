/**
 * Khai bao bien
 * - Khai bao bien voiws let va const
 * -So sanh giua var, let,const(hoisting, scope)
 * -Nên dùng cái nào trong từng trường hợp nào
 * -var: có cơ chế hoisting, function scope (scope đại khái là qui định cái biến đó có đc truy cập hay không)
 * let, const k có hoisting, block scope
 * + const : bắt buỗ phải gán giá trị khi khai báo và k đc gán lại gái trị 
 */
// 1. var
// var fullName = 'Trần Trọng Nghĩa';
// age = 17; // vẫn hiểu khai báo biến var
// console.log(fullName, age);
//  function showErrorWithVAr(){
//      var isError = true;
//      var error ='';
//      if(isError){
//          var error = 'Something when wrong!';
//          console.log(error);
//      }
//      console.log(error);
//      // sẽ ra hai cái Something do biến var trong js nếu trùng tên sẽ gán lại gia trị mới

//  }
//  showErrorWithVAr();

//2. let
// console.log(age);// toang do let k có cơ chế hoisting bắt buộc phải khai báo trc mới dùng
// let age = 17;
// console.log(age);
// let age = 18;
// console.log(age); // lỗi do trùng tên biến

//  function showErrorWithLet(){
//      let isError = true;
//      let error ='';
//      if(isError){
//          let error = 'Something when wrong!';
//          console.log(error);
//      }
//      console.log(error);


//  }
//  showErrorWithLet();


//3. const 
// console.log(birthYear); // toang k có hoisting
// const birthYear = 2021;
// const birthYear; // toang do nó là hằng số bắt buộc khai báo biến ban đầu
// const fullName = 'Tran Trong Nghia';
// fullName = 'abc'; // toang là hằng số k đc gán lại giá trị
//  function showErrorWithConst(){
//      const isError = true;
//      const error ='';
//      if(isError){
//          const error = 'Something when wrong!';
//          console.log(error);
//      }
//      console.log(error);


//  }
//  showErrorWithConst();

/**
 * Function
 * -Arrow function
 * -So sánh declaration, vs expresstion(normal func), vs arrow func(cú pháp , con trỏ this)
 * trường hợp nên dùng k nên dùng arrow func
 * -không sử dụng arow func để làm phương thức
 */
 // Normal func
//  const calcAgeNormal = function(birthYear){
//      console.log(this);
//      return 20211 - birthYear;
//  }
//  calcAgeNormal('2000');
//  // arrow func
//  // không định nghĩa bối cảnh thực thi (this) của riêng nó
//  // không quan tâm nó đc thực thi  trong ngữ cảnh nào gái trị this của arrow func = this của outer func
//  // nếu không có ouetr thì this = global object (window)
//  const calcAgeArrow = (birthYear) => {
//      console.log(this);
//      return 2021 - birthYear;
//  }
//  const calcAgeArrowShort = (birthYear) => 2021 - birthYear;
//  const calcAgeArrowOneParam = birthYear => 2021 - birthYear;
// const getEle = id => document.getElementById(id);

// const student = {
//     name: 'Nghia',
//     birthYear: 2000,
//     calcAgeNormal: function(){
//         console.log('calcAgeNormal', this);
//         console.log(2021 - this.birthYear);
//     },
//     calcAgeArrow: () => {
//         console.log(this);
//         console.log(2021- this.birthYear);
//     }


// }
// student.calcAgeNormal();
// student.calcAgeArrow();


/**
 * Spread operator
 * - Copy array
 * Copy object
 * tham trị với tham chiếu
 * Merge array
 * thêm phần tử vao mảng
 * sử dụng array như dnah sách các tham số của func
 */

// const people = ['tay', 'y', 'vy'];
// console.log(people[0], people[1], people[2]);
// console.log(...people);
// console.log('tay', 'y','vy');

//Copy array
//  let num1 = [1, 2, 3];
//  let mun2 = num1;
//   num2.push(4);
//   console.log(mum2);
//   console.log(num1);

// let num1 = [1,2 ,3];
// let num2 = JSON.parse(JSON.stringify(num1));

// num2.push(4);
// console.log(num2);
// console.log(num1);
// // cách khi chưa có Spread copy

// const num1 = [1, 2, 3];
// const num2 = [...num1];
// num2.push(4);
// console.log(num1);
// console.log(num2);

// Merge array
// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];

// const num3 = num1.concat(num2);
// console.log(num3);

//copy object

// let obj1 = {
//     a: 'a',
//     b: 'b',
// }
// let obj2 = {...obj1};
// obj2.c = 'c';
// console.log(obj1);
// console.log(obj2);

//Merge object

// 0.
