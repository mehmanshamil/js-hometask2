// 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.

// var a = 2; 
// var b = 5; 
// var c = 3; 

// 1. Diskriminantı hesablayaq (D = b^2 - 4ac)
// var discriminant = b * b - 4 * a * c;

// 2. Kökleri hesablayaq
// var root1, root2;

// if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
// } else if (discriminant === 0) {
//     root1 = root2 = -b / (2 * a);
// } else {
//     var realPart = -b / (2 * a);
//     var imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
//     root1 = realPart + " + " + imaginaryPart + "i";
//     root2 = realPart + " - " + imaginaryPart + "i";
// }

// console.log("Kök 1: " + root1);
// console.log("Kök 2: " + root2);

// 2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.
// var a = 5;
// var bolunenler = [];

// for (let i = 0; i < 1000; i++) {
//     if (i % a === 0) [
//         bolunenler.push(i)
//     ]
// }

// console.log("a ya bolunen ededler : " + bolunenler)

// 3-7 saylı tapşırıqlar bu array üzərindən işləniləcək:
// 3. Bu massivin minimum elementini tapın: 

// const arr = [2, 4, 5, 9, 1];

// let newarr = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < newarr) {
//         newarr = arr[i];
//     }
// }

// console.log("minumum element : " + newarr);

// 4. Bu massivin maksimum elementini tapın

// const arr = [2, 4, 5, 9, 1];

// let newArr = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > newArr) {
//         newarr = arr[i];
//     }
// }
// console.log("maksimum element element : " + newarr);
// eger hem en boyuk hem kicik reqemleri yazmaq isdeyirkse onda asagidaki kimide ede bilerik

// const arr = [2, 4, 5, 9, 1];
// let min = arr[0];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     } else {
//         max = arr[i];
//     }
// }
// console.log(" minumum element deyeri : " + min)
// console.log(" maksimum element deyeri : " + max)

// 5. Bu massivin minimum elementinin indeksini tapın.


// const arr = [2, 4, 5, 9, 1];

// let min = arr[0];

// let index = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//         index = i
//     }
// }
// console.log("minumum element : " + min);
// console.log("minumum elementin indeksi : " + index);

// 6. Bu massivin maksimum elementinin indeksini tapın.

// const arr = [2, 4, 5, 9, 1];

// let max = arr[0];

// let index = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         index = i;
//     }

// }

// console.log("maximum element : " + max);
// console.log("maximum elementin indeksi : " + index);


// 7. Tək indeksli massiv elementlərinin cəmini hesablayın

// const arr = [2, 4, 5, 9, 1];

// let total = 0;
// for (let x of arr) {
//     if (arr.indexOf(x) % 2 === 1) {
//         total += x
//     }
// }
// console.log("tek indeksli massivlerin cemi : " + total);

// 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.

// let text ="Mən Code Academy Tələbəsiyəm.";
// let lowText = text.toLowerCase();
// console.log(lowText)

// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "

// let text ="Mən Code Academy Tələbəsiyəm.";
// let newText = text.trim();
// console.log(newText);

// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın
// let text = "Mən Code Academy Tələbəsiyəm.";
// let split = text.split(" ");
// console.log(split);

// 11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.

// let text =  "            Mən Code Academydə Programing tədrisi alıram            ";
// let newText =text.trim().length;
// console.log(newText);