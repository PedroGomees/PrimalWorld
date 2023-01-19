
/*frase.addEventListener("mouseenter", function(){

    frase.style.color = "white";
    
    frase.innerText= "O Mundo Primitivo é uma empresa sem fins lucrativo, cujo único objetivo é incentivar a adoção de animais pré-históricos clonados e manipulados genéticamente, através de uma seleção dos mais dóceis filhotes. Nossos cientistas selecionaram as linhas mais domesticáveis de seus espécime.";
    frase.style.fontSize = "2em";
    frase.style.textAlign = "center";
    frase.style.color = '#71FBE6';
})

frase.addEventListener("mouseout", function(){
    frase.textContent = "Dinossauro para todos";
    frase.style.fontSize = "4em";
    frase.style.color = 'white';
    frase.style.scrollBehavior = 'smooth';
})*/


/*FUNÇÃO PARA ESCONDER E MOSTRAR CONTEUDO DO '' SOBRE''*/
let oldh1 = document.getElementsByClassName('oldh1');



 function hideOldImage(){
    let old = document.getElementById('old');
    let novo = document.getElementById('new');
   old.style.display = 'none';
   novo.style.display = 'flex';
   let button2 = document.getElementById('button2');
   button2.style.display = 'flex';
   
   let button1 = document.getElementById('button1');
   button1.style.display = 'none'
   let ext = document.getElementById('ext').style.display = 'none'
 }

   let button22 = document.getElementById('button2').addEventListener('click', function(){
    let old1 = document.getElementById('old');
    let novo1 = document.getElementById('new');
    let button22 = document.getElementById('button2');
    old1.style.display = 'flex';
    novo1.style.display = 'none';
    button22.style.display = 'none'
    let button11 = document.getElementById('button1').style.display = 'flex';
    let ext = document.getElementById('ext').style.display = 'flex'
    
 });
 let phide = document.getElementById('phide');

 function Hide(){
    let old1 = document.getElementById('old');
    let novo1 = document.getElementById('new');
    let button22 = document.getElementById('button2');
    old1.style.display = 'flex';
    novo1.style.display = 'none';
    button22.style.display = 'none'
    let button11 = document.getElementById('button1').style.display = 'flex';
    let ext = document.getElementById('ext').style.display = 'flex'
 }

let dino1 = document.getElementById("braquiobox");
let dino2 = document.getElementById("spinobox");
let dino3 = document.getElementById("therezinobox");
let dino4 = document.getElementById("quetzalbox");
let dino5 = document.getElementById("yutibox");
let dino6 = document.getElementById("rexbox");
let dino7 = document.getElementById("deinobox");
let dino8 = document.getElementById("argentavisbox");
let dino9 = document.getElementById("sarcobox");

let card1 = document.getElementById("braquio");
let card2 = document.getElementById("spino");
let card3 = document.getElementById("therezino");
let card4 = document.getElementById("quetzal");
let card5 = document.getElementById("yuti");
let card6 = document.getElementById("rex");
let card7 = document.getElementById("deino");
let card8 = document.getElementById("argentavis");
let card9 = document.getElementById("sarco");


card1.addEventListener('click', function(){

  dino1.style.display = 'block';
  
  dino2.style.display = 'none';
  dino3.style.display = 'none';
  dino4.style.display = 'none';
  dino5.style.display = 'none';
  dino6.style.display = 'none';
  dino7.style.display = 'none';
  dino8.style.display = 'none';
  dino9.style.display = 'none';
})

card2.addEventListener('click', function(){

  dino2.style.display = 'block';
  
  dino1.style.display = 'none';
  dino3.style.display = 'none';
  dino4.style.display = 'none';
  dino5.style.display = 'none';
  dino6.style.display = 'none';
  dino7.style.display = 'none';
  dino8.style.display = 'none';
  dino9.style.display = 'none';
})

card3.addEventListener('click', function(){

  dino3.style.display = 'block';
  
  dino1.style.display = 'none';
  dino2.style.display = 'none';
  dino4.style.display = 'none';
  dino5.style.display = 'none';
  dino6.style.display = 'none';
  dino7.style.display = 'none';
  dino8.style.display = 'none';
  dino9.style.display = 'none';
})

