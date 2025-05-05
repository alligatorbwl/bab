function zweiDezimale(x){
	return Math.round( x*100)/100;
}

function runden(number, nachkommastellen) {
    // Überprüfe, ob nachkommastellen ein gültiger Wert ist
    nachkommastellen = typeof nachkommastellen !== 'undefined' ? nachkommastellen : 2;

    // Runde die Zahl auf die angegebene Anzahl von Nachkommastellen
    const gerundeterWert = Math.round(number * Math.pow(10, nachkommastellen)) / Math.pow(10, nachkommastellen);

	return gerundeterWert;
}

// = (Math.floor(Math.random() * (max +1 -min) ) + min);

// Rechnungsbetrag netto bestimmen:
let fmgk=0;
let fl=0;
let hk_rp=0;
let hk_us=0;
let min=0;
let mehr=0;
let sekdf=0;

let betriebsstoffe=0;
let betr_schl=0;
let betr_schl1=0;
let betr_schl2=0;
let betr_schl3=0;
let betr_schl4=0;
let betr_mk=0;
let betr_fk=0;
let betr_vwk=0;
let betr_vtk=0;

let miete=0;
let miet_schl=0;
let miet_schl1=0;
let miet_schl2=0;
let miet_schl3=0;
let miet_schl4=0;
let miet_mk=0;
let miet_fk=0;
let miet_vwk=0;
let miet_vtk=0;

let strom=0;
let stro_schl=0;
let stro_schl1=0;
let stro_schl2=0;
let stro_schl3=0;
let stro_schl4=0;
let stro_mk=0;
let stro_fk=0;
let stro_vwk=0;
let stro_vtk=0;

let sozialkosten=0;
let sozk_schl=0;
let sozk_schl1=0;
let sozk_schl2=0;
let sozk_schl3=0;
let sozk_schl4=0;
let sozk_mk=0;
let sozk_fk=0;
let sozk_vwk=0;
let sozk_vtk=0;

let sum_mk=0;
let sum_fk=0;
let sum_vw=0;
let sum_vt=0;

let gw_mk=0;
let gw_fk=0;
let gw_vw=0;
let gw_vt=0;

let satz_mk=0;
let satz_fk=0;
let satz_vw=0;
let satz_vt=0;
		
let fall=0;

