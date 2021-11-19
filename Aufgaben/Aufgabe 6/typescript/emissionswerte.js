/* Afrika */
var af08 = 1028;
var af18 = 1235.5;
var AfWelt = af18 / welt * 100;
var Af08Af18pr = (af18 / af08 - 1) * 100;
var Af08Af18kg = af18 - af08;
/* Süd Amerika */
var sa08 = 1132.6;
var sa18 = 1261.5;
var SaWelt = sa18 / welt * 100;
var Sa08Sa18pr = (sa18 / sa08 - 1) * 100;
var Sa08Sa18kg = sa18 - sa08;
/* Europa */
var eu08 = 4965.7;
var eu18 = 4209.3;
var EuWelt = eu18 / welt * 100;
var Eu08Eu18pr = (eu18 / eu08 - 1) * 100;
var Eu08Eu18kg = eu18 - eu08;
/* Nord Amerika */
var na08 = 6600.4;
var na18 = 6035.6;
var NaWelt = na18 / welt * 100;
var Na08Na18pr = (na18 / na08 - 1) * 100;
var Na08Na18kg = na18 - na08;
/* Asien */
var as08 = 12954.7;
var as18 = 16274.1;
var AsWelt = as18 / welt * 100;
var As08As18pr = (as18 / as08 - 1) * 100;
var As08As18kg = as18 - as08;
/* Australien */
var au08 = 1993;
var au18 = 2100.5;
var AuWelt = au18 / welt * 100;
var Au08Au18pr = (au18 / au08 - 1) * 100;
var Au08Au18kg = au18 - au08;
/* Gesamte Welt */
var welt = af18 + sa18 + eu18 + na18 + as18 + au18;

/*Berechnung der Emissionen*/
function emission(countryName, emissionen2018, emission2008) {
    document.querySelector(".countryName").innerHTML = countryName;
    document.querySelector(".countryName1").innerHTML = countryName;
    document.querySelector(".emissionen2018").innerHTML = emissionen2018.toString();
    document.querySelector(".relativeToWorld").innerHTML = Math.round(emissionen2018 / all * 100 * 100) / 100 + "%";
    document.querySelector(".growthRate").innerHTML = Math.round((emissionen2018 - emission2008) / emission2008 * 100 * 100 / 100) + "%";
    document.querySelector(".growthRateAbsolute").innerHTML = `${Math.round((emissionen2018 - emission2008) * 100) / 100}`;
    document.querySelector(".chart").style.height = `${Math.round((emissionen2018 / all * 100 * 100) / 100)}%`;
}
;
/*Funktion*/
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", function () { emission(countryEurope, europe2018, europe2008); });
    document.querySelector(".northamerica").addEventListener("click", function () { emission(countryNorthamerica, northAmerica2018, northAmerica2008); });
    document.querySelector(".southamerica").addEventListener("click", function () { emission(countrySouthamerica, southAmerica2018, southAmerica2008); });
    document.querySelector(".africa").addEventListener("click", function () { emission(countryAfrica, africa2018, africa2008); });
    document.querySelector(".asia").addEventListener("click", function () { emission(countryAsia, asia2018, asia2008); });
    document.querySelector(".australia").addEventListener("click", function () { emission(countryAustralia, africa2018, africa2008); });
});


//# sourceMappingURL=emissionswerte.js.map