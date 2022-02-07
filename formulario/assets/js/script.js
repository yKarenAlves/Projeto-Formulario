const botao = document.getElementById('btn')
const campoTel = document.getElementById('formTelefone')

const regex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

function validaTel(telefone) {
    const ok = regex.exec(telefone.value)
     
    if (!ok) {
        alert('Por favor, insira um número de telefone válido!')
    }
}

campoTel.addEventListener('blur', (event) => {
    event.preventDefault()
    validaTel(campoTel)
})

botao.addEventListener('click', () => {
    alert('Formulário enviado com sucesso!')
    
})


