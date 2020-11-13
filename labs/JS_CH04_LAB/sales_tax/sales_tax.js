var $ = function(id)
{
  return document.getElementById(id);
}

var processEntries = function()
{
  var inpSubTotal = parseFloat($("subtotal").value);
  var inpTaxRate = parseFloat($("tax_rate").value);
  if (inpSubTotal <= 0 || subtotal > 10000)
  {
    $("subTotalsMessage").innerHTML = "Subtotal must be > 0 and < 10000";
  }

  if (inpTaxRate <= 0 || inpTaxRate > 12)
  {
    $("taxRateMsg").innerHTML = "Tax rate must be > 0 and < 12";
  }

  var calTax = inpSubTotal * (inpTaxRate / 100);
  calTax = parseFloat(calTax.toFixed(2));
  var totAmt = inpSubTotal + calTax;

  $("sales_tax").value = calTax;

  $("total").value = totAmt.toFixed(2);
}

var clear_click = function()
{
  $("subtotal").value = "";
  $("tax_rate").value = "";
  $("total").value = "";
  $("sales_tax").value = "";
}

function clearSubTotal()
{
  $("subtotal").value = "";
}

function clearTaxRate()
{
  $("tax_rate").value = "";
}

window.onload = function()
{
  $("calculate").onclick = processEntries;
}