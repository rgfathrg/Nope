var country = $("#destination").text();
var code = "";

switch (country) {
    case "AUSTRALIA":
      code = "AU";
      break;
    case "FRANCE":
      code = "FR";
      break;
    case "BRAZIL":
      code = "BR";
      break;
    case "PERU":
      code = "PE";
      break;
    case "ICELAND":
      code = "IS";
      break;
    default:
      console.log("no country selected");
}

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.joinsherpa.com/v2/entry-requirements/US-" + code + "/",
    "method": "GET",
    "headers": {
      "Authorization": "Basic " + btoa("fNlhxfQ0uroxaXoCSn9F6kEwrQcAcz" + ":" + "kRiaPMhqMNFo7m05Clv9Kr3UPZ5scYh6NrBiVdN4")
    }
   }
   
   $.ajax(settings).done(function (response, res) {
    console.log(response);
    if (response.vaccination.recommended !== undefined) {
        var vacc = response.vaccination.recommended[0].type;
    }
    else {
        var vacc = "No vaccinations required";
    }

    var paragraph = `<p>
    <strong>Visa Requirements:</strong> ${response.visa[0].textual.text[0]} ${response.visa[0].textual.text[1]} ${response.visa[0].textual.text[2]}<br>
    <strong>Visa Length:</strong> ${response.visa[0].allowed_stay}<br>
    <strong>Currency Limit:</strong> ${response.currency.arrival}<br>
    <strong>Recommended Vaccinations:</strong> ${vacc}<br>
    </p>`
    $("#requirements").append(paragraph);
   });