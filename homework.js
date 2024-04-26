//objet keys

//funksiya yozing 
//va agar ob'ektda o'byektda bizga kerak keys bo'lmasa  "false", aks holda "true"  qaytarsin

// function isKeys(includekey) {
//     let objKey = Object.keys(obj)
//     let included = objKey.includes(includekey)
//     return included
// }

//or

// const isKeys = (includekey) => includekey in obj


// let obj = {
//     names:"jack",
//     age:"12",
//     country:"columby"
// }

// console.log(isKeys("names"));
// console.log(isKeys("adres"));


//object value

//funksiya yozing va agar obyekninig valularidan faqat number bo'lganlarini qoldirsin

// function getNumber(obj) {
//     let newArr = [];
//     let objValues = Object.values(obj);
//     objValues.forEach(value => {
//         if (typeof value === "number") {
//             newArr.push(value);
//         }
//     });
//     return newArr;
// }

// let obj = {
//     name: "jack",
//     age: 12,
//     country: "columby"
// }

// console.log(getNumber(obj)); 


//Object.entries()


// function mergeObjects(arr) {
//     const result = {};
//     for (let obj of arr) {
//         for (let [key, value] of Object.entries(obj)) {
//             result[key] = (result[key] || 0) + value;
//         }
//     }
//     return result;
// }

// let obj1 = {a: 1, b: 2};
// let obj2 =  {a: 2, c: 3};
// let obj3 = {b: 1, c: 1};


// console.log(mergeObjects([obj1,obj2,obj3 ])); 
