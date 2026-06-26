primer intento con dibujo del p5
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}
function draw() {
  background(250, 245, 235);
 //froma estrella
  push();
  translate(width / 2, height / 2 + 30);
  drawCrayonStar(0, 0, 90);
  drawSadFace();
  pop();

  //movimiento nube 
  let pulse = 1 + sin(frameCount * 4) * 0.08;
  let glow = map(sin(frameCount * 4), -1, 1, 40, 120);

  push();
  translate(width / 2 + 110, height / 2 - 80);

  // Halo brillante
  noStroke();
  fill(255, 255, 180, glow);
  ellipse(0, 0, 140 * pulse, 90 * pulse);

  // Nube
  scale(pulse);
  drawCrayonCloud(0, 0);

  // Destellos
  drawSparkles();

  pop();
}
// estrella crayon style 
function drawCrayonStar(x, y, r) {
  push();
  translate(x, y);

  for (let k = 0; k < 22; k++) {
    stroke(240, 190, 40, 35);
    strokeWeight(random(2, 4));
    fill(255, 220, 70, 12);

    beginShape();

    for (let i = 0; i < 10; i++) {
      let angle = i * 36 - 90;
      let radius = i % 2 === 0 ? r : r * 0.45;

      let px = cos(angle) * radius + random(-2, 2);
      let py = sin(angle) * radius + random(-2, 2);

      vertex(px, py);
    }

    endShape(CLOSE); 
  }

  pop( );
}
// cara esttrella y bezier tex 
function drawSadFace() {
// Ojos
  noStroke();
  fill(40);
 ellipse(-20, -5, 7, 10);
  ellipse(20, -5, 7, 10);
  // Boca triste
  noFill();
  stroke(40);
  strokeWeight(3);
  arc(0, 28, 24, 14, 180, 360);
// Mejillas
  noStroke();
  fill(255, 170, 170, 80);
  ellipse(-30, 12, 12);
 // Lágrima
  fill(120, 190, 255);
// el vertex es para puntos y lineas rectas 
  beginShape();
  vertex(26, 8);
  
  //aprendi que el bezier hace ue la figur este redondeada(figura nuebe )
  bezierVertex(
    33, 18,
    33, 28,
    26, 35
  );

 bezierVertex(
    19, 28,
    19, 18,
    26, 8
  );

  endShape(CLOSE);
}
//nube estilo crayon, cambiarr 
function drawCrayonCloud(x, y) {
  push();
  translate(x, y);

  for (let i = 0; i < 15; i++) {
fill(173, 216, 255);
stroke(120, 180, 255);
    //stroke(100, 170, 240);
    //strokeWeight(random(2, 4));
    //fill(190, 255, 255);

    beginShape();

    vertex(-40 + random(-2, 2), 10 + random(-2, 2));

    bezierVertex(
      -65 + random(-2, 2),
      -25 + random(-2, 2),
      -15 + random(-2, 2),
      -45 + random(-2, 2),
      0 + random(-2, 2),
      -20 + random(-2, 2)
    );

    bezierVertex(
      10 + random(-2, 2),
      -50 + random(-2, 2),
      65 + random(-2, 2),
      -30 + random(-2, 2),
      55 + random(-2, 2),
      5 + random(-2, 2)
    );

    bezierVertex(
      60 + random(-2, 2),
      25 + random(-2, 2),
      -10 + random(-2, 2),
      28 + random(-2, 2),
      -40 + random(-2, 2),
      10 + random(-2, 2)
    );

    endShape(CLOSE);
  }
pop( );
}
function drawSparkles() {

  let t = frameCount * 5;

  let stars = [
    [-65, -30],
    [65, -20],
    [0, -55]
  ];

  stroke(255, 220, 80);
  strokeWeight(3);

  
//consultarrr
  for (let s of stars) {

    push();
    translate(s[0], s[1]);
    rotate(t);

    line(-7, 0, 7, 0);
    line(0, -7, 0, 7);

    pop();
  }
}

function drawPaperTexture() {

  stroke(230, 225, 215, 25);

  for (let i = 0; i < 100; i++) {

    let x = (i * 47) % width;
   let y = (i * 73) % height;

   point(x, y);

      }
  }

