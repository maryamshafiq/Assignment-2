//   Chapter 9_11

    //  Ans # 1

// var name = prompt("City Name?", "Enter name here ");
// if (name === "karachi" || name === "Karachi") {
// alert( "Welcome to the city of lights!");
// }

//   Ans # 2

//  var nam = prompt("Gender?", "Enter your gender here");
//  if (nam === "male") {
//  alert ("Good Morning Sir");
//  }
//  if (nam === "female") {
//     alert ("Good Morning Ma'am ");
// }

          //  OR

//  var gender = prompt("Enter Gender Type");
//   if (gender==="Male" || gender ==="male"){
//      alert("Good Morning Sir");
//   } else if (gender == "female" || gender == "Female") {
//        alert("Good Morning Ma'am");
//    }

        // Ans # 3

// var color = prompt("Enter color of road traffic signal");
// if (color === "red" || color === "Red"){
//   alert("Must Stop");
// }     
// if (color === "yellow" || color === "Yellow"){
//   alert("Ready to Move");
// }   
// if (color === "green" || color === "Green"){
//   alert("Move Now");
// } else {
//   alert("Invalid color");
// }

  //  Ans # 4 

// var fuel = +prompt("Remaining fuel in car");
// if(fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

    // Ans # 05


//            "A"

// var a = 4;
// if (++a === 5) {
//     alert("given condition for the variable is true");
// }

  // Result : given condition is true because the value is equal to 5.


//                    "B" 
// var b = 82;
// if (b++ === 83) {
//     alert("given consdition for the variable is true");
// }

// RESULT :condition is not true because the value is not equals to 83 at this point. (Alert Not Generate).


//                     "C" 
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }

// if (c === 14) {
//     alert("condition 4 is true");

// }

//   (Alert Generate On Condition 2 & 4)


//            "D" 
// var materialCost = 2000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals")
// }

        //  Result = the condition is true .


//            "E" 
// if (true) {
//     alert("True");
// }
// if (false) {
//    alert("False");
// }


        // Result =  the condition is true .


//              "F" 
 

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

        // the condition is true (Alert Displayed) .
        
        // Ans # 6


// var obtainMarks=prompt("Enter obtained marks in three different subjects");
// var totalMarks = prompt("enter total marks");
// var percentage = obtainMarks /totalMarks *100;

// document.write("<h1>Marks Sheet</h1>" + "<br>")
// document.write("Total marks" + " " + totalMarks + "<br>");
// document.write("Marks Obtained"+ " " + obtainMarks + "<br>");
// document.write("Percentage" + " " + percentage + "%" +"<br>");

// if (percentage>=80 ){
//     document.write("Grade : A-One" + "<br>");
//     document.write("Excellent");
// } 
//  else if(percentage< 80 && percentage >= 70){
//     document.write("Grade : A " + "<br>");
//     document.write("Remarks : Very Good");
// }
// else if(percentage<70 && percentage >=60){
//     document.write("Grade : B" + "<br>");
//     document.write("Remarks : You need to improve");

// }
//  else if(percentage<60){
//     document.write("Grade : F" + "<br>" );
//     document.write("Remarks : Need more hard work");
// }
// else{
//     document.write();
// }

      // Ans # 07

// var secretNumber = 5
// var guess = +prompt("Enter the Secret number ranging 1-10")

// if (guess === secretNumber) {
//     alert("Bingo! Correct Answer");

// } else if (guess === ++secretNumber) {
//     alert("Close enough to the correct answer");

// } else if (guess = --secretNumber) {
//     alert("Close enough to the correct answer");
// }

    //  Ans # 08


// var number = +prompt("Enter the number")
// if (number % 3 === 0) {
//     alert(number +" " + "is divisible by 3");

// } else {
//     alert("The given number does not divisible by 3");
// }

      //  Ans #9

//  var number = +prompt("Enter a number");
// if ( number % 2=== 0){
//     alert( number + " " +"is an even number");
// } else if (number % 2 != 0) {
//   alert(number + " is an Odd number")
//   }
  //  OR
// else {
//    alert(number + " " +"is an Odd number");
//  }  

      //  Ans # 10

