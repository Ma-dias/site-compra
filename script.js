// Configuração do WhatsApp do seu Bar (Coloque o número real com DDD)
const NUMERO_WHATSAPP = "5561991538271";

// Árvore Completa de Produtos organizada conforme suas categorias e subcategorias
const menu = [
    {
        categoria: "1. Bebidas",
        subcategorias: [
            {
                nome: "1.1 Cervejas",
                produtos: [
                    {id: 1, nome: "Heineken Long Neck 330ml", preco: 12.00},
                    {id: 2, nome: "Michelob Long Neck 330ml", preco: 12.00},
                    {id: 3, nome: "Amistel Ultra Long Neck 330ml", preco: 10.00},
                    {id: 4, nome: "Stella Pure Gold Long Neck 330ml", preco: 12.00},
                    {id: 5, nome: "Corona Long Neck 330ml", preco: 12.00},
                    {id: 6, nome: "Skol beats", preco: 13.00},
                    {id: 7, nome: "Caracu Lata 350ml", preco: 12.00},
                    {id: 8, nome: "51 ice Long Neck 275ml", preco: 12.00},
                    {id: 9, nome: "Heineken 600ml", preco: 20.00},
                    {id: 8, nome: "Corona 600ml", preco: 20.00},
                    {id: 8, nome: "Antartica Original 600ml", preco: 16.00},
                    {id: 10, nome: "Amistel 600ml", preco: 16.00}

                ]
            },
            {
                nome: "1.2 Drinks e Coquetéis",
                produtos: [
                    {id: 50, nome: "Caipirinha de Limão (Cachaça)", preco: 16.00},
                    {id: 51, nome: "Caipirosca", preco: 25.00},
                    {id: 52, nome: "Campare", preco: 15.00},
                    {id: 53, nome: "Dose Gin Tonica", preco: 12.00}
                ]
            },
            {
                nome: "1.3 Destilados e Licores",
                produtos: [
                    {id: 70, nome: "Dose Cachaça Envelhecida", preco: 12.00},
                    {id: 71, nome: "Dose Vodka Absolut", preco: 22.00},
                    {id: 72, nome: "Dose Whisky Red Label", preco: 25.00},
                    {id: 73, nome: "Dose Licor 43", preco: 26.00}
                ]
            },
            {
                nome: "1.4 Vinhos e Espumantes",
                produtos: [
                    {id: 90, nome: "Tinto Cabernet Sauvignon (Garrafa)", preco: 85.00},
                    {id: 91, nome: "Branco Chardonnay (Garrafa)", preco: 85.00},
                    {id: 92, nome: "Espumante Brut 750ml", preco: 95.00},
                    {id: 93, nome: "Taça de Vinho da Casa", preco: 22.00}
                ]
            },
            {
                nome: "1.5 Bebidas Não Alcoólicas",
                produtos: [
                    {id: 110, nome: "Coca-Cola Lata 350ml", preco: 8.00},
                    {id: 111, nome: "Água Mineral sem Gás 500ml", preco: 5.00},
                    {id: 112, nome: "Água com Gás 500ml", preco: 6.00},
                    {id: 113, nome: "Água de Coco Natural 300ml", preco: 10.00},
                    {id: 114, nome: "Suco Natural de Laranja 400ml", preco: 10.00},
                    {id: 115, nome: "Energético Red Bull 250ml", preco: 16.00},
                    {id: 116, nome: "Energético Red Bull 250ml", preco: 16.00}

                ]
            }
        ]
    },


    {
        categoria: "2. Comidas",
        subcategorias: [
            {
                nome: "2.1 Porções e Petiscos",
                produtos: [
                    {id: 120, nome: "Batata Frita Tradicional (500g)", preco: 35.00},
                    {id: 121, nome: "Mandioca Frita com Bacon", preco: 38.00},
                    {id: 122, nome: "Porção de Pastéis Misto (10 un)", preco: 32.00},
                    {id: 123, nome: "Contra Filé na Chapa com Pão", preco: 68.00},
                    {id: 124, nome: "Tábua de Frios Completa", preco: 55.00}
                ]
            },
            {
                nome: "2.2 Pratos e Refeições",
                produtos: [
                    {id: 140, nome: "Jantinha Completa", preco: 35.00},
                    {id: 141, nome: "Espeto Simples", preco: 16.00},
                    {id: 142, nome: "Queijo Qualy", preco: 12.00}
                ]
            }
        ]
    },
    {
        categoria: "3. Lanches",
        subcategorias: [
            {
                nome: "3.1 Sanduíches e Salgados",
                produtos: [
                    {id: 150, nome: "Burguer Artesanal 180g + Fritas", preco: 38.00},
                    {id: 151, nome: "Misto Quente Especial", preco: 14.00},
                    {id: 152, nome: "Sanduíche de Filé Mignon", preco: 34.00},
                    {id: 153, nome: "Coxinha de Frango com Requeijão", preco: 9.00}
                ]
            }
        ]
    },
    {
        categoria: "4. Bomboniere e Snacks",
        subcategorias: [
            {
                nome: "4.1 Doces e Snacks",
                produtos: [
                    {id: 401, nome: "Chocolate Barra 80g", preco: 10.00},
                    {id: 402, nome: "Pacote de Chicletes/Pastilhas", preco: 5.00},
                    {id: 403, nome: "Batata Chips Pringles", preco: 18.00},
                    {id: 404, nome: "Amendoim Torrado e Salgado", preco: 8.00},
                    {id: 405, nome: "Picolé / Sorvete Kibon", preco: 12.00}
                ]
            }
        ]
    },
    {
        categoria: "5. Cigarros e Tabacaria",
        subcategorias: [
            {
                nome: "5.1 Tabacaria Geral",
                produtos: [
                    {id: 501, nome: "Maço de Cigarro Marlboro", preco: 14.00},
                    {id: 502, nome: "Cigarro de Palha (Maço)", preco: 18.00},
                    {id: 503, nome: "Pod Descartável 1500 puffs", preco: 65.00},
                    {id: 504, nome: "Isqueiro Bic", preco: 7.00},
                    {id: 505, nome: "Seda para Cigarro", preco: 6.00}
                ]
            }
        ]
    },
    {
        categoria: "6. Conveniência e Diversos",
        subcategorias: [
            {
                nome: "6.1 Utilidades e Conveniência",
                produtos: [
                    {id: 601, nome: "Eno / Antiácido Sachê", preco: 5.00},
                    {id: 602, nome: "Dorflex (Cartela)", preco: 8.00},
                    {id: 603, nome: "Preservativo (Pacote c/ 3)", preco: 12.00},
                    {id: 604, nome: "Cabo de Celular (Type C / iPhone)", preco: 35.00},
                    {id: 605, nome: "Carregador de Parede Universal", preco: 45.00}
                ]
            }
        ]
    }
];

