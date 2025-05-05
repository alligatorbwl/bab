function zweiDezimale(x){
	return Math.round( x*100)/100;
}

function formatiere_zahl_mit_runden(number, nachkommastellen) {
    // Überprüfe, ob nachkommastellen ein gültiger Wert ist
    nachkommastellen = typeof nachkommastellen !== 'undefined' ? nachkommastellen : 2;

    // Runde die Zahl auf die angegebene Anzahl von Nachkommastellen
    const gerundeterWert = Math.round(number * Math.pow(10, nachkommastellen)) / Math.pow(10, nachkommastellen);

    // Formatiere die Zahl mit Komma als Dezimaltrennzeichen und Punkt als Tausendertrennzeichen
    const formatierterString = gerundeterWert.toLocaleString('de-DE', { minimumFractionDigits: nachkommastellen, maximumFractionDigits: nachkommastellen });

    return formatierterString;
}

// = (Math.floor(Math.random() * (max +1 -min) ) + min);

// Rechnungsbetrag netto bestimmen:
let rechnungsbetrag_netto=(Math.floor(Math.random() * (900000 - 200000) ) + 200000)/100;
let rechnungsbetrag_brutto=Math.round(rechnungsbetrag_netto*1.19*100)/100;
let vorsteuer=rechnungsbetrag_brutto-rechnungsbetrag_netto;
let skontosatz =(Math.floor(Math.random() * (3 - 1) ) + 1);
let skontobetrag_netto = Math.round((rechnungsbetrag_netto/100*skontosatz)*100)/100;
let skontobetrag_brutto = Math.round((rechnungsbetrag_brutto/100*skontosatz)*100)/100;
let vorsteuerkorrektur = Math.round(((skontobetrag_brutto - skontobetrag_netto)*100))/100;
let ueberweisungsbetrag = rechnungsbetrag_brutto - skontobetrag_brutto;
let fall = 0;

let zufall_produkt;
let produkt;
let anlagenkonto;


// Lösungen: 
function loesen() {
	if(fall==1){
	var x = zweiDezimale(rechnungsbetrag_brutto-ueberweisungsbetrag);
	skontobetrag_netto = zweiDezimale(x/119*100);
	vorsteuerkorrektur = zweiDezimale(rechnungsbetrag_brutto-skontobetrag_netto-ueberweisungsbetrag);		
	//	document.getElementById("tf_verbindlichkeiten").value = "";
		document.getElementById("betriebsausstattung").innerHTML = skontobetrag_netto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_betriebsausstatt").value.replace(".", "").replace(",", ".")!=skontobetrag_netto){
			document.getElementById("betriebsausstattung").innerHTML = "<span class='fehler'>"+skontobetrag_netto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
		
		document.getElementById("vst").innerHTML = vorsteuerkorrektur.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_vst").value.replace(".", "").replace(",", ".")!=vorsteuerkorrektur){
			document.getElementById("vst").innerHTML = "<span class='fehler'>"+vorsteuerkorrektur.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	//	document.getElementById("tf_bank").value ="";
	}
	if(fall==2){
		vorsteuerkorrektur = zweiDezimale(skontobetrag_netto/100*19);	
		ueberweisungsbetrag = zweiDezimale(rechnungsbetrag_brutto-skontobetrag_netto-vorsteuerkorrektur);
	//	document.getElementById("tf_verbindlichkeiten").value = "";
	//	document.getElementById("tf_betriebsausstatt").value = "";
		document.getElementById("vst").innerHTML = vorsteuerkorrektur.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_vst").value.replace(".", "").replace(",", ".")!=vorsteuerkorrektur){
			document.getElementById("vst").innerHTML = "<span class='fehler'>"+vorsteuerkorrektur.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
		
		document.getElementById("bank").innerHTML = ueberweisungsbetrag.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_bank").value.replace(".", "").replace(",", ".")!=ueberweisungsbetrag){
			document.getElementById("bank").innerHTML = "<span class='fehler'>"+ueberweisungsbetrag.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	}
	if(fall==3){
		vorsteuerkorrektur = zweiDezimale(skontobetrag_netto/100*19);	
		rechnungsbetrag_brutto = zweiDezimale(ueberweisungsbetrag+vorsteuerkorrektur+skontobetrag_netto);
		// Verbindlichkeiten:
		document.getElementById("verb").innerHTML = rechnungsbetrag_brutto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_verbindlichkeiten").value.replace(".", "").replace(",", ".")!=rechnungsbetrag_brutto){
			document.getElementById("verb").innerHTML = "<span class='fehler'>"+rechnungsbetrag_brutto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}		
	//	document.getElementById("tf_betriebsausstatt").value = "";
		// Vorsteuer:
		document.getElementById("vst").innerHTML = vorsteuerkorrektur.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_vst").value.replace(".", "").replace(",", ".")!=vorsteuerkorrektur){
			document.getElementById("vst").innerHTML = "<span class='fehler'>"+vorsteuerkorrektur.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	//	document.getElementById("tf_bank").value ="";
	}
	if(fall==4){
		skontobetrag_netto = zweiDezimale(vorsteuerkorrektur/19*100);
		rechnungsbetrag_brutto = zweiDezimale(ueberweisungsbetrag+vorsteuerkorrektur+skontobetrag_netto);
		
		document.getElementById("verb").innerHTML = rechnungsbetrag_brutto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_verbindlichkeiten").value.replace(".", "").replace(",", ".")!=rechnungsbetrag_brutto){
			document.getElementById("verb").innerHTML = "<span class='fehler'>"+rechnungsbetrag_brutto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}	
		
		document.getElementById("betriebsausstattung").innerHTML = skontobetrag_netto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_betriebsausstatt").value.replace(".", "").replace(",", ".")!=skontobetrag_netto){
			document.getElementById("betriebsausstattung").innerHTML = "<span class='fehler'>"+skontobetrag_netto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	//	document.getElementById("tf_vst").value = "";
	//	document.getElementById("tf_bank").value ="";
	}
	if(fall==5){
		skontobetrag_netto = zweiDezimale(vorsteuerkorrektur/19*100);
		ueberweisungsbetrag = zweiDezimale(rechnungsbetrag_brutto-vorsteuerkorrektur-skontobetrag_netto);	
	//	document.getElementById("tf_verbindlichkeiten").value = "";
		document.getElementById("betriebsausstattung").innerHTML = skontobetrag_netto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_betriebsausstatt").value.replace(".", "").replace(",", ".")!=skontobetrag_netto){
			document.getElementById("betriebsausstattung").innerHTML = "<span class='fehler'>"+skontobetrag_netto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	//	document.getElementById("tf_vst").value = "";
		document.getElementById("bank").innerHTML = ueberweisungsbetrag.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_bank").value.replace(".", "").replace(",", ".")!=ueberweisungsbetrag){
			document.getElementById("bank").innerHTML = "<span class='fehler'>"+ueberweisungsbetrag.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}	
	}
}		

