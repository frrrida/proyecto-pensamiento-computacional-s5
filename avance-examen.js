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