let carrinho = {};

// Função para renderizar o cardápio em formato de Acordeão
function carregarCardapio() {
    const container = document.getElementById('cardapio-categorias');
    container.innerHTML = '';

    menu.forEach((catObj, indexCat) => {
        // Div da Categoria Principal
        const catDiv = document.createElement('div');

        let subcatsHTML = '';

        catObj.subcategorias.forEach((subObj, indexSub) => {
            let produtosHTML = '';

            subObj.produtos.forEach(prod => {
                carrinho[prod.id] = {nome: prod.nome, preco: prod.preco, qtd: 0};

                produtosHTML += `
          <div class="produto-item">
            <div class="produto-info">
              <strong>${prod.nome}</strong>
              <span>R$ ${prod.preco.toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="produto-controles">
              <button class="btn-qtd" onclick="alterarQtd(${prod.id}, -1)">-</button>
              <span class="qtd-valor" id="qtd-${prod.id}">0</span>
              <button class="btn-qtd" onclick="alterarQtd(${prod.id}, 1)">+</button>
            </div>
          </div>
        `;
            });

            subcatsHTML += `
        <div class="subcategoria-titulo" onclick="toggleElemento('subcat-${indexCat}-${indexSub}')">
          <span>${subObj.nome}</span>
          <span>▼</span>
        </div>
        <div id="subcat-${indexCat}-${indexSub}" class="subcategoria-conteudo">
          ${produtosHTML}
        </div>
      `;
        });

        catDiv.innerHTML = `
      <div class="categoria-titulo" onclick="toggleElemento('cat-${indexCat}')">
        <span>${catObj.categoria}</span>
        <span>▼</span>
      </div>
      <div id="cat-${indexCat}" class="categoria-conteudo">
        ${subcatsHTML}
      </div>
    `;

        container.appendChild(catDiv);
    });
}

