let produtos = []
const dados = "http://localhost:3000/produtos"
getBuscarProdutos()

async function getBuscarProdutos(){
    const res = await fetch(dados)
    produtos = await res.json()
    console.table(produtos)
    exibirOsProdutos(produtos)
}