// var temp = +prompt ("Enter temperature");
// if (temp > 40 ){
//     alert("It is too hot outside.");
// }
// if (temp > 30 && temp <= 40){
//        alert("The Weather today is Normal.");
// }
//  if (temp > 20 && temp <= 30){
//     alert("Today's Weather is cool.");
// }
//  if (temp > 10 && temp <= 20){
//     alert("“OMG! Today's weather is so Cool.");
// }

      //  Ans # 11

// var firstNumber = +prompt("Enter the first number")
// var secondNumber = +prompt("Enter the second number")
// var operation = prompt("Enter the operation to perform +,-.*,/")

// if (operation == "+") {
//     var addition = firstNumber + secondNumber;
//     alert("The sum of two numbers is " + addition);
// } else if (operation == "-") {
//     var subtraction = firstNumber - secondNumber;
//     alert("The difference of two numbers is " + subtraction);
// } else if (operation == "*") {
//     var multiplication = firstNumber * secondNumber;
//     alert("The product of two numbers is " + multiplication);
// } else if (operation == "/") {
//     var division = firstNumber / secondNumber;
//     console.log("The division of two numbers is " + division);
// }

        // chapter 12----13

            //  Ans #1


    // var numb = prompt("Enter Number or String")
    // if (numb === "A") {
    //      alert("A = 65 & this is Upercase")
    // } else if (numb === "a") {
    //     alert("a = 97 & this is lowercase")
    // } else if (numb === "Z") {
    //     alert("Z = 90 & this is upercase")
    // } else if (numb === "z") {
    //     alert("z = 122 & this is lowercase")
    //  }


            // Ans #2


    // var number1= +prompt("Enter first number");
    // var number2= +prompt("Enter Second number");
    // if (number1 > number2){
    //     alert("First number is larger" );
    // }
    // else if(number2>number1){
    //     alert("Second number is large");
    // }
    // else{
    //     alert("Both integers are equal");
    // }


    // Ans #3

    // var number = +prompt("Enter a number");
    // if ( number >0){
    //     alert("Number is positive");
    // }
    // else if(number <0){
    //     alert("Number is negative");
    // }
    // else{
    //     alert("Number is zero");
    // }

    // Ans # 04


    // var input = prompt("Enter a character:");
    // if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
    //     alert("Its a vowel");
    // } else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
    //     alert("Its a consonant");
    // } else {
    //     alert("Invalid input please enter an alphabet");
    // }

    // Ans #5


    // var password = "1234";
    // var userPassword = prompt("Enter a password");
    // if ( userPassword ===""){
    //     alert(" Please enter your password");
    // }
    // else if(userPassword === password){
    //     alert("Correct! The password you entered matches the original password");
    // }
    // else{
    //     alert("Incorrect password");
    // }
    
    // Ans #6


//     var hour = 13;
//    if (hour < 18) {
//        greeting = "Good day";
//        alert(greeting);
//    }
//    else{
//        greeting = "Good evening";
//        alert(greeting);
//    }

// Ans #7

// var inputTime = prompt("Enter time like 12:00");
//     if(inputTime>= 0000 && inputTime<1200){
//         alert("Good Morning");
//     }
//     else if(inputTime>=1200 && inputTime<1700){
//         alert("Good Afternoon")
//     }
//     else if(inputTime>=1700 && inputTime<2100){
//         alert("Good Evening")
//     }
//     else if (inputTime>=2100 && inputTime<=2359){
//         alert("Good Night")
//     }
// else{
//     alert("Pleas Enter valid time");
// }

        //   Chap # 14-16

                // Task #1 

// var array = [];
// console.log(array);
                //   Task #2

// var array = new array();
// console.log(array);
                    // Task #3

// var stringArray = ["Apple","Mango","Orange"];
// document.write(stringArray);

//             //    Task #4
            
//     var numberArray ;
//     numberArray = [01,11,22,33,44,55,66,77,88];
//     document.write(numberArray);
    
//                 //    Task #5

//     var boolenArray;
//     boolenArray = ["yes","No","True", "False"];

