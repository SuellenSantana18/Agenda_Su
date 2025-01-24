const form = document.getElementById('form-atividade');
const btnLimpar = document.getElementById('btn-limpar'); 
const inputClick = document.getElementById('numero-contato');


$(document).ready(function() {
    $('#numero-contato').mask('(00)00000-0000');
});




form.addEventListener('submit' , function(e) { //remove o comportamendo de recarregar a tela (e) evento
    e.preventDefault();


    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

        
    //acrescentando mais uma linha e nao fazer uma em cima da outra
    let linhas = '';
    //add as linhas
    let linha = '<tr>';

    linha += `<td class="clicavel">${inputNome.value}</td>`; // Adiciona o nome
    linha += `<td class="clicavel">${inputNumero.value}</td>`; // Adiciona o número
    linha += `<td><input type="checkbox" class="selecionar"></td>`; // Adiciona a checkbox para cada linha
    linha += '</tr>';


    //acrescentando mais uma linha e nao fazer uma em cima da outra

    linhas += linha;

    const corpoTabel = document.querySelector('tbody');
    corpoTabel.innerHTML += linhas;

    //limpa 
    inputNome.value = '';
    inputNumero.value = '';

});

// função de limpar com botao
btnLimpar.addEventListener('click', function() {
    
    document.getElementById('nome-contato').value = '';
    document.getElementById('numero-contato').value = '';



    // Excluir as linhas selecionadas
    const checkboxes = document.querySelectorAll('.selecionar:checked');
    console.log(checkboxes);
    checkboxes.forEach(function (checkbox) {
        const linha = checkbox.closest('tr');
        linha.remove(); // Remove a linha onde a checkbox foi marcada
    });

    
});

