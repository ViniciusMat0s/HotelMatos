function enviarMensagem(event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5551994025068"

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url);

    window.open(url, "_blank")
}

window.onload = function(){
	document.querySelector(".menuMobile").addEventListener("click", function(){
		if(document.querySelector(".menu nav ul").style.display == 'flex') {
			document.querySelector(".menu nav ul").style.display = 'none';
		} else {
			document.querySelector(".menu nav ul").style.display = 'flex';
		}
	});
};