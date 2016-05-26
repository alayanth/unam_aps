function sumar11() {
	var t1 = document.getElementById('e1j1t1').value;
	var t2 = document.getElementById('e1j2t1').value;
	var t3 = document.getElementById('e1j3t1').value;
	var total = 0;
	total = Number(t1) + Number(t2) + Number(t3);
	document.getElementById('e1tt1').innerHTML = total;

}

function sumar12() {
	var t1 = document.getElementById('e1j1t2').value;
	var t2 = document.getElementById('e1j2t2').value;
	var t3 = document.getElementById('e1j3t2').value;
	var total = 0;
	total = Number(t1) + Number(t2) + Number(t3);
	document.getElementById('e1tt2').innerHTML = total;

}

function sumar13() {
	var t1 = document.getElementById('e1j1t3').value;
	var t2 = document.getElementById('e1j2t3').value;
	var t3 = document.getElementById('e1j3t3').value;
	var total = 0;
	total = Number(t1) + Number(t2) + Number(t3);
	document.getElementById('e1tt3').innerHTML = total;

}
function sumar21() {
	var t1 = document.getElementById('e2j1t1').value;
	var t2 = document.getElementById('e2j2t1').value;
	var t3 = document.getElementById('e2j3t1').value;
	var total = 0;
	total = Number(t1) + Number(t2) + Number(t3);
	document.getElementById('e2tt1').innerHTML = total;

}

function sumar22() {
	var t1 = document.getElementById('e2j1t2').value;
	var t2 = document.getElementById('e2j2t2').value;
	var t3 = document.getElementById('e2j3t2').value;
	var total = 0;
	total = Number(t1) + Number(t2) + Number(t3);
	document.getElementById('e2tt2').innerHTML = total;

}

function sumar23() {
	var t1 = document.getElementById('e2j1t3').value;
	var t2 = document.getElementById('e2j2t3').value;
	var t3 = document.getElementById('e2j3t3').value;
	var total = 0;
	total = Number(t1) + Number(t2) + Number(t3);
	document.getElementById('e2tt3').innerHTML = total;

}


function showUniversidad() {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listaUniversidad").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/listuniv.php?q=",true);
        xmlhttp.send();
    
}

function addUniversidad() {
    var name = document.getElementById('nomUni').value;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listaUniversidad").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/adduniv.php?q="+name,true);
        xmlhttp.send();
    
}

function rmUniversidad() {
    var str = document.getElementById('idUni').value;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listaUniversidad").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/rmuniv.php?q="+str,true);
        xmlhttp.send();
    
}

function showEquipos() {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listaEquipos").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/listequipos.php?q=",true);
        xmlhttp.send();
    
}

function addEquipo() {
    var nameEquipo = document.getElementById('nomEquipo').value;
    var idUni = document.getElementById('idUni').value;
    var data = [nameEquipo,idUni];
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listaEquipos").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/addequipo.php?q="+data,true);
        xmlhttp.send();
    
}

function rmEquipo() {
    var idEquipo = document.getElementById('idEquipo').value;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listaEquipos").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/rmequipo.php?q="+idEquipo,true);
        xmlhttp.send();
    
}

function showArbitros() {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listArbitros").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/listarbitros.php?q=",true);
        xmlhttp.send();
    
}

function addArbitro() {
    var nomArbitro = document.getElementById('nomArbitro').value;
    var ApPatArbitro = document.getElementById('ApPatArbitro').value;
    var ApMatArbitro = document.getElementById('ApMatArbitro').value;
    var usuarioArbitro = document.getElementById('usuarioArbitro').value;
    var password = document.getElementById('password').value;

    var data = [nomArbitro,ApPatArbitro,ApMatArbitro,usuarioArbitro,password];
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listArbitros").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/addarbitro.php?q="+data,true);
        xmlhttp.send();
    
}

function rmArbitro() {
    var idEquipo = document.getElementById('idArbitro').value;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listArbitros").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/rmarbitro.php?q="+idEquipo,true);
        xmlhttp.send();
    
}

function showJugadores() {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listJugadores").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/listjugadores.php?q=",true);
        xmlhttp.send();
    
}

function addJugador() {
    var nomJugador = document.getElementById('nomJugador').value;
    var ApPatJugador = document.getElementById('ApPatJugador').value;
    var ApMatJugador = document.getElementById('ApMatJugador').value;
    var idEquipo = document.getElementById('idEquipo').value;
    var e = document.getElementById("tipoJugador");
    var tipo = e.options[e.selectedIndex].text;
    var data = [nomJugador,ApPatJugador,ApMatJugador,idEquipo,tipo];
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {    
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listJugadores").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/addjugador.php?q="+data,true);
        xmlhttp.send();
    
}

function rmJugador() {
	var idJugador = document.getElementById('idJugador').value;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("listJugadores").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","php/rmjugador.php?q="+idJugador,true);
        xmlhttp.send();
    
}