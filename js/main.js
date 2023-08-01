//Write your pseduo code first! 
document.querySelector('#konvertuj').addEventListener('click', izvrsi)

function izvrsi(){
    console.log('jupi')

let T=document.querySelector('#unos').value 

T= T * 9/5 + 32

document.querySelector('#ispisivanje').innerText= T
}