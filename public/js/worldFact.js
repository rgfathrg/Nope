var countries = [];
console.log($("#destination").text());
function popData() {
    for (var i = 0; i < countries.length; i++) {
        var country = countries[i].name;
        if (country.toUpperCase() === $("#destination").text()) {
            console.log("success");
            data = countries[i];
            console.log(data);
            var list = `<ul>
                        <li>Capital: ${data.capital}</li>
                        <li>Time Difference: ${data.timeDifference}</li>
                        <li>Population: ${data.population}</li>
                        <li>Ethnicities: ${data.ethnicity}</li>
                        <li>International Disputes: ${data.concerns}</li>
                        <li>Infection Risk: ${data.diseases}</li>
                        </ul>`;
            $("#worldFacts").append(list);
        }
    }
}



$.get(
    "https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/br.json"
).then(function (data) {
    var degree =
        "At this time none at sufficient levels or seriousness to report";
    var fwBourne = "N/A";
    var issue = "N/A";
    var note = "N/A";
    var vBourne = "N/A";

    if (
        JSON.parse(data)["People and Society"]["Major infectious diseases"] !==
        undefined
    ) {
        if (
            JSON.parse(data)["People and Society"]["Major infectious diseases"][
            "degree of risk"
            ] !== undefined
        ) {
            degree = JSON.parse(data)["People and Society"][
                "Major infectious diseases"
            ]["degree of risk"].text;
        }
        if (
            JSON.parse(data)["People and Society"]["Major infectious diseases"][
            "food or waterborne diseases"
            ] !== undefined
        ) {
            fwBourne = JSON.parse(data)["People and Society"][
                "Major infectious diseases"
            ]["food or waterborne diseases"].text;
        }
        if (
            JSON.parse(data)["People and Society"]["Major infectious diseases"][
            "food or waterborne diseases"
            ] !== undefined
        ) {
            vBourne = JSON.parse(data)["People and Society"][
                "Major infectious diseases"
            ]["vectorborne diseases"].text;
        }
        if (
            JSON.parse(data)["People and Society"]["Major infectious diseases"][
            "note"
            ] !== undefined
        ) {
            note = JSON.parse(data)["People and Society"][
                "Major infectious diseases"
            ]["note"].text;
        }
    }
    var countryData = {
        name: JSON.parse(data).Government["Country name"]["conventional short form"]
            .text,
        capital: JSON.parse(data).Government.Capital.name.text,
        timeDifference: JSON.parse(data).Government.Capital["time difference"].text,
        population: JSON.parse(data)["People and Society"].Population.text,
        ethnicity: JSON.parse(data)["People and Society"]["Ethnic groups"].text,
        diseases: degree,
        foodWater: fwBourne,
        issues: issue,
        note: note,
        vector: vBourne,
        concerns: JSON.parse(data)["Transnational Issues"][
            "Disputes - international"
        ].text
    };
    countries.push(countryData);
    console.log(countries);
    console.log(
        "================================================================================="
    );
});
$.get('https://raw.githubusercontent.com/factbook/factbook.json/master/africa/ke.json').then(function (data) {
    var degree = "At this time none at sufficient levels or seriousness to report";
    var fwBourne = "N/A";
    var issue = "N/A";
    var note = "N/A";
    var vBourne = "N/A"

    if (JSON.parse(data)["People and Society"]["Major infectious diseases"] !== undefined) {
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["degree of risk"] !== undefined) {
            degree = JSON.parse(data)["People and Society"]["Major infectious diseases"]["degree of risk"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"] !== undefined) {
            fwBourne = JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"] !== undefined) {
            vBourne = JSON.parse(data)["People and Society"]["Major infectious diseases"]["vectorborne diseases"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["note"] !== undefined) {
            note = JSON.parse(data)["People and Society"]["Major infectious diseases"]["note"].text;
        };
    };

    var countryData = {
        name: JSON.parse(data).Government["Country name"]["conventional short form"].text,
        capital: JSON.parse(data).Government.Capital.name.text,
        timeDifference: JSON.parse(data).Government.Capital["time difference"].text,
        population: JSON.parse(data)["People and Society"].Population.text,
        ethnicity: JSON.parse(data)["People and Society"]["Ethnic groups"].text,
        diseases: degree,
        food_water: fwBourne,
        issues: issue,
        note: note,
        vector: vBourne,
        concerns: JSON.parse(data)["Transnational Issues"]["Disputes - international"].text
    };
    countries.push(countryData);
    console.log(countries);
    console.log("=================================================================================");
});
$.get('https://raw.githubusercontent.com/factbook/factbook.json/master/south-america/pe.json').then(function (data) {
    var degree = "At this time none at sufficient levels or seriousness to report";
    var fwBourne = "N/A";
    var issue = "N/A";
    var note = "N/A";
    var vBourne = "N/A"

    if (JSON.parse(data)["People and Society"]["Major infectious diseases"] !== undefined) {
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["degree of risk"] !== undefined) {
            degree = JSON.parse(data)["People and Society"]["Major infectious diseases"]["degree of risk"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"] !== undefined) {
            fwBourne = JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"] !== undefined) {
            vBourne = JSON.parse(data)["People and Society"]["Major infectious diseases"]["vectorborne diseases"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["note"] !== undefined) {
            note = JSON.parse(data)["People and Society"]["Major infectious diseases"]["note"].text;
        };
    };

    var countryData = {
        name: JSON.parse(data).Government["Country name"]["conventional short form"].text,
        capital: JSON.parse(data).Government.Capital.name.text,
        timeDifference: JSON.parse(data).Government.Capital["time difference"].text,
        population: JSON.parse(data)["People and Society"].Population.text,
        ethnicity: JSON.parse(data)["People and Society"]["Ethnic groups"].text,
        diseases: degree,
        food_water: fwBourne,
        issues: issue,
        note: note,
        vector: vBourne,
        concerns: JSON.parse(data)["Transnational Issues"]["Disputes - international"].text
    };
    countries.push(countryData);
    console.log(countries);
    console.log("=================================================================================");
});
$.get('https://raw.githubusercontent.com/factbook/factbook.json/master/australia-oceania/as.json').then(function (data) {
    var degree = "At this time none at sufficient levels or seriousness to report";
    var fwBourne = "N/A";
    var issue = "N/A";
    var note = "N/A";
    var vBourne = "N/A"

    if (JSON.parse(data)["People and Society"]["Major infectious diseases"] !== undefined) {
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["degree of risk"] !== undefined) {
            degree = JSON.parse(data)["People and Society"]["Major infectious diseases"]["degree of risk"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"] !== undefined) {
            fwBourne = JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"] !== undefined) {
            vBourne = JSON.parse(data)["People and Society"]["Major infectious diseases"]["vectorborne diseases"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["note"] !== undefined) {
            note = JSON.parse(data)["People and Society"]["Major infectious diseases"]["note"].text;
        };
    };

    var countryData = {
        name: JSON.parse(data).Government["Country name"]["conventional short form"].text,
        capital: JSON.parse(data).Government.Capital.name.text,
        timeDifference: JSON.parse(data).Government.Capital["time difference"].text,
        population: JSON.parse(data)["People and Society"].Population.text,
        ethnicity: JSON.parse(data)["People and Society"]["Ethnic groups"].text,
        diseases: degree,
        food_water: fwBourne,
        issues: issue,
        note: note,
        vector: vBourne,
        concerns: JSON.parse(data)["Transnational Issues"]["Disputes - international"].text
    };
    countries.push(countryData);
    console.log(countries);
    console.log("=================================================================================");
});
$.get('https://raw.githubusercontent.com/factbook/factbook.json/master/europe/ic.json').then(function (data) {
    var degree = "At this time none at sufficient levels or seriousness to report";
    var fwBourne = "N/A";
    var issue = "N/A";
    var note = "N/A";
    var vBourne = "N/A"

    if (JSON.parse(data)["People and Society"]["Major infectious diseases"] !== undefined) {
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["degree of risk"] !== undefined) {
            degree = JSON.parse(data)["People and Society"]["Major infectious diseases"]["degree of risk"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"] !== undefined) {
            fwBourne = JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["food or waterborne diseases"] !== undefined) {
            vBourne = JSON.parse(data)["People and Society"]["Major infectious diseases"]["vectorborne diseases"].text;
        };
        if (JSON.parse(data)["People and Society"]["Major infectious diseases"]["note"] !== undefined) {
            note = JSON.parse(data)["People and Society"]["Major infectious diseases"]["note"].text;
        };
    };

    var countryData = {
        name: JSON.parse(data).Government["Country name"]["conventional short form"].text,
        capital: JSON.parse(data).Government.Capital.name.text,
        timeDifference: JSON.parse(data).Government.Capital["time difference"].text,
        population: JSON.parse(data)["People and Society"].Population.text,
        ethnicity: JSON.parse(data)["People and Society"]["Ethnic groups"].text,
        diseases: degree,
        food_water: fwBourne,
        issues: issue,
        note: note,
        vector: vBourne,
        concerns: JSON.parse(data)["Transnational Issues"]["Disputes - international"].text
    };
    countries.push(countryData);
    console.log(countries);
    console.log("=================================================================================");
    popData();
});



