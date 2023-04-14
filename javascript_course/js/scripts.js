/*
***************************************************************
 LESSON 2: JavaScript syntax
 **************************************************************
 */
// alert("Testing the alert command");
// console.log("Testing the console.log command");
/*
***************************************************************
 LESSON 3: DOM
 **************************************************************
 */
//this is a single line comment

/*
this is a 
multi line
 comment
*/
/*
***************************************************************
 LESSON 4: Working with the DOM
 **************************************************************
 */
// console.log("statement 1");

// console.log("statement 2");

/*
***************************************************************
 LESSON 4: Working with the DOM
 **************************************************************
 */
// document.getElementById("blue_box").innerHTML="<h1>Test</h1>"

// console.log(document.getElementById("blue_box").innerHTML);

/*
***************************************************************
 LESSON 5: Variables
 **************************************************************
 */
//  var firstName="Sayak"
//  console.log(firstName);
/*
***************************************************************
LESSON 5: Data Types Strings
**************************************************************
*/
// var firstName = "Sayak"
// var lastName = "De"
// var fullName = firstName + " " + lastName;

// console.log(fullName);

// var age = 23
// console.log(age)

// var passport = 'XYZ0123';
// console.log(passport)

// console.log("String functions in JS:")
// console.log()   //does nothing
// console.log("\n")   //prints a new line
// console.log(fullName.length)

// console.log(fullName[0])

// var url = "https://www.udemy.com"

// console.log(url)
// console.log(url.replace("https://", ""));

/*
***************************************************************
LESSON 6: Data Types : Numbers
**************************************************************
*/

// var num1 = 20

// var num2 = 3

// var sum = num1 + num2

// var diff = num1 - num2

// var pdt = num1 * num2

// var div = num1 / num2 

// var avg = (num1 + num2)/2

// console.log(num1)

// console.log(num2)

// console.log(sum)

// console.log(diff)

// console.log(pdt)

// console.log(div)

// console.log(avg)

// console.log(Math.pow(2,4))

// console.log(Math.sqrt(64))

// console.log(Math.round(2.56))

// console.log(Math.round(2.5))

// console.log(Math.floor(2.9))

// console.log(Math.ceil(3.2))

// console.log(Math.random())

// console.log(Math.round(Math.random()*100))

// console.log(Math.abs(-11.11))

// console.log(Math.min(2,3))

// console.log(Math.PI)

// var num = 2.5634

// console.log(num.toFixed(2))

// console.log(num.toFixed(1))

// console.log(num.toFixed(5))

// console.log(num.toFixed(4))

/*
***************************************************************
LESSON 7: Data Types : Numbers(Part - 2)
**************************************************************
*/

// var num1 = "1"; //this is a string

// var num2 = "2"; //this is a string

// console.log(num1 + " " + num2)  //concatenates two strings num1 and num2

// var n1 = 14 //this is a number

// var n2 = 5  //this is a number

// console.log(n1+=n2) //this is a short hand operator to add two numbers

// var firstName = "Sayak" //this is a string

// var secondName = "De"   //this is a string

// firstName+=" "  //we are adding a space to separate firstName and secondName

// console.log(firstName+=secondName)  //printing the full name with use of short hand operator

// console.log( parseInt(num1) + parseInt(num2) )  //converting string to number

// console.log(n1.toString() + n2.toString())  //converting number to string

/*
***************************************************************
LESSON 8: Data Types : Booleans
**************************************************************
*/
// flag    =   true

// console.log(typeof flag)

// console.log(34  >=  45)

// console.log("4" ==  4)

// console.log(4   === 4)

// console.log(4   !=  7)

// console.log("John"  ==  "Sayak")

// console.log(4   <   7)

// var points  =   52 ;

// if(points   <   50)
// {
//     console.log("Need more points");
// }

// else
// {
//     console.log("You have enough points")
// }

/*
***************************************************************
LESSON 9: Data Types : undefined and null
**************************************************************
*/
// var variable;

// console.log(variable)   //will print undefined because no value was assigned

// var temperature =   28

// console.log(typeof temperature) //will print number data type

// temperature =   null

// console.log(temperature)    //will print null

// console.log(typeof temperature) //will print object since data type of temperature is null but it prints object because null is an object in JS

