//#1
function celsius_to_farenheit(celsius)
{
    var fahrenheit = (9 * celsius / 5) + 32
    return fahrenheit
}

document.getElementById("convert").onclick = function()
{
    var temperatureCelsius = document.getElementById("temp_celsius").value
    if(temperatureCelsius == "")//when empty temperature is given
        alert("Temperature informed is false")
    else
        document.getElementById("temp_fahr").innerHTML=celsius_to_farenheit(parseFloat(temperatureCelsius))
}

//#2

var currentYear = 2022

document.getElementById("anos_copa").innerHTML = ""//removes the text which isn't required

while(currentYear <= 2050)
{
    document.getElementById("anos_copa").innerHTML += '<li>' + currentYear +'</li>'
    currentYear +=4
}

//#3

document.getElementById("calculate").onclick = function()
{
  
    var grade1 = document.getElementById("grade1").value
    
    var grade2 = document.getElementById("grade2").value
    
    var absences = document.getElementById("absences").value

    var totalClasses = 20

    if(grade1 == "" || grade2 == "" || absences == "")
    {
        alert("All fields must be filled")
    }
    else
    {
        var average = (parseFloat(grade1) + parseFloat(grade2)) / 2

        var presence = (totalClasses - absences) / totalClasses //gets percentage of presence

        if(average < 6.5 && presence < 0.7)
            result = "The student has failed because of insufficient grade and too many absences"

        else if(average < 6.5)
            result = "The student has failed because of insufficient grade"
        else if(presence < 0.7)
            result = "The student has failed because of too many absences"
        else
            result = "The student has been approved"
        
        document.getElementById("result").innerHTML = result

    }
}

//#4

var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];

document.getElementById("course_sales").innerHTML = ""

var totalSales = 0

for(var i = 0 ; i < sales.length ; i++)
{

    var sale = sales[i]
    
    if(sale.refundRequested == null)
    {
        var line = "<tr>"

        line += "<td>" + sale.student + "</td>"
        
        line += "<td>" + sale.date + "</td>"
        
        line += "<td>" + sale.amount.toString() + "</td>"
        
        line += "</tr>" 

        document.getElementById("course_sales").innerHTML += line 

        totalSales += sale.amount
    }
}
      
document.getElementById("total_sold").innerHTML = totalSales