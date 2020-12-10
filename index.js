class Cliente {
    constructor(nome, email, cpf) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
    }
}

function validaEmail(cliente) {
    if (cliente.email.indexOf("@") == -1) {
        return 'O email do cliente é inválido!'
    } else {
        return 'Email válido!'
    }
}

function validaCpf(cliente) {
    var contador = 10
    var cpfCliente = cliente.cpf
    var cpfCalc = cpfCliente.substring(0,9)
    var rs = 0
    var resto = 0

    for (var i = 0; i < 8; i++) {
        rs += cpfCalc[i] * contador
        contador--
    }

    resto = rs % 11

    if (resto < 2) {
        cpfCalc += '0'
    } else {
        cpfCalc += (11 - resto).toString
    }

    rs = 0
    contador = 11

    for (var i = 0; i <= 9; i++) {
        rs += cpfCalc[i] * contador
        contador--
    }
    resto = rs % 11

    if (resto < 2) {
        cpfCalc += '0'
    } else {
        cpfCalc += (11 - resto).toString()
    }

    if (cpfCalc == cpfCliente) {
        return 'CPF válido!'
    } else {
        return 'CPF inválido!'
    }

}

module.exports = {
    Cliente,
    validaCpf,
    validaEmail
}