/*
***************************************************************
LESSON 10: Exercise 1
**************************************************************
*/
//Will be done in ex1.js

/*
***************************************************************
LESSON 11: Functions
**************************************************************
*/
// function sum_numbers()
// {
//     var num1    =   5
    
//     var num2    =   15

//     console.log(num1    +   num2)
    
// }

// sum_numbers()//calling function sum_numbers() because only declaring function doesn't do anything we need to call it to get the output

// function sum_args(num1  ,   num2)   //dynamic function
// {
//     console.log(num1    +   num2)
// }

// sum_args(1,6)

// sum_args(7,6)

// sum_args(7.8,0.6)

// sum_args(-7.8,0.6)

// function sum_args2(num1 , num2)
// {
//     return num1 + num2
// }

// console.log(sum_args2(5,6))

// var avg = sum_args2(7,13)    /   2

// console.log("Average    =   "+  avg)

// document.getElementById("sum_result").innerHTML=sum_args2(-27,55)

/*
***************************************************************
LESSON 12: Data Types : Arrays
**************************************************************
*/


// var students = [ "John" , "Mary", "Paul" ];

// var primeNumbers = [ 2, 3, 5, 7, 11, 13 ];

// students = [ "John" , "Mary", "Paul" ];
    
// console.log(students.length); // The console will show 3
 
// console.log(students[0]);  // The console will show "John"


// var groups = [ 
//     [ "John" , "Mary" ],
//     [ "Peter" , "Joana", "Andrew", "Julio" ],
//     [ "Caroline" , "Helen", "Mark" ]
// ];

// console.log(groups.length); // The console will 3

// console.log(groups[1]);  // The console will [ "Peter" , "Joana", "Andrew", "Julio" ]

// /* We can access arrays inside arrays by adding the index notation as many times as needed */

// console.log(groups[1][2]);  // The console will "Andrew"

// var courses = [ "HTML", "Python", "PHP" ];

// courses.push("Javascript");

// console.log(courses);  // The console will show [ "HTML", "Python", "PHP", "Javascript" ]

// courses.unshift("Bootstrap");

// console.log(courses);  // The console will show [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

// courses.pop();

// console.log(courses);  // The console will show [ "Bootstrap", "HTML", "Python", "PHP" ]

// courses.shift();

// console.log(courses);  // The console will show [ "HTML", "Python", "PHP" ]


// var ingredients = [ "bread", "cheese", "ham" ];

// ingredients[0] = "whole bread";

// console.log(ingredients);  // The console will show [ "whole bread", "cheese", "ham" ]

// var students = [ "Peter" , "Joana", "Andrew", "Julio", "Kate", "Marie" ];

// console.log( students.slice(0,3) );
            
// var students = [ "Peter" , "Joana", "Andrew", "Julio", "Kate", "Marie" ];
    
// console.log( students.slice(3,) );// The console will show ["Julio", "Kate", "Marie"]


// var students = [ "Peter" , "Joana", "Andrew", "Julio", "Kate", "Marie" ];
    
// console.log( students.slice(-3,) );// The console will show ["Julio", "Kate", "Marie"]

/*
***************************************************************
LESSON 13: Data Types : Objects
**************************************************************
*/

// var employee = {
//     'name': 'James Taylor',
//     'yearOfBirth': 1948,
//     'ID': 'SBJ0001',
//     'role': 'IT Analyst'
// };

// console.log( employee['ID'] ); //  The console will show 'SBJ0001'

// console.log( employee.ID ); // Same thing using the dot notation

// var test = {
//     'property1': 'Some value',
//     '2a': 'Some other value',
//     09335: 'Another value',
//     'hello-world': 'Last value'
// }; 

// // 'property1' can be retrieved using the dot notation:

// console.log( test.property1 );  // The console will show 'Some value'

// // The other ones can't because they don't follow the naming rules. They can only be retrieved with braces.

// console.log( test['hello-world'] ); // The console will show 'Last value'

// var employee = {
//     'name': 'James Taylor',
//     'yearOfBirth': 1948,
//     'ID': 'SBJ0001',
//     'role': 'IT Analyst'
// };

// employee.role = 'IT Manager';  // alter a value
// employee.passport = 'KV09888';  // add a new property

// console.log(employee); 

