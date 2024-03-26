const form = document.getElementById('form')
let linhas = ' ';
const imgaprovado = '<img src="/build/imagem/aprovado.png" alt="Emoji festejando"/>';
const imgreprovado = '<img src="/build/imagem/reprovado.png" alt="Emoji triste"/>';
const atividades = [];
const notas = [];
const spanaprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanreprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaminima = parseFloat(prompt("digite a nota minima:"))

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizamedia ();
})

function adicionalinha(){
    const NomeAtividade = document.getElementById('Nome-Atividade');
    const NotaAtividade = document.getElementById('Nota-Atividade');

    if (atividades.includes(NomeAtividade.value)) {
        alert(`A atividade ${NomeAtividade.value} já foi inserida`);
    } 
    else {
    notas.push(parseFloat(NotaAtividade.value));
    atividades.push(NomeAtividade.value);

    let linha ='<tr>';
    linha += `<td>${NomeAtividade.value}</td>`;
    linha += `<td>${NotaAtividade.value}</td>`;
    linha += `<td>${NotaAtividade.value >=notaminima ? imgaprovado : imgreprovado}</td>`;
    linha += '</tr>';

    linhas += linha
 }
    NomeAtividade.value = '';
    NotaAtividade.value = '';
   
}

function atualizatabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizamedia () {
    const mediafinal = cauculamedia ();

    document.getElementById('media-final').innerHTML = mediafinal;
    document.getElementById('resultado-final').innerHTML = mediafinal >=notaminima ? spanaprovado : spanreprovado;

}

function cauculamedia (){
    let somanotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somanotas += notas[i];
    }

    return somanotas / notas.length;

}