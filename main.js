// assignment#1

// alert("Are you seaching JavaScript?");

// var message = "Error!Please enter a valid password!";
// alert(message);

// alert("Welcome to Js Land...\n Happy Coding");

// var message = "Hello...I can run JS through my web browser,s console";
// alert(message);


    function greetUser() {
    alert("👋 Hello! Welcome to my website.");
  }

  function showProjectInfo() {
    alert("📁 This is a simple HTML, CSS, and JavaScript project using alerts. No loops used!");
  }

  function thankUser() {
    alert("✅ Thank you for visiting!");
  }


  
   alert("Script in HEAD runs before page loads");

    alert("Script BEFORE HTML content");

    function sayHello() {
      alert("Hello from inside the HTML content!");
    }


       alert("Script placed AFTER HTML content");

// // assignment#2
// var username = "Akhlaque Ahmed";
// var firstName = "Akhlaque"
// var lastName = "Ahmed"
// var fullName = "Akhlaque Ahmed"
// var fullName = firstName + " " + lastName;
//  alert("Your Full Name is: " + fullName);

// console.log(fullName);

// var message;
// message = "Hello World!";
// alert(message);

// var studentName = "Akhlaque Ahmed";
// var age = 22;
// var course = "Modern Web Development";
// var city = "Karachi";
// var institute = "Saylani SMIT";

// alert("Student Name: " + studentName);
// alert("Age: " + age);
// alert("Course: " + course);
// alert("City: " + city);
// alert("Institute: " + institute);

// alert("PIZZA\nPIZZ\nPIZ\nPI\nP");


// var email = "akhlaqueahmed397@gamil.com"
// alert("my email address is " + email)

// var Book = "A smarter way to learn JavaScript."
// alert("I am trying to learn from the Book " + Book)


// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);



// assignmet#3
//  var age = 22;
//  alert("I am " + age + " years old " );


//  alert("You have visited this site 14 times.")


//  var Birthyear = 1997;
//  document.write("My birthday is " + Birthyear + "<br> Data type of my dcleared variable is number <br>" );


// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.write("<b>" + visitorName + "</b> ordered <b>" + quantity + " " + productTitle + "</b> on <b>XYZ Clothing store</b>");



// assignment#4
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b>, and <b>_</b>.<br>");
document.write("For example: <b>$my_1stVariable</b><br><br>");
document.write("Variables must begin with a <b>letter</b>, <b>$</b>, or <b>_</b>.<br>");
document.write("For example: <b>$name</b>, <b>_name</b>, or <b>name</b><br><br>");
document.write("Variable names are case <b>Sensitive</b>.<br><br>");
document.write("Variable names should not be JS <b>keywords</b>.");





