
 function validaCadastro () {
	 var nome = document.getElementById ('nome').value;
	 var email = document.getElementById ('email').value;
	 var fone = document.getElementById ('msg').value;
	// var check_fone = document.getElementByName ('telefone').checked;
	// var check_email = document.getElementByName ('email').checked;

	/* var checks = document.getElementByName (i);

	 for (var i = 0; i < checks.length; j++) {
	 	if (checks[i].checked == "") {
	 		alert ("Escolha um opção de contato!")
	 	}
	 };*/

	 if (nome == "") {
	 	alert ("Favor preencha o campo nome!");
	 	nome.value.focus();
	 	return false;
	 } else if (email == "") {
	 	alert ("Favor preencha o campo email!");
	 	email.value.focus();
	 	return false;
	 } else if (fone == "") {
	 	alert ("Favor preencha o campo telefone!");
	 //} else if (check_fone != checked && check_email!= checked) {
	 	//alert ("Favor selecione uma forma de contato!");
	 } else if (msg == "") {
	 	alert ("Favor escreva uma mensagem!")
	 	email.value.focus();
	 	return false;
	 } else {
	 	alert ("Dados enviados com sucesso!");
	 	return true;
	 }
};

$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});


/*GEOLOCALIZAÇÃO

function getLocation() {
	var x = document.getElementById("demo");

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
} else {
	x.innerHTML = "O seu navegador não suporta Geolocalização."
};

function showPosition(position) {
	x.innerHTML = "Latitude" + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; 
}
};*/