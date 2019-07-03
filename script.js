var com = document.getElementById("datos");
com.addEventListener("click", generar);
//<input type="button" value="compania" id="datos">

function generar ()
{ 
var indice = document.for.compania.selectedIndex
var mac = prompt("Introduce la Direccion MAC");
var essid = prompt("Escribe el nombre de la red");
var mac_separacion = mac.split(":");

    if (indice == 0 || indice == 2)
    { 
        var essid_separacion = essid.split("-");
        var essid_final = essid_separacion[essid_separacion.length -1];
        var mac_pares = mac_separacion[3] + mac_separacion[4];
        var contraseña = mac_pares + essid_final;
    }
    else if (indice == 1){
        var essid_separacion = essid.split("Ubee")
        var essid_final = essid_separacion[1];
        var mac_pares = mac_separacion[1] + mac_separacion [2] + mac_separacion[3];
        var contraseña = mac_pares + essid_final;
    }
    else if (indice == 3 ){
        var essid_separacion = essid.split("-");
        var essid_final = essid_separacion[essid_separacion.length -1];
        var mac_pares = mac_separacion[2];
        var contraseña = "03" + mac_pares + essid_final;
    }
     alert(contraseña.toUpperCase());
    }
   
//9a:39:3c:c5:55:c4 + ;   