segunnndo intento dibujar en affinity y colocar las imageness
let estrella;
let nube
let contorno

function preload() {
  estrella = loadImage("estrella1.png");
  nube = loadImage("nube1.png");
  contornonube= loadImage("contornonube.png")
}

function setup() {
  createCanvas(900, 900);

}

function draw() {
   image(estrella, 0, 0, width, height); 
  image(nube, 0, 0, width, height);
  image(contornonube, 0, 0, width, height);
  
}
funciona mejorrr y mas facil con imageness

OFICIALLLL?????, sin textos detrasss

let estrella1;
let estrella2;
let estrella3;
let estrellatriste;

let nube1;
let nube2;
let contornonube;

let parejita;
let parejatriste;

let corazon;
let corazones;
let corazonroto;

let curita;
let lagrimas;
let curitaPegada = false;
let transparenciaPensamiento = 255;
let transparenciaLagrimas = 255;
let offsetX = 0;
let offsetY = 0;



//variables de lo que queremos que pase en cada escena
let escena = 1;

let brilloNube = 0;

let tamanoNube = 900;

let crecerNube = false;

//para la 2 el latido del corazon
let latido = 0;

//para la3 el tamaño de la nube
let tamanoNube2 = 1800;

//en la4 en movimiento de las lagrimas para simular quellora
let moverLagrimas = 0;

//en la escena5 movimeinto para la curita para llamar a que la muevan
let curitaX = 650;
let curitaY = 430;

let moverCurita = true;

let arrastrando = false;

let tiempoFinal = 0;

//el preload para agregar todos los png al sketch
function preload(){

  estrella1 = loadImage("estrella1.png");
  estrella2 = loadImage("estrella2.png");
  estrella3 = loadImage("estrella3.png");
  estrellatriste = loadImage("estrellatriste.png");

  nube1 = loadImage("nube1.png");
  nube2 = loadImage("nube2.png");
  contornonube = loadImage("contornonube.png");

  parejita = loadImage("parejita.png");
  parejatriste = loadImage("parejatriste.png");

  corazon = loadImage("corazon.png");
  corazones = loadImage("corazones.png");
  corazonroto = loadImage("corazonroto.png");

  curita = loadImage("curita.png");
  lagrimas = loadImage("lagrimas.png");

}


function setup(){

  createCanvas(900,900);

}

function draw(){

  background(255);

//comenzamos con las escenassss
  
  
  //ESCENA1
if(escena == 1){

  image(estrella1,0,0,width,height);

  brilloNube = 180 + 75 * sin(frameCount*0.08);

  tint(255,brilloNube);

  image(nube1,0,0,width,height);
  image(contornonube,0,0,width,height);

  noTint();


  if(crecerNube){

    tamanoNube = tamanoNube + 35;

    image(
      nube1,
      width/2 - tamanoNube/2,
      height/2 - tamanoNube/2,
      tamanoNube,
      tamanoNube
    );


    image(
      contornonube,
      width/2 - tamanoNube/2,
      height/2 - tamanoNube/2,
      tamanoNube,
      tamanoNube
    );


    if(tamanoNube > 1800){

      escena = 2;

    }

  }

}

//ESCENA2

if(escena == 2){

  background(203,214,233);

  image(parejita,0,0,width,height);

  image(corazones,0,0,width,height);

  latido = 12 * sin(frameCount*0.12);

 image(
    corazon,
    -latido/2,
    -latido/2,
    width + latido,
    height + latido
);

}

//ESCENA3

if(escena == 3){

  // Dibujamos primero la escena 4 debajo
  background(203,214,233);

  image(nube2,0,0,width,height);

  image(estrellatriste,0,0,width,height);

  moverLagrimas = 4 * sin(frameCount * 0.12);

  image(
    lagrimas,
    0,
    moverLagrimas,
    width,
    height
  );

  // Encima dibujamos el pensamiento

  tint(255, transparenciaPensamiento);

  background(243,244,255);

  image(parejatriste,0,0,width,height);

  noTint();

  if(transparenciaPensamiento <= 0){

      escena = 4;

  }

}

//ESCENA4

if(escena == 4){


  image(nube2,0,0,width,height);

  image(estrellatriste,0,0,width,height);

  // las lágrimas se mueven un poquito
  moverLagrimas = 4 * sin(frameCount * 0.12);

tint(255, transparenciaLagrimas);

image(
  lagrimas,
  0,
  moverLagrimas,
  width,
  height
);

noTint();


}


//ESCENA5

if(escena == 5){


  image(estrella2,0,0,width,height);

  image(corazonroto,0,0,width,height);

  //movimiento a lacurita
  if(!arrastrando && !curitaPegada){

    curitaX = 650 + 40 * sin(frameCount*0.08);

  }

 // brillo de la curita
let brillo = 180 + 75 * sin(frameCount*0.10);

if(!curitaPegada){

  tint(255, brillo);

  image(curita, curitaX, curitaY, 140, 50);

  noTint();

}

image(curita,curitaX,curitaY,140,50);

noTint();

  // si ya quedó pegada

  if(curitaPegada){

  image(curita,370,625,180,130);
    if(frameCount - tiempoFinal > 90){

      escena = 6;

    }

  }

}

//ESCENAFINALLLL

if(escena == 6){

  background(251,239,203);

  image(estrella3,0,0,width,height);

  fill(255);


}
  }

