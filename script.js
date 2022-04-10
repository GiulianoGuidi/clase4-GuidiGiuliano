
let pregunta;

let BoxFamiliar = 2600;
let BoxIndividual = 1500;
let BoxDulce = 1000;
let BoxRustica = 2100;

let seguir; 
let total = 0;


function bienvenida(){

    alert("¡Hola!, bienvenidx al portal de Bruto, tenemos muchos combos deliciosos para ofrecerte.")

     pregunta = prompt("¿Querés llevar un box?")

     if(pregunta === "si"){
        do {
            let box = prompt("¿Qué box llevarás hoy?");
            if (box == "familiar") {
                total += BoxFamiliar; 
            }
            else if (box == "individual") {
                total += BoxIndividual;
            }
            else if (box == "dulce") {
                total += BoxDulce;
            }
            else if (box == "rustica") {
                total += BoxRustica;
            }
            seguir = prompt("genial, el total es " + total + "  ,¿Deseás agregar otro box?");
        } while (seguir === "si");
        
        let respuesta = prompt("El total es " + total + "  ,¿con envío o retiro en tienda?");
        
        if (respuesta == "envio"){
            let dia= prompt ("seleccione el dia para decirle el horario")
            switch (dia){
                case "lunes": alert("El horario de entrega será de 9 a 12hs, muchas gracias.")
                break;
                case "martes": alert("El horario de entrega será de 14 a 18hs, muchas gracias.")
                break;
                case "miercoles": alert("El horario de entrega será de 14 a 18hs, muchas gracias.")
                break;
                case "jueves": alert("El horario de entrega será de 9 a 12hs, muchas gracias.")
                break;
                case "viernes": alert("El horario de entrega será de 14 a 18hs, muchas gracias.")
                break;
                case "sabado": alert("El horario de entrega será de 9 a 12hs, muchas gracias")
                break;
            }
            }
            else if (respuesta == "retiro"){
        
            alert("¡Muchas gracias por tu compra!, te esperamos de lunes a viernes de 9 a 20hs en Correa 4318, Saavedra, CABA")
            }
     }
     else if(pregunta === "no"){
         alert("Nos veremos la próxima, saludos!")
     }
    
    }


bienvenida()
  





