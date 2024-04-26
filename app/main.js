let produtos = []
const dados = "https://json-o-glamouria.vercel.app/produtos"
getBuscarProdutos()

async function getBuscarProdutos(){
    const res = await fetch(dados)
    produtos = await res.json()
    console.table(produtos)
    exibirOsProdutos(produtos)
}

