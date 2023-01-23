//ver archivo Léeme-Mejoras adjunto.
window.addEventListener('load', dibujaPostes);
contador = 1;
colores = ['tomato', 'Mediumpurple', 'SteelBlue', 'MediumSeaGreen', 'orange'];

function resolver(){
  let n = document.getElementById('numeroDiscos').value
  let posteOrigen = document.getElementById('posteOrigen').value;
  let posteDestino = document.getElementById('posteDestino').value;
  if (posteOrigen == 'Elige' || posteDestino == 'Elige'){
    alert('¡ERROR!\nPor favor, debes elegir un poste Origen y/o un poste Destino');
  } else if(posteOrigen == posteDestino){
    alert('¡ERROR!\nLos postes Origen y Destino no son válidos porque no pueden coincidir');
  } else{
      contador = 1;
      dibujaDiscosDestino();
      determinarPosteAuxiliar(posteOrigen, posteDestino);
      hanoi(n, posteOrigen, posteAuxiliar, posteDestino);
      cambiarFoto();
  }

}

//Función que resetea toda la aplicación al pulsar el botón RESET, 
//devolviendo a los valores inciales y limpiando el canvas y el listado de movimientos
function limpiar(){
  document.getElementById('numeroDiscos').value = "3";
  document.getElementById('posteOrigen').value = "Elige";
  document.getElementById('posteDestino').value = "Elige";
  document.getElementById('mov').innerHTML = "";
  borraDiscos();
  dibujaPostes();
  reiniciarFoto();
}

//Funcion que limpia los movimientos de los discos al resolver el puzzle
function limpiarMovimientos(){
  if ((posteOrigen == 'Elige' || posteDestino == 'Elige') || (posteOrigen == posteDestino)){
    document.getElementById('mov').innerHTML = "";
  }
}

//Función recursiva que resuelve el puzzle y muestra los movimientos en la aplicación
function hanoi(n, posteOrigen, posteAuxiliar, posteDestino){
  if(n == 1){
    document.getElementById("mov").innerHTML += contador + " -  Mueve el disco desde "+ posteOrigen.bold()+ " hasta " + posteDestino.bold() + '<br>';
      contador++;
  }
  else{
    hanoi(n-1, posteOrigen, posteDestino, posteAuxiliar);
    document.getElementById("mov").innerHTML += contador + " - Mueve el disco desde "+ posteOrigen.bold() + " hasta " + posteDestino.bold() + '<br>';
      contador++;
      hanoi(n-1, posteAuxiliar, posteOrigen, posteDestino);
  }

}
//Función que determina el poste auxiliar
function determinarPosteAuxiliar(posteOrigen, posteDestino){
  if(posteOrigen != 'A' && posteDestino != 'A'){
        posteAuxiliar = 'A';
  } else if (posteOrigen != 'B' && posteDestino != 'B'){
        posteAuxiliar = 'B';
    } else {
      posteAuxiliar = 'C';
    } 
  return posteAuxiliar;
}

//Funcion que dibuja el canvas con los postes vacíos
//Los postes tienen terminación en curva para practicar ;)
function dibujaPostes(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let poste = canvas.getContext('2d');
    let letraA = canvas.getContext('2d');
    let letraB = canvas.getContext('2d');
    let letraC = canvas.getContext('2d');
    poste.fillStyle = 'silver';
    poste.fillRect(100,250,20,-200);
    poste.arc(110,50,10,0,Math.PI,true);
    poste.moveTo(50,50);
    poste.fill();
    poste.fillRect(250,250,20,-200);
    poste.arc(260,50,10,0,Math.PI,true);
    poste.moveTo(50,50);
    poste.fill();
    poste.fillRect(400,250,20,-200);
    poste.arc(410,50,10,0,Math.PI,true);
    poste.moveTo(50,50);
    poste.fill();
    poste.fillStyle = 'Wheat';
    poste.fillRect(0,230,550,20);
    letraA.fillStyle = 'black';
    letraA.font = '30px Arial';
    letraB.font = '30px Arial';
    letraC.font = '30px Arial';
    letraA.fillText('A', 100, 30);
    letraB.fillText('B', 250, 30);
    letraC.fillText('C', 400, 30);
  }
}
//Función que dibuja un rectángulo con el mismo fondo que nuestro área de trabajo para "limpiar" los discos
function borraDiscos(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let borrado = canvas.getContext('2d');
    borrado.fillStyle = 'lavender';
    borrado.fillRect(0, 0, 500, 250);
  }
}

