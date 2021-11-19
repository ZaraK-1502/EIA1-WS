/* Afrika */
var af08 : number = 1028;
var af18 : number = 1235.5;

var AfWelt : number = af18/welt*100;
var Af08Af18pr : number = (af18/af08-1)*100;
var Af08Af18kg  : number = af18-af08;

/* Süd Amerika */
var sa08 : number = 1132.6;
var sa18 : number = 1261.5;

var SaWelt : number = sa18/welt*100;
var Sa08Sa18pr : number = (sa18/sa08-1)*100;
var Sa08Sa18kg  : number = sa18-sa08;

/* Europa */

var eu08 : number = 4965.7;
var eu18 : number = 4209.3;

var EuWelt : number = eu18/welt*100;
var Eu08Eu18pr : number = (eu18/eu08-1)*100;
var Eu08Eu18kg  : number = eu18-eu08;

/* Nord Amerika */

var na08 : number = 6600.4;
var na18 : number = 6035.6;

var NaWelt : number = na18/welt*100;
var Na08Na18pr : number = (na18/na08-1)*100;
var Na08Na18kg  : number = na18-na08;

/* Australien */

var au08 : number = 1993;
var au18 : number = 2100.5;

var AuWelt : number = au18/welt*100;
var Au08Au18pr : number = (au18/au08-1)*100;
var Au08Au18kg  : number = au18-au08;

/* Asien */

var as08 : number = 12954.7;
var as18 : number = 16274.1;

var AsWelt : number = as18/welt*100;
var As08As18pr : number = (as18/as08-1)*100;
var As08As18kg  : number = as18-as08;


/* Gesamte Welt */

var welt : number = af18+sa18+eu18+na18+as18+au18;


/*Berechnung der Emissionen*/
function emission (countryName: string, emissionen2018: number, emission2008: number) {
    document.querySelector(".countryName").innerHTML = countryName;
    document.querySelector(".countryName1").innerHTML = countryName;
    document.querySelector(".emissionen2018").innerHTML = emissionen2018.toString();
    document.querySelector(".relativeToWorld").innerHTML = Math.round(emissionen2018 / all * 100 * 100) / 100 + "%"; 
    document.querySelector(".growthRate").innerHTML = Math.round((emissionen2018 - emission2008) / emission2008 * 100 * 100 / 100) + "%";
    document.querySelector(".growthRateAbsolute").innerHTML = `${Math.round((emissionen2018 - emission2008) * 100) / 100}`; 
    document.querySelector<HTMLElement>(".chart").style.height = `${Math.round((emissionen2018 / all * 100 * 100) / 100)}%`;
};

/*Funktion*/
window.addEventListener("load", function() {
    document.querySelector(".europe").addEventListener("click", function() { emission (countryEurope, europe2018, europe2008);});
    document.querySelector(".northamerica").addEventListener("click" , function() { emission(countryNorthamerica, northAmerica2018, northAmerica2008);});
    document.querySelector(".southamerica").addEventListener("click" , function() { emission(countrySouthamerica, southAmerica2018, southAmerica2008)})
    document.querySelector(".africa").addEventListener("click" , function() { emission(countryAfrica, africa2018, africa2008)})
    document.querySelector(".asia").addEventListener("click" , function() { emission(countryAsia, asia2018, asia2008)})
    document.querySelector(".australia").addEventListener("click" , function() { emission(countryAustralia, africa2018, africa2008)})
});