function neueAufgabe() {
	if(fall==6){
		fall=0;
	}
	fall++;
	document.getElementById("fall").innerHTML = "Fall "+fall+":";
	
	fm		= (Math.floor(Math.random() * (5 +1 -1) ) + 1)*10000;
	fl		= (Math.floor(Math.random() * (5 +1 -1) ) + 1)*10500;
	min		= (Math.floor(Math.random() * (9 +1 -1) ) + 1)*500;
	mehr	= (Math.floor(Math.random() * (9 +1 -1) ) + 1)*300;
	sekdf	= (Math.floor(Math.random() * (9 +1 -1) ) + 1)*50;
	
	if(fall==1){
		min=0;
		mehr=0;
		sekdf=0;
	}
	
	if(fall==2){
	//	min=0;
		mehr=0;
		sekdf=0;
	}

	if(fall==3){
		min=0;
	//	mehr=0;
		sekdf=0;
	}
	
	if(fall==4){
	//	min=0;
	//	mehr=0;
		sekdf=0;
	}
	
	if(fall==5){
		min=0;
		mehr=0;
	//	sekdf=0;
	}

	if(fall==6){
	//	min=0;
	//	mehr=0;
	//	sekdf=0;
	}	
	
	// VERTEILUNGSSCHLÜSSEL
	
	betr_schl1	= (Math.floor(Math.random() * (8 +1 -1) ) + 1);
	betr_schl2	= (Math.floor(Math.random() * (8 +1 -1) ) + 1);
	betr_schl3	= (Math.floor(Math.random() * (8 +1 -1) ) + 1);
	betr_schl4	= (Math.floor(Math.random() * (8 +1 -1) ) + 1);
	betr_schl	= betr_schl1+":"+betr_schl2+":"+betr_schl3+":"+betr_schl4;
	betr_schl_sum = betr_schl1+betr_schl2+betr_schl3+betr_schl4;
	
	miet_schl1	= (Math.floor(Math.random() * (8 +1 -1) ) + 1)*10;
	miet_schl2	= (Math.floor(Math.random() * (8 +1 -1) ) + 1)*10;
	miet_schl3	= (Math.floor(Math.random() * (8 +1 -1) ) + 1)*10;
	miet_schl4	= (Math.floor(Math.random() * (8 +1 -1) ) + 1)*10;
	miet_schl	= miet_schl1+":"+miet_schl2+":"+miet_schl3+":"+miet_schl4;
	miet_schl_sum = miet_schl1+miet_schl2+miet_schl3+miet_schl4;
	
	stro_schl1	= (Math.floor(Math.random() * (8 +1 -1) ) + 1);
	stro_schl2	= (Math.floor(Math.random() * (8 +1 -1) ) + 1)*4;
	stro_schl3	= (Math.floor(Math.random() * (8 +1 -1) ) + 1);
	stro_schl4	= (Math.floor(Math.random() * (8 +1 -1) ) + 1);
	stro_schl	= stro_schl1+":"+stro_schl2+":"+stro_schl3+":"+stro_schl4;
	stro_schl_sum = stro_schl1+stro_schl2+stro_schl3+stro_schl4;
	
	sozk_schl1	= (Math.floor(Math.random() * (8 +1 -1) ) + 1);
	sozk_schl2	= (Math.floor(Math.random() * (8 +1 -1) ) + 1);
	sozk_schl3	= (Math.floor(Math.random() * (8 +1 -1) ) + 1)*5;
	sozk_schl4	= (Math.floor(Math.random() * (8 +1 -1) ) + 1);
	sozk_schl	= sozk_schl1+":"+sozk_schl2+":"+sozk_schl3+":"+sozk_schl4;
	sozk_schl_sum = sozk_schl1+sozk_schl2+sozk_schl3+sozk_schl4;
	
	betriebsstoffe	=  betr_schl_sum * (Math.floor(Math.random() * (6 +1 -2) ) + 2)*15;
	miete 			=  miet_schl_sum * (Math.floor(Math.random() * (6 +1 -2) ) + 2)*50;
	strom 			=  stro_schl_sum * (Math.floor(Math.random() * (6 +1 -2) ) + 2)*5;
	sozialkosten 	=  sozk_schl_sum * (Math.floor(Math.random() * (6 +1 -2) ) + 2)*30;
	
	// KOSTENSTELLEN:
	
	betr_mk = betriebsstoffe * betr_schl1/betr_schl_sum;
	betr_fk = betriebsstoffe * betr_schl2/betr_schl_sum;
	betr_vwk = betriebsstoffe * betr_schl3/betr_schl_sum;
	betr_vtk = betriebsstoffe * betr_schl4/betr_schl_sum;
	betr_mk = runden(betr_mk,2);
	betr_fk = runden(betr_fk,2);
	betr_vwk = runden(betr_vwk,2);
	betr_vtk = runden(betr_vtk,2);
	
	miet_mk = miete * miet_schl1/miet_schl_sum;
	miet_fk = miete * miet_schl2/miet_schl_sum;
	miet_vwk = miete * miet_schl3/miet_schl_sum;
	miet_vtk = miete * miet_schl4/miet_schl_sum;
	miet_mk = runden(miet_mk,2);
	miet_fk = runden(miet_fk,2);
	miet_vwk = runden(miet_vwk,2);
	miet_vtk = runden(miet_vtk,2);
	
	stro_mk = strom * stro_schl1/stro_schl_sum;
	stro_fk = strom * stro_schl2/stro_schl_sum;
	stro_vwk = strom * stro_schl3/stro_schl_sum;
	stro_vtk = strom * stro_schl4/stro_schl_sum;
	stro_mk = runden(stro_mk,2);
	stro_fk = runden(stro_fk,2);
	stro_vwk = runden(stro_vwk,2);
	stro_vtk = runden(stro_vtk,2);
	
	sozk_mk = sozialkosten * sozk_schl1/sozk_schl_sum;
	sozk_fk = sozialkosten * sozk_schl2/sozk_schl_sum;
	sozk_vwk = sozialkosten * sozk_schl3/sozk_schl_sum;
	sozk_vtk = sozialkosten * sozk_schl4/sozk_schl_sum;
	sozk_mk = runden(sozk_mk,2);
	sozk_fk = runden(sozk_fk,2);
	sozk_vwk = runden(sozk_vwk,2);
	sozk_vtk = runden(sozk_vtk),2;
	
	// SUMMEN:
	
	sum_mk=betr_mk+miet_mk+stro_mk+sozk_mk;
	sum_fk=betr_fk+miet_fk+stro_fk+sozk_fk;
	sum_vw=betr_vwk+miet_vwk+stro_vwk+sozk_vwk;
	sum_vt=betr_vtk+miet_vtk+stro_vtk+sozk_vtk;
	sum_mk = runden(sum_mk,2);
	sum_fk = runden(sum_fk,2);
	sum_vw = runden(sum_vw,2);
	sum_vt = runden(sum_vt,2);
	
	// GRUNDWERTE:
	
	gw_mk = fm;
	gw_fk = fl;
	gw_vw = fm+fl+sum_fk+sum_mk+sekdf;
	gw_vt = gw_vw+min-mehr;
	gw_mk = runden(gw_mk,2);
	gw_fk = runden(gw_fk,2);
	gw_vw = runden(gw_vw,2);
	gw_vt = runden(gw_vt,2);
	
	// ZUSCHLAGSSÄTZE
	
	z_mk = sum_mk/gw_mk*100;
	z_fk = sum_fk/gw_fk*100;
	z_vw = sum_vw/gw_vw*100;
	z_vt = sum_vt/gw_vt*100;
	z_mk = runden(z_mk,2);
	z_fk = runden(z_fk,2);
	z_vw = runden(z_vw,2);
	z_vt = runden(z_vt,2);
	
	// ANZEIGE Bezugsgrößen:
	
	document.getElementById("fm").innerHTML = fm.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	document.getElementById("fl").innerHTML = fl.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	document.getElementById("min").innerHTML = min.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	document.getElementById("mehr").innerHTML = mehr.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	document.getElementById("sekdf").innerHTML = sekdf.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	// ANZEIGE BAB-Daten:
	document.getElementById("betriebsstoffe").innerHTML = betriebsstoffe.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	document.getElementById("miete").innerHTML = miete.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	document.getElementById("strom").innerHTML = strom.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	document.getElementById("sozialkosten").innerHTML = sozialkosten.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	//
	
	document.getElementById("betr_schl").innerHTML = betr_schl.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	document.getElementById("miet_schl").innerHTML = miet_schl.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	
	document.getElementById("stro_schl").innerHTML = stro_schl.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		
	document.getElementById("sozk_schl").innerHTML = sozk_schl.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	

	// KOSTENSTELLEN LÖSUNGN LÖSCHEN
	
	document.getElementById("betr_mk").innerHTML = "";
	
	document.getElementById("betr_fk").innerHTML = "";
	
	document.getElementById("betr_vwk").innerHTML = "";
	
	document.getElementById("betr_vtk").innerHTML = "";
	
	//--
	
	document.getElementById("miet_mk").innerHTML = "";
	
	document.getElementById("miet_fk").innerHTML = "";
	
	document.getElementById("miet_vwk").innerHTML = "";
	
	document.getElementById("miet_vtk").innerHTML = "";
	
	//--
	
	document.getElementById("stro_mk").innerHTML = "";
	
	document.getElementById("stro_fk").innerHTML = "";
	
	document.getElementById("stro_vwk").innerHTML = "";
	
	document.getElementById("stro_vtk").innerHTML = "";
	
	//--
	
	document.getElementById("sozk_mk").innerHTML = "";
	
	document.getElementById("sozk_fk").innerHTML = "";
	
	document.getElementById("sozk_vwk").innerHTML = "";
	
	document.getElementById("sozk_vtk").innerHTML = "";
	
	//--
	
	document.getElementById("sum_mk").innerHTML = "";
	
	document.getElementById("sum_fk").innerHTML = "";
	
	document.getElementById("sum_vw").innerHTML = "";
	
	document.getElementById("sum_vt").innerHTML = "";
	
	//--
	
	document.getElementById("gw_mk").innerHTML = "";
	
	document.getElementById("gw_fk").innerHTML = "";
	
	document.getElementById("gw_vw").innerHTML = "";
	
	document.getElementById("gw_vt").innerHTML = "";
	
	//--
	
	document.getElementById("z_mk").innerHTML = "";
	
	document.getElementById("z_fk").innerHTML = "";
	
	document.getElementById("z_vw").innerHTML = "";
	
	document.getElementById("z_vt").innerHTML = "";

// ALTE EINGABEN LÖSCHEN:
	
	document.getElementById("tf_betr_mk").value = ""; 
	
	document.getElementById("tf_betr_fk").value = "";
	
	document.getElementById("tf_betr_vwk").value = ""; 
	
	document.getElementById("tf_betr_vtk").value = ""; 
	
	//--
	
	document.getElementById("tf_miet_mk").value = ""; 
	
	document.getElementById("tf_miet_fk").value = "";  
	
	document.getElementById("tf_miet_vwk").value = ""; 
	
	document.getElementById("tf_miet_vtk").value = ""; 
	
	//--
	
	document.getElementById("tf_stro_mk").value = ""; 
	
	document.getElementById("tf_stro_fk").value = ""; 
	
	document.getElementById("tf_stro_vwk").value = ""; 
	
	document.getElementById("tf_stro_vtk").value = ""; 
	
	//--
	
	document.getElementById("tf_sozk_mk").value = "";  
	
	document.getElementById("tf_sozk_fk").value = "";
	
	document.getElementById("tf_sozk_vwk").value = ""; 
	
	document.getElementById("tf_sozk_vtk").value = "";
	
	//--
	
	document.getElementById("tf_sum_mk").value = ""; 
	
	document.getElementById("tf_sum_fk").value = "";
	
	document.getElementById("tf_sum_vw").value = ""; 
	
	document.getElementById("tf_sum_vt").value = "";
	
	//--
	
	document.getElementById("tf_gw_mk").value = ""; 
	
	document.getElementById("tf_gw_fk").value = "";
	
	document.getElementById("tf_gw_vw").value = ""; 
	
	document.getElementById("tf_gw_vt").value = ""; 
	
	//--
	
	document.getElementById("tf_z_mk").value = "";  
	
	document.getElementById("tf_z_fk").value = ""; 
	
	document.getElementById("tf_z_vw").value = ""; 
	
	document.getElementById("tf_z_vt").value = ""; 


//	window.location.reload();
}