/* The console will show:

{
    'name': 'James Taylor',
    'yearOfBirth': 1948,
    'ID': 'SBJ0001',
    'role': 'IT Manager',
    'passport': 'KV09888'
}; 

*/


// var courses = [
//     {
//         'title': 'Learn code in Python 3',
//         'reviews': 6802,
//         'students': 130129,
//         'categories': ['programming', 'technology']
//     },

//     {
//         'title': 'Learn PHP -  Beginner to Advanced',
//         'reviews': 1204,
//         'students': 30521,
//         'categories': ['web development', 'programming']
//     },

//     {
//         'title': 'Learn Microsoft Excel 2020',
//         'reviews': 4209,
//         'students': 18560,
//         'categories': ['productivity', 'business']
//     }
    
// ];

/*
***************************************************************
LESSON 14: Object Methods
**************************************************************
*/


// var student = {
//     'firstName': 'Marie',
//     'lastName': 'Smith',
//     'fullName': function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// console.log( student.fullName() ); // The console will show 'Marie Smith'

// console.log('Hello World'); // log is a method of the console object 

// Math.round(2.7);  // round is a method of the Math object

// var num = 3; 

// var num_string = num.toString(); // toString is a method that can be applied to different data types.

// document.getElementById("caixa_azul").innerHTML;  // getElementById is a method of the document object.
// // innerHTML is a property of the object returned by the get method.


// var courses = [ "HTML", "Python", "PHP" ];

// courses.push("Javascript"); // push is a method of the array data type.

/*
***************************************************************
LESSON 15: Exercise 2
**************************************************************
*/
// Done in ex2.js

/*
***************************************************************
LESSON 16: Events
**************************************************************
*/

// document.getElementById("click-me").onclick=function()
// {
//     alert("You clicked me")
// }

// document.getElementById("hover-me").onmouseover=function()
// {
//     alert("You moved the cursor over me")
// }

// document.getElementById("leave-me").onmouseout=function()
// {
//     alert("You moved the cursor out of me")
// }

// document.onkeydown=function(event)
// {
//     console.log(event)//prints the event on console
// }

// document.onkeydown=function(event)
// {
//     console.log(event.keyCode)//prints the ascii code of the key which is pressed
// }

// document.onkeydown=function(event)
// {
//     if(event.keyCode    ==  65)
//         alert("You have pressed letter 'a'.")
//     else
//         console.log("You have just pressed a different key")
// };

// function show_alert()
// {
//     alert("You just clicked me")
// }

/*
***************************************************************
LESSON 16: CSS Manipulation
**************************************************************
*/

// document.getElementById("color_button").onclick=function()
// {
//     document.getElementById("color_button").style["background-color"]="purple"//changes background-color to purple
//     document.getElementById("color_button").style.transform="translateX(100px)"//moves element to the right by 100px
// }

// document.getElementById("color_button").onclick=function()
// {
//     this.style["background-color"]="purple"
//     this.style.transform="translateX(100px)"
// }

// var button = document.getElementById("color_button")

// button.onclick=function()
// {
//     button.style["background-color"]="purple"
//     button.style.transform="translateX(100px)"
// }

// var button = document.getElementById("color_button")

// button.onclick=function()
// {
//     button.style.backgroundColor="purple"//we can do camel case instead of background-color
//     button.style.transform="translateX(100px)"
// }

/*
***************************************************************
LESSON 16: More getElement methods
**************************************************************
*/

// var elements = document.getElementsByClassName("example")

// console.log(elements)
// elements[0].innerHTML="Changed this element"
// console.log(elements[0].innerHTML)

// var ele = document.getElementsByTagName("p")
// console.log(ele)

/*
***************************************************************
LESSON 17: For and For in loops
**************************************************************
*/
//to print numbers in different lines
// for(var i = 0 ; i < 5 ; i++)
// {
//     console.log(i)
// }

// //to print numbers as strings in same line
// var s=""

// for(var i = 0 ; i < 5 ; i+=1)
// {
//     s += i + " "
// }

// console.log(s)

// //to print array 
// var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];

// for(var i = 0 ; i < students.length ; i++)
// {
//     console.log(students[i])
// }

// //to print objects
// var car = {
//     'Year': 2018,
//     'Model': 'Evoke',
//     'Manufacturer': 'Land Rover',
//     'FuelType': 'Diesel'
// }

