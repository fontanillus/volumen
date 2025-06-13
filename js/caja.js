 function calcular() {
            let anchoCaja = parseFloat(document.getElementById("ancho").value);
            let altoCaja = parseFloat(document.getElementById("alto").value);
            let largoCaja = parseFloat(document.getElementById("largo").value);

            console.log(calcular);

            //crear objeto
            const caja = {
                ancho: anchoCaja,
                alto: altoCaja,
                largo: largoCaja,
            }

            let volumenCalculado = obtenerVolumen(caja);
            document.getElementById('volumen').innerHTML = volumenCalculado.toFixed(2);

            console.log(`El volumen de la caja es: ${volumenCalculado.toFixed(2)} cm³`);
        }

        function obtenerVolumen(medidas) {
            let volumen = medidas.alto * medidas.ancho * medidas.largo
            return volumen;


        }