function gleicheAufgabe() {
	fall=fall-1;
	neueAufgabe();
}

// Lösungen: 
function loesen() {
		
	// KOSTENSTELLEN 
	
	document.getElementById("betr_mk").innerHTML = betr_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
		if(document.getElementById("tf_betr_mk").value.replace(".", "").replace(",", ".")!=betr_mk){
			document.getElementById("betr_mk").innerHTML = "<span class='fehler'>"+betr_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("betr_fk").innerHTML = betr_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_betr_fk").value.replace(".", "").replace(",", ".")!=betr_fk){
			document.getElementById("betr_fk").innerHTML = "<span class='fehler'>"+betr_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("betr_vwk").innerHTML = betr_vwk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_betr_vwk").value.replace(".", "").replace(",", ".")!=betr_vwk){
			document.getElementById("betr_vwk").innerHTML = "<span class='fehler'>"+betr_vwk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("betr_vtk").innerHTML = betr_vtk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_betr_vtk").value.replace(".", "").replace(",", ".")!=betr_vtk){
			document.getElementById("betr_vtk").innerHTML = "<span class='fehler'>"+betr_vtk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	//--
	
	document.getElementById("miet_mk").innerHTML = miet_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_miet_mk").value.replace(".", "").replace(",", ".")!=miet_mk){
			document.getElementById("miet_mk").innerHTML = "<span class='fehler'>"+miet_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
		
	document.getElementById("miet_fk").innerHTML = miet_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_miet_fk").value.replace(".", "").replace(",", ".")!=miet_fk){
			document.getElementById("miet_fk").innerHTML = "<span class='fehler'>"+miet_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
		
	document.getElementById("miet_vwk").innerHTML = miet_vwk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_miet_vwk").value.replace(".", "").replace(",", ".")!=miet_vwk){
			document.getElementById("miet_vwk").innerHTML = "<span class='fehler'>"+miet_vwk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}	
	
	document.getElementById("miet_vtk").innerHTML = miet_vtk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_miet_vtk").value.replace(".", "").replace(",", ".")!=miet_vtk){
			document.getElementById("miet_vtk").innerHTML = "<span class='fehler'>"+miet_vtk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	//--
	
	document.getElementById("stro_mk").innerHTML = stro_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_stro_mk").value.replace(".", "").replace(",", ".")!=stro_mk){
			document.getElementById("stro_mk").innerHTML = "<span class='fehler'>"+stro_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("stro_fk").innerHTML = stro_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_stro_fk").value.replace(".", "").replace(",", ".")!=stro_fk){
			document.getElementById("stro_fk").innerHTML = "<span class='fehler'>"+stro_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
		
	document.getElementById("stro_vwk").innerHTML = stro_vwk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_stro_vwk").value.replace(".", "").replace(",", ".")!=stro_vwk){
			document.getElementById("stro_vwk").innerHTML = "<span class='fehler'>"+stro_vwk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
		
	document.getElementById("stro_vtk").innerHTML = stro_vtk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_stro_vtk").value.replace(".", "").replace(",", ".")!=stro_vtk){
			document.getElementById("stro_vtk").innerHTML = "<span class='fehler'>"+stro_vtk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	//--
	
	document.getElementById("sozk_mk").innerHTML = sozk_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_sozk_mk").value.replace(".", "").replace(",", ".")!=sozk_mk){
			document.getElementById("sozk_mk").innerHTML = "<span class='fehler'>"+sozk_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("sozk_fk").innerHTML = sozk_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_sozk_fk").value.replace(".", "").replace(",", ".")!=sozk_fk){
			document.getElementById("sozk_fk").innerHTML = "<span class='fehler'>"+sozk_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
		
	document.getElementById("sozk_vwk").innerHTML = sozk_vwk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_sozk_vwk").value.replace(".", "").replace(",", ".")!=sozk_vwk){
			document.getElementById("sozk_vwk").innerHTML = "<span class='fehler'>"+sozk_vwk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("sozk_vtk").innerHTML = sozk_vtk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_sozk_vtk").value.replace(".", "").replace(",", ".")!=sozk_vtk){
			document.getElementById("sozk_vtk").innerHTML = "<span class='fehler'>"+sozk_vtk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	//--
	
	document.getElementById("sum_mk").innerHTML = sum_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_sum_mk").value.replace(".", "").replace(",", ".")!=sum_mk){
			document.getElementById("sum_mk").innerHTML = "<span class='fehler'>"+sum_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("sum_fk").innerHTML = sum_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_sum_fk").value.replace(".", "").replace(",", ".")!=sum_fk){
			document.getElementById("sum_fk").innerHTML = "<span class='fehler'>"+sum_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("sum_vw").innerHTML = sum_vw.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_sum_vw").value.replace(".", "").replace(",", ".")!=sum_vw){
			document.getElementById("sum_vw").innerHTML = "<span class='fehler'>"+sum_vw.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("sum_vt").innerHTML = sum_vt.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_sum_vt").value.replace(".", "").replace(",", ".")!=sum_vt){
			document.getElementById("sum_vt").innerHTML = "<span class='fehler'>"+sum_vt.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	//--
	
	document.getElementById("gw_mk").innerHTML = gw_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_gw_mk").value.replace(".", "").replace(",", ".")!=gw_mk){
			document.getElementById("gw_mk").innerHTML = "<span class='fehler'>"+gw_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("gw_fk").innerHTML = gw_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_gw_fk").value.replace(".", "").replace(",", ".")!=gw_fk){
			document.getElementById("gw_fk").innerHTML = "<span class='fehler'>"+gw_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("gw_vw").innerHTML = gw_vw.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_gw_vw").value.replace(".", "").replace(",", ".")!=gw_vw){
			document.getElementById("gw_vw").innerHTML = "<span class='fehler'>"+gw_vw.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	document.getElementById("gw_vt").innerHTML = gw_vt.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } );
	if(document.getElementById("tf_gw_vt").value.replace(".", "").replace(",", ".")!=gw_vt){
			document.getElementById("gw_vt").innerHTML = "<span class='fehler'>"+gw_vt.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"</span>";
		}
	
	//--
	
	document.getElementById("z_mk").innerHTML = z_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"%";
	if(document.getElementById("tf_z_mk").value.replace(".", "").replace(",", ".").replace("%", "")!=z_mk){
			document.getElementById("z_mk").innerHTML = "<span class='fehler'>"+z_mk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"%</span>";
		}
	
	document.getElementById("z_fk").innerHTML = z_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"%";
	if(document.getElementById("tf_z_fk").value.replace(".", "").replace(",", ".").replace("%", "")!=z_fk){
			document.getElementById("z_fk").innerHTML = "<span class='fehler'>"+z_fk.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"%</span>";
		}
	
	document.getElementById("z_vw").innerHTML = z_vw.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"%";
	if(document.getElementById("tf_z_vw").value.replace(".", "").replace(",", ".").replace("%", "")!=z_vw){
			document.getElementById("z_vw").innerHTML = "<span class='fehler'>"+z_vw.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"%</span>";
		}
	
	document.getElementById("z_vt").innerHTML = z_vt.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"%";
	if(document.getElementById("tf_z_vt").value.replace(".", "").replace(",", ".").replace("%", "")!=z_vt){
			document.getElementById("z_vt").innerHTML = "<span class='fehler'>"+z_vt.toLocaleString( 'de-DE',{ minimumFractionDigits: 2, maximumFractionDigits: 2 } )+"%</span>";
		}	

}