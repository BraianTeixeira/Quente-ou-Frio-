function setup() {
  createCanvas(400, 400);
  x = random (400);
  x = int(x);
  y = random (400);
  y = int(y);
  let distanciaX;
  let distanciaY;
  let distancia;
}

function draw() {
  fill('white');
  background('black');
  x = x + random(-5, 5);
  y = y + random(-5, 5);
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);

  distancia = dist(mouseX, mouseY, x, y);
  //circle(x, y, 10);
  circle(mouseX, mouseY, distancia);

  if(distancia < 10){
  textSize(40);
  fill('white');
  text('Encontrou!' , 110, 210);
  noLoop();
}

}