// assignment #5
// a = 3;
// b = 5;
// var result =(a + b);
// document.write(result);


    var num1 = 3;
    var num2 = 5;
    var sum = num1 + num2;
    document.write("<br> Sum of " + num1 + " and " + num2 + " is " + sum);


    var num1 = 3;
    var num2 = 5;
    var difference = num1 - num2;
    document.write("<br> Subtraction of " + num1 + " and " + num2 + " is " + difference);


    var num1 = 3;
    var num2 = 5;
    var product = num1 * num2;
    document.write("<br> Multiplication of " + num1 + " and " + num2 + " is " + product);



    var num1 = 3;
    var num2 = 5;
    var quotient = num1 / num2;
    document.write("<br> Division of " + num1 + " and " + num2 + " is " + quotient);

    var num1 = 3;
    var num2 = 5;
    var remainder = num1 % num2;
    document.write("<br> modulus of " + num1 + " and " + num2 + " is " + remainder);





   


 // a. Declare a variable
  var num;

  // b. Show the value of variable
  document.write("<br> Value after variable declaration is: " + num + "<br>");

  // c. Initialize the variable with some number
  num = 5;

  // d. Show initial value
  document.write("Initial value: " + num + "<br>");

  // e. Increment the variable
  num++;

  // f. Show value after increment
  document.write("Value after increment is: " + num + "<br>");

  // g. Add 7 to the variable
  num = num + 7;

  // h. Show value after addition
  document.write("Value after addition is: " + num + "<br>");

  // i. Decrement the variable
  num--;

  // j. Show value after decrement
  document.write("Value after decrement is: " + num + "<br>");

  // k. Remainder after dividing by 3
  var remainder = num % 3;

  // l. Show the remainder
  document.write("The remainder is: " + remainder + "<br><br>");

  // Task 4
  // Cost of one movie ticket
  var ticketPrice = 600;

  // Cost of 5 tickets
  var totalCost = ticketPrice * 5;

  // Show result1
  document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");




  var number = 4;

  document.write("<h3>Multiplication Table of " + number + "</h3>");

  document.write(number + " x 1 = " + (number * 1) + "<br>");
  document.write(number + " x 2 = " + (number * 2) + "<br>");
  document.write(number + " x 3 = " + (number * 3) + "<br>");
  document.write(number + " x 4 = " + (number * 4) + "<br>");
  document.write(number + " x 5 = " + (number * 5) + "<br>");
  document.write(number + " x 6 = " + (number * 6) + "<br>");
  document.write(number + " x 7 = " + (number * 7) + "<br>");
  document.write(number + " x 8 = " + (number * 8) + "<br>");
  document.write(number + " x 9 = " + (number * 9) + "<br>");
  document.write(number + " x 10 = " + (number * 10) + "<br>");



   
  var celsius = 25;

  var fahrenheitFromCelsius = (celsius * 9/5) + 32;
  document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

 
  var fahrenheit = 70;

  var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
  document.write(fahrenheit + "°F is " + celsiusFromFahrenheit + "°C");




    var priceItem1 = 650;

  // b. Price of item 2
  var priceItem2 = 100;

  // c. Ordered quantity of item 1
  var quantityItem1 = 3;

  // d. Ordered quantity of item 2
  var quantityItem2 = 7;

  // e. Shipping charges
  var shippingCharges = 100;

  // Total cost calculation
  var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

  // Display the receipt
  document.write("<h2>Shopping Cart</h2>");
  document.write("Price of item 1 is " + priceItem1 + " PKR<br>");
  document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
  document.write("Price of item 2 is " + priceItem2 + " PKR<br>");
  document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
  document.write("Shipping Charges " + shippingCharges + " PKR<br><br>");
  document.write("Total cost of your order is " + totalCost + " PKR");


    var totalMarks = 980;
  var marksObtained = 804;


  var percentage = (marksObtained / totalMarks) * 100;

  // Display the result
  document.write("<h2>Student Result</h2>");
  document.write("Total Marks: " + totalMarks + "<br>");
  document.write("Marks Obtained: " + marksObtained + "<br>");
  document.write("Percentage: " + percentage + "%");




    var totalPKR = (10 * 104.80) + (25 * 28);

  // Display result
  document.write("<h2>Currency in PKR</h2>");
  document.write("Total Currency in PKR: " + totalPKR);



    // Initialize variable
  var number = 10;

  // Perform all calculations in a single expression: ((number + 5) * 10) / 2
  var result = ((number + 5) * 10) / 2;

  // Display the result
  document.write("<h2>Arithmetic Result</h2>");
  document.write("Initial number: " + number + "<br>");
  document.write("Result of ((number + 5) * 10) / 2 is: " + result);



    // a. Store current year
  var currentYear = 2016;

  // b. Store birth year
  var birthYear = 1992;

  // c. Calculate possible ages
  var age1 = currentYear - birthYear;
  var age2 = age1 - 1;

  // Output result
  document.write("<h2>Age Calculator</h2>");
  document.write("Current Year: " + currentYear + "<br>");
  document.write("Birth Year: " + birthYear + "<br>");
  document.write("They are either " + age2 + " or " + age1 + " years old.");



   // a. Store a radius into a variable
  var radius = 20;

  // π value
  var pi = 3.142;

  // b. Calculate the circumference
  var circumference = 2 * pi * radius;

  // c. Calculate the area
  var area = pi * radius * radius;

  // Display the result
  document.write("<h2>The Geometrizer</h2>");
  document.write("Radius of circle: " + radius + "<br>");
  document.write("The circumference is " + circumference + "<br>");
  document.write("The area is " + area);




    // a. Store favorite snack
  var favoriteSnack = "Chips";

  // b. Store current age
  var currentAge = 15;

  // c. Store maximum age
  var maxAge = 65;

  // d. Store estimated amount per day
  var amountPerDay = 3;

  // e. Calculate total needed
  var yearsRemaining = maxAge - currentAge;
  var totalNeeded = yearsRemaining * 1 * amountPerDay;

  // Display the result
  document.write("<h2>The Lifetime Supply Calculator</h2>");
  document.write("Favorite Snack: " + favoriteSnack + "<br>");
  document.write("Current Age: " + currentAge + "<br>");
  document.write("Estimated Maximum Age: " + maxAge + "<br>");
  document.write("Amount per day: " + amountPerDay + "<br>");
  document.write("You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");




