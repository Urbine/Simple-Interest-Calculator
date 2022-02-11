function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    // Lesser than or equal to zero for validation.
    // I used an else clause because we cannot show the
    // message if there is no value that we can process. 
    // It also cleans the current result text when
    // we enter a invalid value. 
    if (principal <= 0)
    {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
        document.getElementById("principal").value = "";
        document.getElementById("result").innerText = "\n\nPlease enter a valid value!";
        
        
    } else {
    // This is String Interpolation in JavaScript with the innerHTML property 
    // to create a new paragraph element and inject the HTML markup
    // with our "interpolated" variables. The mark tag makes the highlighting.
     
     var new_para = document.createElement("p");
     new_para.innerHTML = `<p>If you deposit <mark>$${principal}</mark>,<br>at an interest rate of <mark>${rate}%</mark>.<br>You will receive an amount of <mark>$${interest}</mark>,<br>in the year <mark>${year}</mark></p>`;

     // Everytime that our function is called the result 
     // span tag is cleaned and this also prevents
     // the appendChild() method from stacking <p> tags
     // on top of the previous one. This effect looks more
     // dynamic. I like it. 
     document.getElementById("result").innerHTML = "";
     document.getElementById("result").appendChild(new_para);

    }
    
 }

function updateRate()
{
    // Added a % sign after the rate. It looks good.
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}
