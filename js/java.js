function salvarCookie(event) {
    event.preventDefault();

    try {
        const formulario = {
            'Nome do formulário': 'Cadastro de Cliente',
            'Nome': document.getElementById('nome').value,
            'ID': document.getElementById('id').value,
            'Tipo de cliente': document.getElementById('tipoCliente').value,
            'Endereço': document.getElementById('endereco').value,
            'CEP': document.getElementById('cep').value,
            'Rua': document.getElementById('rua').value,
            'Data de Nascimento': document.getElementById('dataNascimento').value,
            'Vendedor': document.getElementById('vendedor').value,
            'Limite de crédito': document.getElementById('limiteCredito').value
        };

        document.cookie = "formulario=" + JSON.stringify(formulario);
        alert("Cadastro realizado com sucesso!");
        document.getElementById("cadastroForm").reset();
    } catch (error) {
        console.error(error);
        alert("Erro no cadastro: " + error);
    }
}