// for(var prop in car)//we use for in loop for JS objects
// {
//     console.log(prop    ,   ":"    ,    car[prop])//we can use + or , in JS to separate two things.
// }

// //to change the css properties of elements of class
// var elements = document.getElementsByClassName("example")

// for(var i = 0 ; i < elements.length ; i++)
// {
//     elements[i].style.color = "blue"
//     elements[i].style.fontWeight = "bold"
// }

/*
***************************************************************
LESSON 18: while and do while loops
**************************************************************
*/

//while loop
// var count = 0
// console.log('Start of while loop : ')
// while(count < 10)
// {
//     console.log(count)
//     count++
// }

// //do while loop

// console.log("Start of do-while loop : ")
// var counter = 10

// do
// {
//     console.log(counter)
//     counter++
// }while(counter < 5);

/*
***************************************************************
LESSON 19: Conditionals
***************************************************************
*/

// var age = 19

// //solving problems using if else-if statements:

// if(age < 18)
//     console.log("Underage")
// else if(age > 65)
//     console.log("Overage")
// else
//     console.log("Adult")

// var grade = 7

// var absences = 4

// //solving problems using "and" operator

// if(grade >= 7 && absences <6)
// {
//     console.log("Student is approved")
// }
// else
// {
//     console.log("Student has failed")
// }

// //solving problems with "or" operator:

// if(grade > 7 || absences < 6)
// {
//     console.log("Student has failed")
// }
// else
// {
//     console.log("Student is approved")
// }

// //Let's use if else to check if the name is informed or not:

// var name = "SD"

// if(name)
// {
//     console.log("The name is : "+name)
// }
// else
// {
//     console.log("The name isn't informed")
// }

// //Let's use the ternary operator
// var age = 17

// console.log(age < 18 ? "Underage" : age >= 65 ? "Overage" : "Adult")

/*
***************************************************************
LESSON 20: Nesting Loops and Conditionals
***************************************************************
*/

// var isMember = false

// var age = 19

// if(isMember || age >=65)
// {
//     console.log("Free")
// }
// else
// {
//     if(age < 18)
//     {
//         console.log("$6.00")
//     }
//     else
//     {
//         console.log("$12.00")
//     }
// }


// var employees = [
        
//     {
//         'name': 'Charles Silva',
//         'age': 45,
//         'children': ['Andrew Silva', 'Maria Silva']
        
//     },

//     {
//         'name': 'Elizabeth Green',
//         'age': 32,
//         'children': ['Peter Green']
        
//     },

//     {
//         'name': 'George Banks',
//         'age': 39,
//         'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
        
//     }

// ];

// document.getElementById("children").innerHTML = ""  //To make the first element empty

// for(var a = 0 ; a < employees.length ; a++)
// {
//     var childrenList = employees[a].children

//     for(var b = 0 ; b < childrenList.length ; b++)
//     {
//         var child = childrenList[b]

//         document.getElementById("children").innerHTML += "<li>" + child +"</li>"
//     }
// }

/*
***************************************************************
LESSON 21: Variable Scope
***************************************************************
*/
// var personsName = "John"//global variable 

// function create_name()
// {
//     var personsName = "Mary"    //local scope which overwrites the global variable
//     console.log(personsName)
// }

// create_name()
// console.log(personsName)    //will throw error if no global variable present

// if(true)
// {
//     var personsName = "Shawn" // this is inside an if statement so it isn't a local scope
//     console.log(personsName)
// }

// console.log(personsName)//will print Shawn because the personsName inside the if statement is Shawn

// for(var a = 0 ; a < 3 ; a++)
// {
//     console.log("Parent ",a)
//     for(var a = 0 ; a < 3 ;a++)
//     {
//         console.log("Child ",a)
//     }
// }//output:
//Parent  0
//Child  0
//Child  1
//Child  2

//if we use let keyword then there won't be this problem
// for(var a = 0 ; a < 3 ; a++)
// {
//     console.log("Parent ",a)
//     for(let a = 0 ; a < 3 ;a++)
//     {
//         console.log("Child ",a)
//     }
// }//output:
//Parent  0
//Child  0
//Child  1
//Child  2
//Parent  1
//Child  0
//Child  1
//Child  2
//Parent  2
//Child  0
//Child  1
//Child  2

