// QUESTION 1
let array1 = [20, 46, 90, 80, 120];
let array2 = [2, 2, 5, 4, 2];
console.log(array1[0]/array2[0], array1[1]/array2[1], array1[2]/array2[2], array1[3]/array2[3], array1[4]/array2[4]);

// QUESTION 2
var arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9, [[10, 11, 12, [13, 4, 112]], 136, 14],];
let text = " ";
//  for (var i = 0; i < arr.length; i++) {
//     text += arr[i] + '<br>';
//     for (var j = 0; j < arr[i].length;)
//     text += arr[i][j] + '<br>';
//     console.log(arr[i][j])
// }
 for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) { // check if element is an array
       for (var j = 0; j < arr[i].length; j++) {
        if (Array.isArray(arr[i][j])) { // check if element is an array
         for (var k = 0; k < arr[i][j].length; k++) {
             if (Array.isArray(arr[i][j][k])) { // check if element is an array
               for (var l = 0; l < arr[i][j][k].length; l++) {
                 if (arr[i][j][k][l] === 13 || arr[i][j][k][l] === 4) {
                   console.log(arr[i][j][k][l]); // print the required numbers
                 }
               }
             } else if (arr[i][j][k] === 10) {
               console.log(arr[i][j][k]); // print the required numbers
             }
           }
         } else if (arr[i][j] === 8) {
           console.log(arr[i][j]); // print the required numbers
         }
       }
     } else if (arr[i] === 136) {
       console.log(arr[i]); // print the required numbers
     }
   }