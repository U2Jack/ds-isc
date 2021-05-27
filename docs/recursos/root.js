var boton = document.getElementById("btn-movil");
boton.onclick = function(evento){
    evento.preventDefault();
    let elementos = document.getElementsByClassName("item-menu");
    for(let item of elementos)
    {
        if(item.style.display == "block")
        {
            item.style.display = "none"
        }
        else
        {
            item.style.display = "block"
        }
    }
}