//Las siguientes funciones dibujan los discos para el origen y para el destino, por colores
function dibujaRojoOrigen(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let rojo = canvas.getContext('2d');
    rojo.fillStyle = colores[0];
    let posteOrigen = document.getElementById('posteOrigen').value;
    switch(posteOrigen){
      case 'A':
        rojo.fillRect(50, 230, 120, -30);
        break;
      case 'B':
        rojo.fillRect(200, 230, 120, -30);
        break;
      case 'C':
        rojo.fillRect(350, 230, 120, -30);
        break;
    }
  }
}

function dibujaVioletaOrigen(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let violeta = canvas.getContext('2d');
    violeta.fillStyle = colores[1];
    let posteOrigen = document.getElementById('posteOrigen').value;
    switch(posteOrigen){
      case 'A':
        violeta.fillRect(60, 200, 100, -30);
        break;
      case 'B':
        violeta.fillRect(210, 200, 100, -30);
        break;
      case 'C':
        violeta.fillRect(360, 200, 100, -30);
        break;
    }
  }
}

function dibujaAzulOrigen(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let azul = canvas.getContext('2d');
    azul.fillStyle = colores[2];
    let posteOrigen = document.getElementById('posteOrigen').value;
    switch(posteOrigen){
      case 'A':
      azul.fillRect(70, 170, 80, -30);
      break;
    case 'B':
      azul.fillRect(220, 170, 80, -30);
      break;
    case 'C':
      azul.fillRect(370, 170, 80, -30);
      break;
    }
  }
}

function dibujaVerdeOrigen(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let verde = canvas.getContext('2d');
    verde.fillStyle = colores[3];
    posteOrigen = document.getElementById('posteOrigen').value;
    switch(posteOrigen){
      case 'A':
        verde.fillRect(80, 140, 60, -30);
        break;
      case 'B':
        verde.fillRect(230, 140, 60, -30);
        break;
      case 'C':
        verde.fillRect(380, 140, 60, -30);
        break;
    }   
  }
}

function dibujaNaranjaOrigen(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let naranja = canvas.getContext('2d');
    naranja.fillStyle = colores[4];
    let posteOrigen = document.getElementById('posteOrigen').value;
    switch(posteOrigen){
       case 'A':
        naranja.fillRect(90, 110, 40, -30);
       break;
     case 'B':
      naranja.fillRect(240, 110, 40, -30);
       break;
     case 'C':
      naranja.fillRect(390, 110, 40, -30);
       break;
    }
  }
}

function dibujaRojoDestino(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let rojo = canvas.getContext('2d');
    rojo.fillStyle = colores[0];
    let destino = document.getElementById('posteDestino').value;
    switch(destino){
      case 'A':
        rojo.fillRect(50, 230, 120, -30);
        break;
      case 'B':
        rojo.fillRect(200, 230, 120, -30);
        break;
      case 'C':
        rojo.fillRect(350, 230, 120, -30);
        break;
    }
  }
}

function dibujaVioletaDestino(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let violeta = canvas.getContext('2d');
    violeta.fillStyle = colores[1];
    let destino = document.getElementById('posteDestino').value;
    switch(destino){
      case 'A':
        violeta.fillRect(60, 200, 100, -30);
        break;
      case 'B':
        violeta.fillRect(210, 200, 100, -30);
        break;
      case 'C':
        violeta.fillRect(360, 200, 100, -30);
        break;
    }
  }
}