//ponemos aquiii las variables para las acciones que se van a realizar con el mouse

function mousePressed(){

  if(escena == 1){

  //lugar de ka nube
    if(mouseX > 500 &&
       mouseX < 870 &&
       mouseY > 100 &&
       mouseY < 300){

      crecerNube = true;

    }

  }

//para presionar justo donde sta elcoraon
  if(escena == 2){

    if(mouseX > 390 &&
       mouseX < 500 &&
       mouseY > 540 &&
       mouseY < 640){

      escena = 3;

    }

  }
//para agarrar la curita
  if(escena == 5){

    if(mouseX > curitaX &&
       mouseX < curitaX + 140 &&
       mouseY > curitaY &&
       mouseY < curitaY + 50){

      offsetX = mouseX - curitaX;
      offsetY = mouseY - curitaY;

      arrastrando = true;
    }

  }

}

function mouseMoved(){

  // Escena 3
  if(escena == 3){

    if(mouseX != pmouseX || mouseY != pmouseY){

      transparenciaPensamiento -= 3;

    }

  }

 // Escena 4
if(escena == 4){

  if(mouseX > 370 &&
     mouseX < 530 &&
     mouseY > 600 &&
     mouseY < 670){

    transparenciaLagrimas -= 4;

    if(transparenciaLagrimas <= 0){
     
      escena = 5;
    }

  }

}
    }


function mouseDragged(){

  if(arrastrando){

    curitaX = mouseX - offsetX;
    curitaY = mouseY - offsetY;

  }

}


function mouseReleased(){

  arrastrando = false;

  if(escena == 5){

    // Centro de la curita
    let centroX = curitaX + 70;
let centroY = curitaY + 25;


let corazonX = 470;
let corazonY = 690;


if(dist(centroX, centroY, corazonX, corazonY) < 300){

  curitaPegada = true;
  tiempoFinal = frameCount;

}

  }

}

hay problemas con el cambio de la escena 5 a la 6 porq la curita se duplica desfasada:(


  ultima correccion antes del examen 

if (escena == 3) {

  // Dibujamos primero la escena 4 debajo
  background(203,214,233);

  image(nube2, 0, 0, width, height);
  image(estrellatriste, 0, 0, width, height);

  moverLagrimas = 4 * sin(frameCount * 0.12);

  image(
    lagrimas,
    0,
    moverLagrimas,
    width,
    height
  );

  // TEXTO DE FONDO
  fill(255);
  textSize(42);
  textAlign(CENTER, CENTER);

  // Parte normal
  textStyle(NORMAL);
  text("así te veo a ti", width/2, height/2);

  // Palabra en negrita
  textStyle(BOLD);
  text("desapareces", width/2, height/2 + 50);

  // Encima dibujamos el pensamiento
  tint(255, transparenciaPensamiento);

  background(243,244,255);

  image(parejatriste, 0, 0, width, height);

  noTint();

  if (transparenciaPensamiento <= 0) {
    escena = 4;
  }

}

le agregamos texto a la parte de atras en la escena 3. 