function gleicheAufgabe() {
	fall=fall-1;
	neueAufgabe();
}


function neueAufgabe() {
	
	zufall_produkt = (Math.floor(Math.random() * (5 - 1) ) + 1);
	if( zufall_produkt == 1 ){
		produkt = "einen Firmenwagen";
		anlagenkonto = "0840 Fuhrpark";
	}
	if( zufall_produkt == 2 ){
		produkt = "eine Maschine";
		anlagenkonto = "0710 Maschine";
	}
	if( zufall_produkt == 3 ){
		produkt = "eine Werkbank";
		anlagenkonto = "0850 Betriebsausstattung";
	}
	if( zufall_produkt == 4 ){
		produkt = "einen Schreibtisch";
		anlagenkonto = "0870 Gesch&auml;ftsausstattung";
	}
	
	
// Rechnungsbetrag netto bestimmen:
rechnungsbetrag_netto=(Math.floor(Math.random() * (900000 - 200000) ) + 200000)/100;
rechnungsbetrag_brutto=Math.round(rechnungsbetrag_netto*1.19*100)/100;
vorsteuer=rechnungsbetrag_brutto-rechnungsbetrag_netto;
skontosatz =(Math.floor(Math.random() * (3 - 1) ) + 1);
skontobetrag_netto = Math.round((rechnungsbetrag_netto/100*skontosatz)*100)/100;
skontobetrag_brutto = Math.round((rechnungsbetrag_brutto/100*skontosatz)*100)/100;
vorsteuerkorrektur = Math.round(((skontobetrag_brutto - skontobetrag_netto)*100))/100;
ueberweisungsbetrag = rechnungsbetrag_brutto - skontobetrag_brutto;

// ANTEIGEN:
fall=fall+1;
if(fall>5){
	fall=1;
}
document.getElementById("fall").innerHTML = "Fall "+fall+": ";	
document.getElementById("tf_verbindlichkeiten").value = rechnungsbetrag_brutto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
document.getElementById("tf_betriebsausstatt").value = skontobetrag_netto.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
document.getElementById("tf_vst").value = vorsteuerkorrektur.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
document.getElementById("tf_bank").value = ueberweisungsbetrag.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );

if(fall==1){
//	document.getElementById("tf_verbindlichkeiten").value = "";
	document.getElementById("tf_betriebsausstatt").value = "";
	document.getElementById("tf_vst").value = "";
//	document.getElementById("tf_bank").value ="";
}
if(fall==2){
//	document.getElementById("tf_verbindlichkeiten").value = "";
//	document.getElementById("tf_betriebsausstatt").value = "";
	document.getElementById("tf_vst").value = "";
	document.getElementById("tf_bank").value ="";
}
if(fall==3){
	document.getElementById("tf_verbindlichkeiten").value = "";
//	document.getElementById("tf_betriebsausstatt").value = "";
	document.getElementById("tf_vst").value = "";
//	document.getElementById("tf_bank").value ="";
}
if(fall==4){
	document.getElementById("tf_verbindlichkeiten").value = "";
	document.getElementById("tf_betriebsausstatt").value = "";
//	document.getElementById("tf_vst").value = "";
//	document.getElementById("tf_bank").value ="";
}
if(fall==5){
//	document.getElementById("tf_verbindlichkeiten").value = "";
	document.getElementById("tf_betriebsausstatt").value = "";
//	document.getElementById("tf_vst").value = "";
	document.getElementById("tf_bank").value ="";
}

document.getElementById("produkt").innerHTML = produkt;	
document.getElementById("anlagenkonto").innerHTML = anlagenkonto;	

document.getElementById("tf1").value = "";
document.getElementById("tf2").value = "";
document.getElementById("tf3").value = "";
document.getElementById("tf4").value = "";

// LÖSUNGEN löschen:
document.getElementById("verb").innerHTML = "";	
document.getElementById("betriebsausstattung").innerHTML = "";	
document.getElementById("vst").innerHTML = "";
document.getElementById("bank").innerHTML = "";

//	window.location.reload();
}