// Abrir e Fechar Seções
function toggleElemento(id) {
    const el = document.getElementById(id);
    if (el.classList.contains('ativo')) {
        el.classList.remove('ativo');
    } else {
        el.classList.add('ativo');
    }
}

// Alterar quantidade
function alterarQtd(id, delta) {
    if (carrinho[id].qtd + delta >= 0) {
        carrinho[id].qtd += delta;
        document.getElementById(`qtd-${id}`).innerText = carrinho[id].qtd;
        atualizarCarrinho();
    }
}

function excluirItem(idProduto) {
  console.log(idProduto);
  console.log(carrinho);
  if(carrinho[idProduto]) {
      carrinho[idProduto].qtd = 0;
      atualizarCarrinho();
  }
}


// Atualizar resumo no final da tela
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('carrinho-itens');
    const valorTotalEl = document.getElementById('valor-total');

    listaCarrinho.innerHTML = '';
    let total = 0;
    let temItens = false;

    Object.keys(carrinho).forEach(id => {
        const item = carrinho[id];
        if (item.qtd > 0) {
            temItens = true;
            const subtotal = item.qtd * item.preco;
            total += subtotal;

            const li = document.createElement('li');
            li.innerHTML = `
        <span>${item.qtd}x ${item.nome}</span>
        <span>R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
        <button class="btn-qtd excluir" onclick="excluirItem(${id})">-</button> 
      `;
            listaCarrinho.appendChild(li);
        }
    });

    if (!temItens) {
        listaCarrinho.innerHTML = '<li class="vazio">Nenhum item selecionado.</li>';
    }

    valorTotalEl.innerText = total.toFixed(2).replace('.', ',');
}

// Enviar pelo WhatsApp
function enviarPedido() {
    const zona = document.getElementById('zona').value;
    const ponto = document.getElementById('ponto').value;
    const cliente = document.getElementById('cliente').value;

    if (!zona || !ponto) {
        alert("Por favor, selecione a Área do Clube e informe o Ponto de Referência.");
        return;
    }

    if (!cliente) {
        alert("Por favor, informe seu nome.");
        return;
    }

    let itensTexto = "";
    let total = 0;

    Object.keys(carrinho).forEach(id => {
        const item = carrinho[id];
        if (item.qtd > 0) {
            const subtotal = item.qtd * item.preco;
            total += subtotal;
            itensTexto += `• ${item.qtd}x ${item.nome} - R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
        }
    });

    if (total === 0) {
        alert("Selecione ao menos um produto antes de finalizar.");
        return;
    }

    let mensagem = `*BAR DO CLUBE* - Novo Pedido! 🍹\n\n`;
    mensagem += `👤 *Cliente:* ${cliente}\n`;
    mensagem += `📍 *Área:* ${zona}\n`;
    mensagem += `🎯 *Local Exato:* ${ponto}\n\n`;
    mensagem += `📋 *ITENS DO PEDIDO:*\n${itensTexto}\n`;
    mensagem += `💰 *TOTAL:* R$ ${total.toFixed(2).replace('.', ',')}\n\n`;
    mensagem += `_Aguardando confirmação do pedido._`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

window.onload = carregarCardapio;