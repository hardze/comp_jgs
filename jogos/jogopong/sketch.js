//Variáveis das Raquetes
let xRaqueteAliada = 5;
let yRaqueteAliada = 150;
let xRaqueteEixo = 585;
let yRaqueteEixo = 150;
let velocidadeYRaqueteEixo;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let raqueteAliadosNome = 0;
let raqueteEixoNome = 0;

//Variáveis da Bola
let xBolinha = 50;
let yBolinha = 150;
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;
let diametro = 25;
let raio = diametro / 2;

//Variáveis dos Sons
let somPonto;
let somRaquete;
let somTema;

//placar do jogo
let pontosAliado = 0;
let pontosEixo = 0;

let colisao = false;

function preload(){
somPonto = loadSound("sons/ponto.mp3");
somRaquete = loadSound("sons/raquete.mp3");
somTema = loadSound("sons/tema.mp3");
}

function setup() {
  createCanvas(600, 400);
  somTema.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaqueteAliada, yRaqueteAliada);
  mostraRaquete(xRaqueteEixo, yRaqueteEixo);
  movimentaRaqueteEixo();
  movimentaRaqueteAliada();
  marcaPonto();
  verificaColisaoRaqueteAliada(xRaqueteAliada, yRaqueteAliada);
  verificaColisaoRaquete(xRaqueteEixo, yRaqueteEixo);
  incluiPlacar();
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentaRaqueteAliada(){
  if (keyIsDown(UP_ARROW)){
    yRaqueteAliada -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteAliada += 10;
  }
}

function movimentaRaqueteEixo(){
  if (keyIsDown(87)){
    yRaqueteEixo -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteEixo += 10;
  }
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
      velocidadeYBolinha *= -1;
  }
}

function verificaColisaoRaqueteAliada(x, y) {
    if (xBolinha - raio < xRaqueteAliada + raqueteComprimento && yBolinha - raio < yRaqueteAliada + raqueteAltura && yBolinha + raio > yRaqueteAliada) {
        velocidadeXBolinha *= -1;
        somRaquete.play();
    }
}

function verificaColisaoRaquete(x, y) {
    colisao = collideRectCircle(x,y, raqueteComprimento, raqueteAltura , xBolinha, yBolinha, raio);
    if (colisao) {
        velocidadeXBolinha *= -1;
        somRaquete.play();
    }
}
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(pontosAliado, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosEixo, 470, 26);
}
function marcaPonto() {
    if (xBolinha > 585) {
        pontosAliado += 1;
        somPonto.play();
    }
    if (xBolinha < 10) {
        pontosEixo += 1;
        somPonto.play();
    }
}