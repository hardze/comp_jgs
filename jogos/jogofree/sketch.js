function setup() {
createCanvas(700, 400); 
somDoRio.loop();
}

function draw(){
background(imagemDaSelva); 
mostraPassaro();
mostraVilao();
movimentaVilao();
movimentaPassaro(); 
voltaPosicaoInicialDoVilao(); 
verificaColisao();
incluiPontos();
marcaPonto();
}
