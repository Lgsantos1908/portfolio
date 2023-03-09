const btnMobile = document.getElementById('btn-mobile');
const minhaIdade = document.getElementById("idade");

function toggleMenu(event) {
    if (event.type ==='touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const mesAtual = dataAtual.getMonth();

if (mesAtual < 8){
    const minhaIdade = (anoAtual-1) - 1998;
    idade.innerHTML = minhaIdade;
}else{
    const minhaIdade = anoAtual - 1998;
    idade.innerHTML = minhaIdade;
}