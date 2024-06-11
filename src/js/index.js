//https://chromewebstore.google.com/detail/inmopeiepgfljkpkidclfgbgbmfcennb

//alert("Seja Bem-Vindo!!!")  esta lincado esta funcionando

/*objetivo:Quando o usuario clicar no botao mostrar mais quero que abra os projetos que estão escondidos no html

1. pegar o botão mostrar mais no js pra poder  verificar quando o usuario clicar en cima dele*/

const botaoMostrarProjetos = document.querySelector('.btn-mostra-projetos');
//console.log(botaoMostrarProjetos);
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')  //css .projetos .projeto.ativo{esta block
//console.log(projetosInativos);

//2 identificar o clique no botao par adiparar um acção
botaoMostrarProjetos.addEventListener('click', () => {
    //console.log('teste')

//3 adicionar uma classe "ativo" nos porjetos escondidos, buscar o projeto que esta escondido no html e adicinoanar a classe ativa nele, adicionar a class
    projetosInativos.forEach(projetoInativo => {  //para cada projeto inativo forEach
        //console.log(projetoInativo);
        //console.log(projetoInativo.classList);
        projetoInativo.classList.add('ativo');   //lista das class que o doc tem que tem um adiv, .add adiciona um aclase nova
    });
//objetivo2: esconder o botao de mostrar mais
//1 pegar o borao e esconder ele   (do css esta none .projetos .btn-mostra-projetos.remover{)
    botaoMostrarProjetos.classList.add('remover');

});

/*
refacturar
esconderBotao();
function esconderBotoa() {
    botaoMostrarProjetos.classList.add('remover');
}
    mostrarMaisProjetos();
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
*/
