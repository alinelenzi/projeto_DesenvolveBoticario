const elementosParaInserirProdutos = document.getElementById('produtos')


function exibirOsProdutos(listaDeProdutos){
    listaDeProdutos.forEach(produto => {
        elementosParaInserirProdutos.innerHTML += `
            <div class="box__produtos__card">
                <img class="imagem-produtos" src="${produto.imagem}" alt="${produto.alt}">
                <div class="card-produto">
                    <h5 class="card-title">${produto.titulo}</h5>
                    <p class="card-text">${produto.descricao}</p>
                    <p class="card-text preco-sem-desconto">R$ ${produto.preco.toFixed(2)}</p>
                    <p class="card-text preco-com-desconto">R$ ${produto.preco.toFixed(2)}</p>
                    <a href="#" class="btn-produto">Ver mais</a>
                </div>
            </div>
        `  
    })
}