//                     //   Task #6
//     var mixedArray;
//     mixedArray=["White" ,"black", 12345 , "hey",];


            //   Task #7

    // var education = [" SSC","HSC","BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
    // document.write("<h1>Qualifications:</h1>" )
    // document.write("1)"+ " "+ education[0] + "<br>");
    // document.write("2)"+ " "+ education[1] + "<br>");
    // document.write("3)"+ " "+ education[2] + "<br>");
    // document.write("4)"+ " "+ education[3] + "<br>");
    // document.write("5)"+ " "+ education[4] + "<br>");
    // document.write("6)"+ " "+ education[5] + "<br>");
    // document.write("7)"+ " "+ education[6] + "<br>");
    // document.write("8)"+ " "+ education[7] + "<br>");

                // Task # 08

    // var student = ["Joy", "Tina", "Rocky"]
    
    // for (var i = 0; i < student.length; i++) {
    //     var studentMarks = [320, 420, 470]
    //     for (var j = 0; j < studentMarks.length; j++) {
    //         var percentage = studentMarks[i] * 100 / 500
    //     }
    //     document.write("Score of " + student[i] + " is " + studentMarks[i] + ". Percentage Is " + percentage + "% <br>")
    // }

                //    Task # 10  

    // var score = [320, 230, 420, 180]
    // document.write("Score of Students: " + score + "<br>")
    // var ascending = score.sort()
    // document.write("Ordered Score of students: " + ascending)

                    // Task # 11


    // var citiesList = ["Karachi", "Lahore", "Peshawar", "Quetta"]
    // document.write("Cities list: " + citiesList + "<br>")
    // var selectedCities = [citiesList[1] + " and " + citiesList[2]]
    // document.write("Selected Cities: " + selectedCities)
    
                //      Task #12

//     var arr =  ["This", " is", " my ", " cat"];
//     document.write("Array :" + "<br>" + arr + "<br>" +"<br>");
//     arr1 = arr.join(" ");
//     document.write("String:" + "<br>" + arr1)

                    // Task #13

//     var array = ["keyboard" , "mouse", "printer", "monitor"];
//     document.write("Devices: " + "<br>" + array + "<br>");
//     for (var i =0; i<array.length ; i++){
//       document.write("<br>Out" + "<br>" + array.shift(array[i]) + "<br>" + "<br>");
//       array.length = array.length +1;
//     }

                //      Task #14


//     var array = ["keyboard" , "mouse", "printer", "monitor"];
//     document.write("Devices: " + "<br>" + array + "<br>");
//     for (var  i=array.length ; i>0;  i--){
//       document.write("<br>" +"Out" + "<br>" + array.pop(array[i]) + "<br>" + "<br>");
//     }



                //        Chap # 17-20

                        // Task #1


// var multiArrEmpty = [[],[]];   2d array                      


                     // Task #2

// var array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for (var i=0; i<array.length ; i++  ){
//   document.write(array[i] + "<br>");
// }


                    // Task #3
// var i;
// for(i = 1; i<= 10 ; i++){
// document.write(i + "<br>");
// }



                     // Task #4
// var number = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");
// document.write("Multiplication table of" + number + "<br>");
// document.write("length"+ length + "<br>" + "<br>");
// for ( i =1; i<=length; i++){
// document.write(number + "x" + i + "=" + number*i  + "<br>");
// }

                     //Task #5


// var fruit = ["apple", "banana", "mango", "orange","strawberry"]
// for (var i=0; i<fruit.length; i++){
//      document.write(fruit[i] + "<br>" );
//  }
//      document.write("<br>");
// for (var i=0; i<fruit.length; i++){
//     document.write("Element at index" +" " + i + " " + "is" + " "+ fruit[i] + "<br>")
//  }

                //  Task # 06


//              Section (A)

// document.write(" <h2>a. Counting: </h2>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",")

// }


// //               Section (B)  

// document.write(" <h2>b. Reverse Counting: </h2> ")
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",")
// }


// //              Section (C)

// document.write(" <h2>c. Even</h2>")
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + ",")
// }

// //              Section (D)

// document.write(" <h2>d. odd </h2>")
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i + ",")
// }

// //                 Section (D)

// document.write("<h2>e. Series </h2>")
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + "K,")
// }
             
                //  Task # 7

// var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
// var input = prompt( "Welcome to our bakery"," What do you want to?")
// var isFound = false //this is called flag

// for (i = 0; i < itemBakery.length; i++) {
//     if (input === itemBakery[i]) {
//         alert(input + " is available at index " + i + " in our bakery")
//         isFound = true
//         break
//     }
// }
// if (isFound === false) {
//     alert("We are sorry. " + input + " is not availabale")
// }


              // Task # 10

 document.write("<h2>5 Ranging</h2>")
     for (var i = 5; i <= 100; i = i + 5) {
     document.write(i + ",")
 }
              