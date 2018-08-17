

var form = document.getElementById(form_contato);
/*O método getElementById() retorna uma referência ao 
elemento cujo ID foi informado via parâmetro, nesse caso estou capturando 
o form mas essa função foi utilizada para referenciar todos os inputs, por 
questões de performance é sempre bom cachear a referência de um elemento usando variáveis.*/

document.addEventListener ('submit', validaCadastro)

/*Nesse ponto estou atribuindo a função “validaCadastro()” para o evento “submit” do form,
 no “mundo perfeito” poderíamos usar apenas o método addEventListener() para essa finalidade, 
 mas para o I.E. 8 e seus anteriores é necessário chamar um método proprietário attachEvent() 
 que realiza a mesma função mas temos que passar como parâmetro o nome do evento seguindo a sintaxe HTML “onsubmit”
*/

function validaCadastro(evento) {
	var nome = document.getElemetById('nome');
	var email = document.getElemetById('email');
	var fone = document.getElementById('fone');
	var senha1 = document.getElementById('senha1');
	var senha2 = document.getElementById('senha2');
	var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	/*Aqui estou atribuindo uma string contendo uma expressão
	 regular para validar o formato do e-mail, essa expressão será testada com a função filtro.test(email), 
	 se passar então é válido o formato.*/
	var contErro = "" ;

	/*Validação do campo nome*/
	caixa_nome = document.querySelector('msg-nome');
	/* O método document.querySelector() retorna o primeiro elemento
	 encontrado com o mesmo nome da classe CSS que foi passada via parâmetro, 
	 eu poderia ter utilizado IDs e capturado o elemento com a função getElementById()
	 mas achei melhor diversificar um pouco. Esse método foi utilizado para capturar
	 os elementos onde serão exibidas as mensagens de erro, observem que os valores dos parâmetros
	 são iguais aos nomes de classes utilizadas nas tags <span> abaixo dos inputs. 
	 */

	if (nome.value == "") {
		caixa_nome.innerHTML = "Favor preencha o campo nome";
		caixa_nome.style.display = 'block';
		contErro += 1;
	} else {
		caixa_nome.style.display = 'none';
	}

	/*Validaçção do campo de email*/
	caixa_email = document.querySelector('msg-email');

	if (email.value == "") {
		caixa_email.innerHTML = "Favor preencha o campo email"
		caixa_email.style.display = 'block';
		contErro += 1;
	} else if (filtro.teste(email.value)) {
		caixa_email.style.display = 'none';
	} else {
		caixa_email.innerHTML = "Formato do E-mail invalido";
		caixa_email.style.display = 'block';
		contErro += 1;
	}

	/*Validaçõa do campo telefone */

	caixa_fone = document.querySelector('msg-fone');

	if (fone.value == "") {
		caixa_fone.innerHTML = "Favor preencha o campo fone";
		caixa_fone.style.display = 'block';
		contErro += 1;
	} else {
		caixa_fone.style.display = 'none';
	}

	/*Validação do campo senha*/
	caixa_senha1 = document.querySelector('msg-senha1');

	if (senha1.value == "") {
		caixa_senha1.innerHTML = "Favor preencha a Senha";
		caixa_senha1.style.display = 'block';
		contErro += 1;
	} else if (senha1.value.lenght > 6) {
		caixa_senha1.innerHTML = "Favor preencha o campo com até 6 caracteres";
		caixa_senha1.style.display = 'block';
		contErro += 1;
	} else {
		caixa_senha1.style.display = 'none';
	}

	/*Validação do campo Repita Senha*/
	caixa_senha2 = document.querySelector('msg-senha2');

	if (senha2.value == "") {
		caixa_senha2.innerHTML = "Favor repita a senha digitada acima";
		caixa_senha2.style.display = 'block';
		contErro += 1;
	} else if (senha2.value.lenght > 6) { 
		caixa_senha2.innerHTML = "Favor preencha o campo com até 6 caracteres";
		caixa_senha2.style.display = 'block';
		contErro += 1;
	} else {
		caixa_senha2.style.display = 'none';
	}

	/*Valida se a senha  é igual ao campo repita a senha */
	if (senha1.value != "" && senha2.value != "" && senha1.value != senha2.value) {
		caixa_senha2.innerHTML = "O campo Repita a Senha é diferente do campo Senha";
		caixa_senha2.style.display = 'block';
	} else {
		caixa_senha2.style.display = 'none';
	}

	if (contErro > 0) {
		evento.preventDefault();
		/*Se for detectado que o valor de um campo é inválido então incremento o valor da variável contErro, 
		ao final da função verifico se essa variável é maior que zero. Se o valor for maior significa 
		que foi encontrado um erro então temos que cancelar o comportamento padrão do form que seria 
		submeter a página para gravação, para isso chamamos o método evt.preventDefault(), 
		caso o valor da função seja zero então a submissão ocorre naturalmente.*/
	}
}

