var amountImagem = 0;


function selected(imagem,checkImagem){

	if(checkImagem.checked){
		console.log("imagem selecionada");
		imagem.classList.add('selected');
		imagem.innerHTML += selected;
		amountImagem++;
		amount.innerHTML = amountImagem;
	}else{
		console.log("imagem nao selecionada");
		imagem.classList.remove('selected');
		imagem.innerHTML = "";
		amountImagem--;
		amount.innerHTML = amountImagem;
	}

}

function addCards(){
	var imagens = document.getElementById("imagens");
	var amount = document.getElementById("amount");
	amount.innerHTML = 0;
	for(let i = 0; i < 12; i++){
		let card = "<div class='card'>"+
		"<div class='cardImagem'>"+
			"<label for='checkImagem"+i+"' id='labelImagem"+i+"'><img class='imagem' id='imagem"+i+"'></label>"+
			"<input type='checkbox' class='checkImagem' id='checkImagem"+i+"' onclick='selected(imagem"+i+",this);'></input>"+
		"</div>"+
		"</div>";
		imagens.innerHTML += card;
	}
}