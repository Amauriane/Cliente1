function salvarCookie(event) {
    event.preventDefault();

    try {
        const formulario = {
            'Nome do formulário': 'Cadastro de Cliente',
            'Nome': document.getElementById('nome').value,
            'Email': document.getElementById('email').value,
            'Telefone': document.getElementById('telefone').value,
            'ID': document.getElementById('id').value,
            'Tipo de cliente': document.getElementById('tipoCliente').value,
            'Endereço': document.getElementById('endereco').value,
            'CEP': document.getElementById('cep').value,
            'Rua': document.getElementById('rua').value,
            'Data de Nascimento': document.getElementById('dataNascimento').value,
            'Vendedor': document.getElementById('vendedor').value,
            'Limite de crédito': document.getElementById('limiteCredito').value
        }
        const errorMessages = [];
        if (!/^[a-zA-Z\s]+$/.test(nome)) {
            errorMessages.push('O nome deve conter apenas letras.');
        }

        if (!id || isNaN(id)) {
            errorMessages.push('O ID deve ser um número válido.');
        }

        if (isNaN(cep)) {
            errorMessages.push('O CEP deve conter apenas números.');
        }

        if (isNaN(limiteCredito) || limiteCredito < 0) {
            errorMessages.push('O limite de crédito deve ser um número válido e não negativo.');
        }

        if (errorMessages.length > 0) {
            throw new Error(errorMessages.join('\n'));
        }

        document.cookie = `nome=${nome}`;
        document.cookie = `id=${id}`;

        document.cookie = "formulario=" + JSON.stringify(formulario);
        alert("Cadastro realizado com sucesso!");
        document.getElementById("cadastroForm").reset();
    } catch (error) {
        console.error(error);
        alert("Erro no cadastro: " + error);
    }
}
function validateEmail(email) {
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');

    return atIndex > 0 && dotIndex > atIndex;
}
