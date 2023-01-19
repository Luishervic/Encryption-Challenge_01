
    // Obtenemos los elementos del HTML, en este caso los 3 son botones, que nos ayudan a implementar las acciones en el script 
    // de acontinuación.
    var btn_encriptar = document.getElementById("encriptador");
    var btn_desencriptar = document.getElementById("desencriptador");
    var btn_Copiar = document.getElementById("btnCopiar");

    function validarInput(event) {
            let caracter = event.data;
            let codigo = caracter.charCodeAt(0);
        
            if (codigo != 32 && (codigo < 97 || codigo > 122)) {
                // Coomprobación de caracteres. 
                alert("Sólo se permiten caracteres minúsculos sin tildes");
                let valorActual = document.getElementById("input-encriptar").value;
                valorActual = valorActual.substring(0, valorActual.length - 1);
                document.getElementById("input-encriptar").value = valorActual;
            }
    }

    function encriptar_txt() {
        // Recuperamos el texto ingresado, para despues remplazar palabras y encriptar el mensaje.
        var texto = document.getElementById("input-encriptar").value;
        texto = texto.replace(/[aeiou]/g, function(match, p1, index, string) {
            if (match === "e") return "enter";
            if (match === "i") return "imes";
            if (match === "a") return "ai";
            if (match === "o") return "ober";
            if (match === "u") return "ufat";
        }); 
        document.getElementById("salidatxt").innerHTML = texto;
        ocultarElementos();
        estadoCopiar();
    }
    
    function desencriptar_txt(params) {
        // Recuperamos el texto ingresado, para después remplazar palabras y desencriptar el mensaje.
        var texto = document.getElementById("input-encriptar").value;
        texto = texto.replace(/enter|imes|ai|ober|ufat/g, function(match, p1, index, string) {
            if (match === "enter") return "e";
            if (match === "imes") return "i";
            if (match === "ai") return "a";
            if (match === "ober") return "o";
            if (match === "ufat") return "u";
        });
        document.getElementById("salidatxt").innerHTML = texto;
        ocultarElementos();
        estadoCopiar();
    }
    
    function estadoCopiar() {
        // Si hay contenido que pueda ser copiado, hacemos el boton visible, caso contrario lo ocultamos.
        var valor = document.getElementById("input-encriptar").value;
        if (valor != 0) {
            document.getElementById("btnCopiar").style.display = "block";
        }
        else{
            document.getElementById("btnCopiar").style.display = "none";
        }
    }
    function ocultarElementos() {
        // Esta función nos ayuda para ocultar los parrafos adv_1 y adv_2.
        document.getElementById("advertencia_1").innerHTML = "";
        document.getElementById("advertencia_2").innerHTML = "";
    }

    function copiarTexto() {
        // Seleccionamos el texto del div.
        var texto = document.getElementById("salidatxt").innerText;
        // Copiamos el texto al portapapeles del sistema.
        navigator.clipboard.writeText(texto)
    }

    // Funciones que se desencadenan después de presionar algunos de los 3 botones. 
    btn_encriptar.onclick = encriptar_txt;
    btn_desencriptar.onclick = desencriptar_txt;
    btn_Copiar.onclick = copiarTexto;
