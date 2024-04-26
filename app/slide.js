const img = document.querySelectorAll(".img-desktop");
let radio = document.querySelector('.manual-btn');
let cont = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg (){
    cont++

    if(cont > img.length){
        cont = 1;
    }

    document.getElementById('radio'+cont).checked = true;
}