function dibujaAzulDestino(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let azul = canvas.getContext('2d');
    azul.fillStyle = colores[2];
    let destino = document.getElementById('posteDestino').value;
    switch(destino){
      case 'A':
      azul.fillRect(70, 170, 80, -30);
      break;
    case 'B':
      azul.fillRect(220, 170, 80, -30);
      break;
    case 'C':
      azul.fillRect(370, 170, 80, -30);
      break;
    }
  }
}

function dibujaVerdeDestino(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let verde = canvas.getContext('2d');
    verde.fillStyle = colores[3];
    let destino = document.getElementById('posteDestino').value;
    switch(destino){
      case 'A':
        verde.fillRect(80, 140, 60, -30);
        break;
      case 'B':
        verde.fillRect(230, 140, 60, -30);
        break;
      case 'C':
        verde.fillRect(380, 140, 60, -30);
        break;
    }   
  }
}

function dibujaNaranjaDestino(){
  let canvas = document.getElementById('lienzo1');
  if (canvas.getContext){
    let naranja = canvas.getContext('2d');
    naranja.fillStyle = colores[4];
    let destino = document.getElementById('posteDestino').value;
    switch(destino){
      case 'A':
        naranja.fillRect(90, 110, 40, -30);
        break;
      case 'B':
        naranja.fillRect(240, 110, 40, -30);
        break;
      case 'C':
        naranja.fillRect(390, 110, 40, -30);
        break;
    }
  }
}

//Función que dibuja los distintos discos de origen según el número de discos seleccionado
function dibujaDiscosOrigen(){
  n = document.getElementById('numeroDiscos').value;
  if(n ==='1'){
    borraDiscos();
    dibujaPostes();
    dibujaRojoOrigen();
  } else if (n ==='2'){
    borraDiscos();
    dibujaPostes();
    dibujaRojoOrigen();
    dibujaVioletaOrigen();
  }else if (n ==='3'){
    borraDiscos();
    dibujaPostes();
    dibujaRojoOrigen();
    dibujaVioletaOrigen();
    dibujaAzulOrigen();
  }else if (n ==='4'){
    borraDiscos();
    dibujaPostes();
    dibujaRojoOrigen();
    dibujaVioletaOrigen();
    dibujaAzulOrigen();
    dibujaVerdeOrigen();
  } else if(n ==='5'){
    borraDiscos();
    dibujaPostes();
    dibujaRojoOrigen();
    dibujaVioletaOrigen();
    dibujaAzulOrigen();
    dibujaVerdeOrigen();
    dibujaNaranjaOrigen();
  }
}

//Función que dibuja los distintos discos de origen según el número de discos seleccionado
function dibujaDiscosDestino(n){
  n = document.getElementById('numeroDiscos').value;
  if(n ==='1'){
    borraDiscos();
    dibujaPostes();
    dibujaRojoDestino();
  } else if (n ==='2'){
    borraDiscos();
    dibujaPostes();
    dibujaRojoDestino();
    dibujaVioletaDestino();;
  }else if (n ==='3'){
    borraDiscos();
    dibujaPostes();
    dibujaRojoDestino();
    dibujaVioletaDestino();
    dibujaAzulDestino();
  }else if (n ==='4'){
    borraDiscos();
    dibujaPostes();
    dibujaRojoDestino();
    dibujaVioletaDestino();
    dibujaAzulDestino();
    dibujaVerdeDestino();
  } else if(n ==='5'){
    borraDiscos();
    dibujaPostes();
    dibujaRojoDestino();
    dibujaVioletaDestino();
    dibujaAzulDestino();
    dibujaVerdeDestino();
    dibujaNaranjaDestino();
  }
}

//Funciones para confirmar que se ha realizado el puzzle correctamente ;)
function cambiarFoto(){
  document.getElementById('foto').src="images/img1.JPG";
}
function reiniciarFoto(){
  document.getElementById('foto').src="images/img2.JPG";
}