// for(var a = 0 ; a < 3 ; a++)
// {
//     console.log("Parent ",a)
//     for(let a = 0 ; a < 3 ;a++)
//     {
//         console.log("Child ",a)
//     }
// }//output is same as just the one above this

//below shows error because let is used and we are using var later
// for(let a = 0 ; a < 3 ; a++)
// {
//     console.log("Parent ",a)
//     for(var a = 0 ; a < 3 ;a++)
//     {
//         console.log("Child ",a)
//     }
// }

// for(var a = 0 ; a < 3 ; a++)
// {
//     console.log("Parent ",a)
//     for(var b = 0 ; b < 3 ;b++)
//     {
//         console.log("Child ",b)
//     }
// }//we are using a different variable for the nested loop

// var name = 'Helen'//global scope

// function show_name()
// {
//     console.log(name)
// }

// show_name()//the console shows Helen

// function create_name()
// {
//     name = "Mary"
//     console.log(name)
// }

// create_name()//console will show Mary

// console.log(name)//console will show Mary because if we don't provide any variable scope like var let const then even if a variable is declared inside a function then also it is global

// var a = 0

// if(true)
// {
    
//     let a = 20

// }

// console.log()

// console.log(a)  //this will return 0 because 'a' was created as a local variable inside the block

// const PI = 3.141519

// PI = 0//won't change because PI is constant

/*
***************************************************************
LESSON 22: Exercise 3
***************************************************************
*/

//Exericise 3 done in ex3.js

/*
***************************************************************
LESSON 23: BOM
**************************************************************
*/
// var myName = "Sayak"

/*Global variables can be accessed using BOM */
// console.log(window.myName) 

// window.onmousemove = function()
// {
//     console.log("moved")
// }

// window.onmousemove = function(e)
// {
//     console.log(e.pageY)
// }

// window.onmousemove = function(e)
// {
//     if(e.pageY < 5)
//         alert("Don't miss our flash sale. Go to the the products section for exclusive discounts.")
// }

/*
***************************************************************
LESSON 23: Date and Time
**************************************************************
*/
// var getObj = new Date()

// console.log(getObj)

// console.log(getObj.getDate())
// console.log(getObj.getFullYear())
// console.log(getObj.getMonth())
// console.log(getObj.getDay())
// console.log(getObj.getHours())
// console.log(getObj.getMinutes())
// console.log(getObj.getSeconds())
// console.log(getObj.getMilliseconds())
// console.log(getObj.getTime())

// var dateObj = new Date(31536000000)
// console.log(dateObj)
// var dateObj = new Date(2022 , 9)
// console.log(dateObj)
// var dateObj = new Date(2022 , 9 , 22)
// console.log(dateObj)
// var dateObj = new Date(2022 , 9 , 22 , 10)
// console.log(dateObj)
// var dateObj = new Date(2022 , 9 , 22 , 10 , 50)
// console.log(dateObj)
// var dateObj = new Date(2022 , 9 , 22 , 10 , 50 , 23)
// console.log(dateObj)

// var dateObj2 = new Date("2022-09-22")
// console.log(dateObj2)
// var dateObj2 = new Date("09/22/2022")
// console.log(dateObj2)
// var dateObj2 = new Date("22 October 2022")
// console.log(dateObj2)

/*
***************************************************************
LESSON 24: Challenge : Calculating Date Intervals
**************************************************************
*/

/* Count the number of days between 26th March 2020 to 02nd April 2020*/
// var dateObj1 = new Date("26 March 2020")

// var dateObj2 = new Date("02 April 2020")

// document.getElementById("delivery_time").innerHTML = (Math.floor(dateObj2 - dateObj1)/86400000)

//If our company takes 10 days to deliver a product what will be the delivery date.The order date is 26th March 2020 

// var ms = dateObj1.getTime()+(10*86400000)
// console.log(ms)

// var date = new Date(ms)
// console.log(date)

/*
***************************************************************
LESSON 24: Time Methods
**************************************************************
*/
// console.log('Message 1')

// window.setTimeout(function(){
//     console.log('Message 2')
// },3000)

// document.getElementById("show-loader").onclick =function(){
//     document.getElementById("spinner-loader").style.display = "block";

