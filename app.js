// ====== chapter #3 ======
// variables for number

// ==== question 1 ====
// var age = 25;
// alert("i am " + age + " years old");

// ==== question 2 ====
// var visitCount = 14;
// alert("You have visited this site " + visitCount + " times");

// ==== question 3 ====
// var birthYear = 1998;
// document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is " + typeof birthYear + "<br>");

// ==== question 4 ====
// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;
// document.write(visitorName + " ordered " + quantity + productTitle + "(s) on XYZ Clothing store");







// ====== chapter #4 ======
// vaiables names: legal and illegal

// ==== question 1 ====
// var name, age, isStudent; (legal variable names)

// ==== question 2 ====
// Legal variable names
// var firstName, $age, user123, have2digit, full_name;

// Illegal variable names
// var 1stName, last-name, user name, @age, is-Student;

// ==== question 3 ====
// document.write(
//     "<h1>rules for naming JS variables</h1>" +
//     "<p>Variable names can only contain letters, numbers, _, and $.</p>" +
//     "<p>Variable names must begin with a letter, _, or $.</p>" +
//     "<p>Variable names are case-sensitive.</p>" +
//     "<p>Variable names should not be a JS keyword.</p>"
// );





// ====== chapter #5 ======
// math expressions


// ==== question 1 ====
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");


// ==== question 2 ====
// var difference = num1 - num2;
// document.write("Difference of " + num1 + " and " + num2 + " is " + difference + "<br>");
// var product = num1 * num2;
// document.write("Product of " + num1 + " and " + num2 + " is " + product + "<br>");
// var quotient = num1 / num2;
// document.write("Quotient of " + num1 + " and " + num2 + " is " + quotient + "<br>");
// var remainder = num1 % num2;
// document.write("Remainder of " + num1 + " and " + num2 + " is " + remainder + "<br>");


// ==== question 3 ====
// var variable;
// document.write("Value after variable declaration is: " + variable + "<br>");
// variable = 5;
// document.write("Initial value: " + variable + "<br>");
// variable++;
// document.write("Value after increment is: " + variable + "<br>");
// variable += 7;
// document.write("Value after addition is: " + variable + "<br>");
// variable--;
// document.write("Value after decrement is: " + variable + "<br>");
// variable %= 3;
// document.write("The remainder is: " + variable + "<br>");


// ==== question 4 ====
// var ticketPrice = 600;
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR<br>");


// ==== question 5 ====
// var tableNumber = 4;
// document.write("<h2>Table of " + tableNumber + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document .write(tableNumber + "x" + i + " = " + (tableNumber * i) + "<br>");
// }


// ==== question 6 ====
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F<br>");
// var fahrenheit = 77;
// var celsius = (fahrenheit - 32) * 5/9;
// document.write(fahrenheit + "°F is " + celsius + "°C<br>");


// ==== question 7 ====
// var priceOfItem1 = 650;
// var priceOfItem2 = 100;
// var quantityOfItem1 = 3;
// var quantityOfItem2 = 7;
// var shippingCharges = 100;
// var totalCost = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges;
// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is " + priceOfItem1 + "<br>");
// document.write("Quantity of item 1 is " + quantityOfItem1 + "<br>");
// document.write("Price of item 2 is " + priceOfItem2 + "<br>");
// document.write("Quantity of item 2 is " + quantityOfItem2 + "<br>");
// document.write("Shipping charges " + shippingCharges + "<br>");
// document.write("Total cost of your order is " + totalCost + "<br>");


// ==== question 8 ====
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("<h1>Marks Sheet</h1>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%<br>");


// ==== question 9 ====
// var usDollar = 10;  
// var saudiRiyal = 25;
// var totalCurrencyInPKR = (usDollar * 104.80) + (saudiRiyal * 28);
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total currency in PKR: " + totalCurrencyInPKR + "<br>");


// ==== question 10 ====
// var number = 5;
// var result = ((number + 5) * 10) / 2;
// document.write("Result of the expression is: " + result + "<br>");


// ==== question 11 ====
// var currentYear = 2023;
// var birthYear = 1998;
// var age = currentYear - birthYear;
// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age: " + age + "<br>");


// ==== question 12 ====
// var radius = 5;
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * radius * radius;
// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("Circumference of a circle: " + circumference.toFixed(2) + "<br>");
// document.write("Area of a circle: " + area.toFixed(2) + "<br>");


// ==== question 13 ====
// var favoriteSnack = "Chocolate Chip Cookies";
// var currentAge = 25;
// var estimatedMaxAge = 70;
// var amountPerDay = 2;
// var totalSnacks = (estimatedMaxAge - currentAge) * 365 * amountPerDay;
// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favorite Snack: " + favoriteSnack + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + estimatedMaxAge + "<br>");
// document.write("Amount of snacks per day: " + amountPerDay + "<br>");
// document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + estimatedMaxAge + "<br>");