function saveInput(){
  var input = document.getElementById("depositAmount").value;
  document.getElementById("depositJS").innerHTML = numberWithCommas(input)

}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function changingIDs(){
  var input = document.getElementById("depositAmount").value;
  input = input.replace(/,/g, "")
  document.getElementById("affordable_housing_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.131088));
  document.getElementById("small_business_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.08962));
  document.getElementById("health_wellbeing_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.04414));
  document.getElementById("healthy_foods_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.02274));
  document.getElementById("environmental_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.153824));
  document.getElementById("beneficial_financial_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.065544));
  document.getElementById("education_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.041468));
  document.getElementById("social_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.010968));
  document.getElementById("auto_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.10032));
  document.getElementById("arts_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.048156));
  document.getElementById("making_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.041468));
  document.getElementById("other_cost").innerHTML = "$" + numberWithCommas(Math.floor(input*.00856));
}

function Comma(Num) { //function to add commas to textboxes
        Num += '';
        Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
        Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
        x = Num.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1))
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        return x1 + x2;
    }
