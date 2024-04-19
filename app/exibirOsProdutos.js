const elementosParaInserirProdutos = document.getElementById('produtos')


function exibirOsProdutos(listaDeProdutos){
    listaDeProdutos.forEach(produto => {
        elementosParaInserirProdutos.innerHTML += `
        <div class="col-12 col-md-6 col-xxl-4 pb-4">
            <div class="card">
                <img class="d-none d-xl-block imagem-produtos" src="${produto.imagem}" alt="${produto.alt}">
                <div class="card-body">
                    <h5 class="card-title">${produto.titulo}</h5>
                    <p class="card-text">${produto.descricao}</p>
                    <p class="preco-sem-desconto">R$${produto.preco.toFixed(2)}</p>
                    <p class="preco-com-desconto">R$${produto.preco.toFixed(2)}</p>
                    <a href="#" class="btn btn-primary botao-lilas rounded-0 border-0">Ver mais</a>
                </div>
            </div>
        </div> 
        `  
    })
}
