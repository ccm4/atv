function validar_senha() {
	matricula = document.getElementById("matricula").value;
	senha = document.getElementById("senha").value;
	for (var i = 0; i < functionarios.length; i++) {
		fun_aux = functionarios[i]
		if (fun_aux["matricula"] == matricula) {
			if (fun_aux["senha"] == senha) {
				alert("sucesso... seja bem vindo, " + fun_aux["nome"])
				return
			} else {
				alert("Senha incorreta!")
				return 
			}
		}
	}
	alert("Usuário não encontrado")
	return	
}

function adicionar_produto() {
	
}