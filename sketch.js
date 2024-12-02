let musica;

function preload(){
musica = loadSound("fundo.mp3");
}

function setup(){
  musica.play();
  musica.loop();
  
}

const avança = document.querySelectorAll("proximo");
avança.forEach(button =>{
  button.addEventlistener('click', function(){
const atual =
      document.queySelector(',ativo');
    const proximoPasso = 'passo-'+ this.getAttribute('data-proximo');
    atual.classList.remove('ativo');
    
    documet.getElementById(proximoPasso).classList.add('ativo');
    
  
  })
})