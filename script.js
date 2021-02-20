function compute()
{
    var principal = parseInt(document.getElementById("principal").value);
    if (principal <= 0 || isNaN(principal))
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var this_year = new Date();
    var year_future = this_year.getFullYear() + years;
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>"
                     + "at an interest rate of <mark>" + rate + " %</mark>.<br/>"
                     + "You will receive an amount of <mark>" + interest + "</mark>,<br/>"
                     + "in the year <mark>" + year_future + "</mark>";
}

function rate_change()
{
    var rate = document.getElementById("rate").value;
    var rate_display = document.getElementById("rate_display");
    rate_display.innerText = rate + " %";
}