//   assignment #6
  var a = 10;

  // Display result
  document.write("<h2>Result:</h2>");
  document.write("The value of a is: " + a + "<br>");
  document.write("--------------------------<br><br>");

  document.write("The value of ++a is: " + (++a) + "<br>");
  document.write("Now the value of a is: " + a + "<br><br>");

  document.write("The value of a++ is: " + (a++) + "<br>");
  document.write("Now the value of a is: " + a + "<br><br>");

  document.write("The value of --a is: " + (--a) + "<br>");
  document.write("Now the value of a is: " + a + "<br><br>");

  document.write("The value of a-- is: " + (a--) + "<br>");
  document.write("Now the value of a is: " + a + "<br>");

var a = 2, b = 1;

  var result = --a - --b + ++b + b--;
  
  document.write("<h2>Final Result:</h2>");
  document.write("a = " + a + "<br>");
  document.write("b = " + b + "<br>");
  document.write("result = " + result);



   var userName = prompt("Enter your name:");

  // Greet the user
  alert("Hello, " + userName + "! Welcome to our website.");





  num = 5;
  document.write("<h2>Multiplication Table of " + num + "</h2>");
  document.write(num + " x 1 = " + (num * 1) + "<br>");
  document.write(num + " x 2 = " + (num * 2) + "<br>");
  document.write(num + " x 3 = " + (num * 3) + "<br>");
  document.write(num + " x 4 = " + (num * 4) + "<br>");
  document.write(num + " x 5 = " + (num * 5) + "<br>");
  document.write(num + " x 6 = " + (num * 6) + "<br>");
  document.write(num + " x 7 = " + (num * 7) + "<br>");
  document.write(num + " x 8 = " + (num * 8) + "<br>");
  document.write(num + " x 9 = " + (num * 9) + "<br>");
  document.write(num + " x 10 = " + (num * 10) + "<br>");








    // a) Take three subjects name from user
  var sub1 = prompt("Enter name of first subject:");
  var sub2 = prompt("Enter name of second subject:");
  var sub3 = prompt("Enter name of third subject:");

  // b) Total marks for each subject
  var totalMarksPerSubject = 100;

  // c + d) Take obtained marks from user for each subject
  var marks1 = parseInt(prompt("Enter obtained marks for " + sub1 + ":"));
  var marks2 = parseInt(prompt("Enter obtained marks for " + sub2 + ":"));
  var marks3 = parseInt(prompt("Enter obtained marks for " + sub3 + ":"));

  // e) Calculate totals
  var totalObtained = 54 + 54 + 48;
  var totalMarks = totalMarksPerSubject * 3;
  var percentage = (totalObtained / totalMarks) * 100;

  // Display result in a table
  document.write("<h2>Marks Sheet</h2>");
  document.write("<table border='1' cellspacing='0' cellpadding='5'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + sub1 + "</td></tr>");
  document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + sub2 + "</td></tr>");
  document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + sub3 + "</td></tr>");
  document.write("<tr><th colspan='2'>Total</th><th>" + totalObtained + " / " + totalMarks + "</th></tr>");
  document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
  document.write("</table>");