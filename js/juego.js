function changeImg(element){
    var valor = document.getElementById("imgI");
    var men = document.getElementById("mensaje");
    var txtI = document.getElementById("txtInicial");
    if(valor.src.match("pnegro.jpg")){
        valor = "../img/pcolor.jpg";
    }else{
        valor = "../img/pnegro.jpg";
    }
    if(element.value == "v"){
        txtI.style.color = "yellow";
        valor = valor = "../img/pcolor.jpg";
        men.innerHTML = "Felicitaciones, has seleccionado la opcion correcta"
    }else{
        txtI.style.color = "red";
        men.innerHTML = "Pokémon incorrecto, la respuesta es: excadrill"
    }
    document.getElementById("imgI").src = valor;
}

function reiniciar(){
    document.getElementById("mensaje").innerHTML = "";
    document.getElementById("imgI").src = "../img/pnegro.jpg";
    document.getElementById("txtInicial").style.color = "black";

}
