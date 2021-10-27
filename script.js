const inptCartaTexto = document.getElementById('carta-texto');
const btCriarCarta =  document.getElementById('criar-carta');
const pCartaGerada = document.getElementById('carta-gerada');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const inclinate = ['skewleft', 'skewright'];


btCriarCarta.addEventListener('click', () => {
  const frase = inptCartaTexto.value;
  for (let palavra of frase.split(' ')){
    const n = Math.floor(Math.random() * 3)
    const divPalavra = document.createElement('div')
    divPalavra.innerText = palavra
    console.log(palavra)
    divPalavra.classList.add(style[n], size[n], rotate[n], inclinate[n])
    pCartaGerada.appendChild(divPalavra)
  }
})