card4.addEventListener('click', function(){

  dino4.style.display = 'block';
  
  dino1.style.display = 'none';
  dino3.style.display = 'none';
  dino2.style.display = 'none';
  dino5.style.display = 'none';
  dino6.style.display = 'none';
  dino7.style.display = 'none';
  dino8.style.display = 'none';
  dino9.style.display = 'none';
})
card5.addEventListener('click', function(){

  dino5.style.display = 'block';
  
  dino1.style.display = 'none';
  dino3.style.display = 'none';
  dino4.style.display = 'none';
  dino2.style.display = 'none';
  dino6.style.display = 'none';
  dino7.style.display = 'none';
  dino8.style.display = 'none';
  dino9.style.display = 'none';
})
card6.addEventListener('click', function(){

  dino6.style.display = 'block';
  
  dino2.style.display = 'none';
  dino3.style.display = 'none';
  dino4.style.display = 'none';
  dino5.style.display = 'none';
  dino1.style.display = 'none';
  dino7.style.display = 'none';
  dino8.style.display = 'none';
  dino9.style.display = 'none';
})

card7.addEventListener('click', function(){

  dino7.style.display = 'block';
  
  dino2.style.display = 'none';
  dino3.style.display = 'none';
  dino4.style.display = 'none';
  dino5.style.display = 'none';
  dino6.style.display = 'none';
  dino1.style.display = 'none';
  dino8.style.display = 'none';
  dino9.style.display = 'none';
})
card8.addEventListener('click', function(){

  dino8.style.display = 'block';
  
  dino2.style.display = 'none';
  dino3.style.display = 'none';
  dino4.style.display = 'none';
  dino5.style.display = 'none';
  dino6.style.display = 'none';
  dino7.style.display = 'none';
  dino1.style.display = 'none';
  dino9.style.display = 'none';
})

card9.addEventListener('click', function(){

  dino9.style.display = 'block';
  
  dino2.style.display = 'none';
  dino3.style.display = 'none';
  dino4.style.display = 'none';
  dino5.style.display = 'none';
  dino6.style.display = 'none';
  dino7.style.display = 'none';
  dino8.style.display = 'none';
  dino1.style.display = 'none';
})

/*efeito de fade */
let txt1 = document.getElementById("abouth");
let txt2 = document.getElementById("howh");
let txt3 = document.getElementById("listh");
let seta1 = document.getElementById('seta1')
let seta2 = document.getElementById('seta2')
let seta3 = document.getElementById('seta3')
txt1.addEventListener('click', function(){
  

  let p1 = document.getElementById("NewText1").classList.toggle('fade');
seta1.style.display = 'none'
seta2.style.display = 'none'
seta3.style.display = 'none'
})

txt2.addEventListener('click', function(){
  let p2 = document.getElementById("NewText2").classList.toggle('fade');
  seta1.style.display = 'none'
seta2.style.display = 'none'
seta3.style.display = 'none'
})

txt3.addEventListener('click', function(){
  let p3 = document.getElementById("NewText3").classList.toggle('fade');
  seta1.style.display = 'none'
seta2.style.display = 'none'
seta3.style.display = 'none'
})

/*formatando a lista com tabela, esconder e aparecer*/
let AN = document.getElementById('AN');
let AS = document.getElementById('AS');
let EU = document.getElementById('EU');
let AA = document.getElementById('AA');
let AF = document.getElementById('AF');
let OC = document.getElementById('OC');
let ANBUT = document.getElementById('ANBUT').addEventListener('click', function(){
  
  AN.style.display = 'flex';
  AS.style.display = 'none';
  AF.style.display = 'none';
  AA.style.display = 'none';
  OC.style.display = 'none';
  EU.style.display = 'none';
})

let ASBUT = document.getElementById('ASBUT').addEventListener('click', function(){

  AN.style.display = 'none';
  AS.style.display = 'flex';
  AF.style.display = 'none';
  AA.style.display = 'none';
  OC.style.display = 'none';
  EU.style.display = 'none';
})


let AFBUT = document.getElementById('AFBUT').addEventListener('click', function(){

  AN.style.display = 'none';
  AS.style.display = 'none';
  AF.style.display = 'flex';
  AA.style.display = 'none';
  OC.style.display = 'none';
  EU.style.display = 'none';
})

let AABUT = document.getElementById('AABUT').addEventListener('click', function(){

  AN.style.display = 'none';
  AS.style.display = 'none';
  AF.style.display = 'none';
  AA.style.display = 'flex';
  OC.style.display = 'none';
  EU.style.display = 'none';
})

let OCBUT = document.getElementById('OCBUT').addEventListener('click', function(){

  AN.style.display = 'none';
  AS.style.display = 'none';
  AF.style.display = 'none';
  AA.style.display = 'none';
  OC.style.display = 'flex';
  EU.style.display = 'none';
})

let EUBUT = document.getElementById('EUBUT').addEventListener('click', function(){

  AN.style.display = 'none';
  AS.style.display = 'none';
  AF.style.display = 'none';
  AA.style.display = 'none';
  OC.style.display = 'none';
  EU.style.display = 'flex';
})
