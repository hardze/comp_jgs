let imagemDaSelva; 
let imagemDoPassaro; 
let imagemDoVilao; 
let imagemDoVilao2; 
let imagemDoVilao3;
let imagemDoVilao4;

//sons do jogo

let somDoRio;
let somDoGrito;
let somDaF1;

function preload(){
imagemDaSelva = loadImage("Imagens/selva.jpg");               
imagemDoPassaro = loadImage("Imagens/passaro.png"); 
imagemDoVilao = loadImage("Imagens/vilao.png");
imagemDoVilao2 = loadImage("Imagens/vilao2.png");
imagemDoVilao3 = loadImage("Imagens/vilao.png");
imagemDoVilao4 = loadImage("Imagens/vilao2.png");
imagemViloes = [imagemDoVilao, imagemDoVilao2, imagemDoVilao3, imagemDoVilao4]
somDoRio = loadSound("Musica/rio.mp3");
somDoGrito = loadSound("Musica/grito.mp3");
somDaF1 = loadSound("Musica/pontuou.mp3");
}