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
        xmlhttp.open("GET","listuniv.php?q=",true);
        xmlhttp.send();
    
}

function addUniversidad(str) {
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
        xmlhttp.open("GET","listuniv.php?q="+str,true);
        xmlhttp.send();
    
}