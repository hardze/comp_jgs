let xPassaro = 85;
let yPassaro = 366;
let colisao = false;
let meusPontos = 0;


function mostraPassaro(){
image(imagemDoPassaro,xPassaro,yPassaro,30,30);
}

function movimentaPassaro(){
if (keyIsDown(UP_ARROW)){
yPassaro -=3;
}
if (keyIsDown(DOWN_ARROW)){
yPassaro +=3;  
}
if (keyIsDown(LEFT_ARROW)){
xPassaro -=3;  
}
if (keyIsDown(RIGHT_ARROW)){
xPassaro +=3;  
}
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemViloes.length; i++){
    colisao = collideRectCircle(xViloes[i], yViloes[i], comprimentoVilao, alturaVilao, xPassaro, yPassaro, 15)
    if (colisao){
      voltaPassaroParaPosicaoInicial();
      somDoGrito.play();
    if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaPassaroParaPosicaoInicial(){
  yPassaro = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yPassaro < 15){
    meusPontos += 1;
    somDaF1.play();
    voltaPassaroParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yPassaro < 366;
}