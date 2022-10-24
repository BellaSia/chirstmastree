//set of number
// filter = even, odd


// function even (num){
//     return num % 2 == 0; // if true then even
// };


// function odd (num){
//     return num % 2 != 0; // if true then even
// };

// function greatherthan5 (num){
//     return num >= 5 ; // if true then even
// };

// function lessthan5 (num){
//     return num <= 5 ; // if true then even
// };

// setTimeout(Hello, 5000);

// function Hello(){
//     alert("Hi!");
// }



// //if array = list 
// //filter function 3

// function filter(list_of_numbers, filtered_numbers){
//     let final_list = []; //odd or even number
//     for(numbers of list_of_numbers){
//         if (filtered_numbers(numbers)){
//             final_list.push(numbers);

//         };
//     };
//     return final_list;
// };

// let list_ng_numbers = [1,2,3,4,5,6,7,8,9,10];

// alert(filter(list_ng_numbers,even));
// alert(filter(list_ng_numbers,odd));
// alert(filter(list_ng_numbers,greatherthan5));
// alert(filter(list_ng_numbers,lessthan5));

// setTimeout(each_alert, 2000);
// function each_alert(){
//     alert(filter(list_ng_numbers,even));
// }

// setTimeout(each_alert, 2000);
// function each_alert(){
//     alert(filter(list_ng_numbers,odd));
// }


// setTimeout(each_alert, 2000);
// function each_alert(){
//     alert(filter(list_ng_numbers,greatherthan5));
// }

// setTimeout(each_alert, 2000);
// function each_alert(){
//     alert(filter(list_ng_numbers,lessthan5));
// }

// setInterval(interval, 1000);
// function interval(){
//     let e = document.getElementById("for_intervel_output");
//     e.style.color = e.style.color == "green" ? "green" : "red";
// }

// function stop(){
//     clearInterval(interval);
// }



// // star pattern in single loop
// function pattern(Top) {
//     var num,
//     plusOne,s
//     stars = 1;

//     // Loop to handle number of rows
//     for (num = 1, plusOne = 0; num <= 2 * Top - 1; num++)
//     {

//     if (num < Top - plusOne)
//     document.write(" ");

//     else {
//         if (stars)
//         document.write("*");
//         else
//         document.write(" ");

//         stars = 1 - stars;
//     }

//     if (num == Top + plusOne) {
//         plusOne++;
//         document.write("<br>");

//         // Since for nth row we have
//         // 2 * Top- 1 columns
//         if (num == 2 * Top - 1) break;

//         num = 0;
//         stars = 1;
//     }
//     }
// }
// var Top = 20;

// Function Call




// art(artstars);


// function art(){
//     let art1 = document.getElementById("art");
//     let artcolor1 = ["red", "green", "yellow"];
//     let Color = Math.floor(Math.random() * 3);
//     art1.style.color = artcolor1[Color];
// };

// function artq(){
//     artcolor1 = setInterval(art, 1000);
// };

// function stop(){
//     clearInterval(artcolor1 (2000));
// };



// pattern(Top);
// function sparkling1(){
//     let text1 = document.getElementById("pasko");
//     let colors1 = ["red", "green", "yellow"];
//     let generateColor1 = Math.floor(Math.random() * 3);
//     text1.style.color = colors1[generateColor1];
// };

// function start(){
//     start_color1 = setInterval(sparkling1, 1000);
// };

// function stop1(){
//     clearIntervals(start_color1);
// }








const rbgcolor = document.getElementById("pasko");

function lights() {

    let redlights = Math.floor(Math.random() * 255);
    let greenlights = Math.floor(Math.random() * 255);
    let bluelights = Math.floor(Math.random() * 255);
    let allLights = "rgb(" + redlights + ", " + greenlights + ", " + bluelights + ")";

    rbgcolor.style.color = allLights;
    document.getElementById("colorname").textContent = allLights;
}
function start() {
    colors = setInterval(lights, 500);
}

function stop() {
    clearInterval(colors);
}
















// Tree();
// function Tree() {
//     let star_body_num = 8;
//     let stars = "*";

//     for (let Sparks = 0; Sparks <= star_body_num; Sparks++) {
//         for (let num = 0; num <= Sparks; num++) {
//             document.getElementById("xmas").innerHTML += " * "; //body ng star
//             document.getElementById("xmas").innerHTML += stars; //letstar
//         }
//         document.getElementById("xmas").innerHTML += "<br>"; //will be for the line 
//     }
//     document.getElementById("xmas").innerHTML += " 🎁🎁 || || 🎁🎁 ";
// }



// function pattern(Top) {
//     var num,
//     stars1,
//     stars = 1;

//     // Loop to handle number of rows
//     for (num = 1, stars1 = 0; num <= 2 * Top - 1; num++)
//     {

//     if (num < Top - stars1)
//     document.write(" ");

//     else {
//         if (stars)
//         document.write("*");
//         else
//         document.write(" ");

//         stars = 1 - stars;
//     }

//     if (num == Top + stars1) {
//         stars1++;
//         document.write("<br>");
//         if (num == 2 * Top - 1) break;

//         num = 0;
//         stars = 1;
//     }
//     }
// }
// var Top = 20;


  // setTimeout(function stopInterval() {
  //   clearInterval(startColor);
  //   clearInterval(startColor2);
  // }, 5000)
  
//   function resetFlash() {
//     window.location.reload();
//   }
  

// for (let i = 0; i < a;  i++) {
//    document.write("&nbsp"); 
//    document.write("🎁"); 
    
// }


// function fibbonachi (n){
//     var n1 = 0;
//     var n2 = 1;
//     var i = 0;
//     var n3;
//     console.log(n1);

//     while (i <= n){
//         n3=n1+n2;
//         console.log(n3);
//         n1 = n2;
//         n1 = n3;

//     }
// }
// fibbonachi(8)



// for (i = 1; i <= 10; i++)

// {
//   document.write(i + "<br>" );
// }