//     window.setTimeout(function()
//     {
//         document.getElementById("spinner-loader").style.display = "none";
//     },5000)
// }

// var count = 0

// timeInterval = window.setInterval(function(){
//     console.log(count)
//     count++

//     if(count>=5)
//         window.clearInterval(timeInterval)
// },1000)

/*
***************************************************************
LESSON 25: Challenge : The Clock Challenge
**************************************************************
*/



// function pad_zeroes_to_beginning(number)
// {
//     if(number < 10)
//     {
//         return "0" + number.toString()
//     }
    
//     else
//     {
//         return number.toString()
//     }
// }

// window.setInterval(function()
// {   
//     var dateObj= new Date()

//     var hrs = dateObj.getHours()
//     var mins = dateObj.getMinutes()
//     var sec = dateObj.getSeconds()
    
//     // console.log(dateObj.getHours())
//     // console.log(dateObj.getMinutes())
//     // console.log(dateObj.getSeconds())
    
//     document.getElementById("hours").innerHTML = pad_zeroes_to_beginning(hrs)
//     document.getElementById("minutes").innerHTML = pad_zeroes_to_beginning(mins)
//     document.getElementById("seconds").innerHTML = pad_zeroes_to_beginning(sec)

// },1000);

/*
***************************************************************
LESSON 28: Break and Continue
**************************************************************
*/

// var num = 0

// console.log("Using break statement : ")
// while(num <= 10)
// {
//     if(num == 5)
//         break   //break statement
    
//     num++
    
//     console.log(num)
// }

// console.log("Using continue statement : ")
// num = 0
// while(num < 10)
// {
//     num++
    
//     if(num % 2 != 0)
//     continue
    
//     console.log(num)
// }

// console.log("Without using continue statement : ")
// num = 0
// while(num < 10)
// {
//     num++

//     if(num % 2 == 0)
//         console.log(num)//alternate of contiue statement used here
// }

/*
***************************************************************
LESSON 28: Forms
**************************************************************
*/
// document.getElementById("show_option").onclick = function(){
//     var selectField = document.getElementById("options")
    
//     var selectedOption = selectField.options.selectedIndex

//     var selectedValue = selectField.options[selectedOption]
//     document.getElementById("selected_option").innerHTML = selectedValue.innerHTML

//     // var selectedOption = document.getElementById("options").value
//     // console.log(selectedOption)
// }

// document.getElementById("show_radio").onclick = function()
// {
//     var radio = document.getElementsByName("gender")
    
//     var radio_selected

//     for(var i = 0 ; i < radio.length ; i++)
//     {
//         if(radio[i].checked)
//         {
//             radio_selected = radio[i]
//             document.getElementById("selected_radio").innerHTML=(radio_selected.value)
//         }
//     }
// }



// document.getElementById("show_check").onclick = function()
// {
//     var check = document.getElementsByName("interest")

//     document.getElementById("selected_check").innerHTML = "<ul>"

//     for(var i = 0 ; i < check.length ; i++)
//     {
//         if(check[i].checked)
//         {
//             document.getElementById("selected_check").innerHTML += "<li>" + check[i].value + "</li>"

//         }
//     }

//     document.getElementById("selected_check").innerHTML += "</ul>"
// }

/*
***************************************************************
LESSON 29: onclick event
**************************************************************
*/

// document.getElementById("education_level").onclick = function()
// {
//     // console.log("changed")
//     var selectField = document.getElementById("education_level")
    
//     var selectedOption = selectField.options.selectedIndex

//     var selectedValue = selectField.options[selectedOption]
//     document.getElementById("selected_level").innerHTML = selectedValue.innerHTML
// }

// var check = document.getElementsByName("meal")

// for(var a = 0 ; a < check.length ; a++)
// {
//     check[a].onchange = function()
//     { 
//         document.getElementById("selected_check").innerHTML = "<ul>"
    
    
//     for(var b = 0 ; b < check.length ; b++)
//     {
//     if(check[b].checked)
//     {
//         document.getElementById("selected_check").innerHTML += "<li>" + check[b].value + "</li>"
//     }
//     }
//     document.getElementById("selected_check").innerHTML += "</ul>"
// }
// }

/*
***************************************************************
LESSON 30: Exercise 4
**************************************************************
*/
//Done in ex4.js